var levels = {};
var levelNames = [];

//console.log("Defininig addLevel");

function addLevel(levelname, leveldef, nextLevel)
{
    //console.log("loading level with name " + levelname + " and definition " + leveldef);
    levels[levelname] = leveldef;
    levels[levelname].nextLevel = nextLevel;
    levelNames.push(levelname);
}

//console.log(addLevel);

LevelReader = function()
{
    this.loadObject = function (o, world) 
    {
        //console.log("loading object.");
        
        // TODO: sanity checks (see validateJSON)
    
        var width = o["content"][0].length;
        var height = o["content"].length;
    
        world.grid = new Array(width);
        for (var i = 0; i < width; ++i) {
            world.grid[i] = new Array(height);
        }
    
        //console.log("loading object 2.");


        for (var y = 0; y < height; ++y)
            for (var x = 0; x < width; ++x)
            {
                world.grid[x][y] = new Tile(world, new Position(x, y));
                world.grid[x][y].name = o.content[y][x];
            }
            
        for (var y = 0; y < height; ++y) 
        {
            var line = o["content"][y];
            for (var x = 0; x < width; ++x) 
            {
                var tile = world.grid[x][y];
                var c = line[x];
    
                //console.log("loading object 3.");
                //console.log(o);
                var entityList = o["names"][c];
                if (entityList == undefined) entityList = [];
                
                for (var i = 0; i < entityList.length; ++i)
                {
                    var obj;
                    
                    if(!entityList[i].hasOwnProperty('type'))
                        throw new Error("Entityattribut 'type' wurde nicht definiert");
                    
                    switch(entityList[i].type)
                    {
                        case 'Floor':
                            obj = new Floor(world, tile);
                            break;
                        case 'Exit':
                            obj = new Exit(world, tile);
                            break;
                        case 'BigBox':
                            obj = new BigBox(world, tile);
                            break;
                        case 'Wall':
                            obj = new Wall(world, tile);
                            break;
                        case 'Player':
                            var direction = Direction.LEFT;
                            if(entityList[i].hasOwnProperty("direction"))
                                direction = Direction[entityList[i]["direction"].toUpperCase()];
                            world.players.push(new Player(world, tile, direction));
                            break;
                        case 'Door':
                            var doorState = null;
                            if(entityList[i].hasOwnProperty("state"))
                            {
                                if(entityList[i].state == "open") doorState = true;
                                else if(entityList[i].state == "closed") doorState = false;
                            }
                            if(doorState == null) throw new Error("Zustand der Tür ungültig");
                            obj = new Door(world, tile, doorState);
                            break;
                        case 'PressurePlate':
                            obj = new PressurePlate(world, tile);
                            break;
                        case 'Portal':
                            obj = new Portal(world, tile);
                            break;
                        case 'Ice':
                            obj=new Ice(world,tile);
                            break;
                        case 'DirectedPortal':
                            obj = new DirectedPortal(world, tile);
                            break;
                        case 'TextMessage':
                            if(!entityList[i].hasOwnProperty("message"))
                                throw new Error("Keine Nachricht angegeben");
                            obj = new TextMessage(world, tile, entityList[i].message);
                            break;
                        case 'LazorEmitter':
                            if (entityList[i].hasOwnProperty("turnedOn") && entityList[i].hasOwnProperty("direction")) {
                                var direction = Direction[entityList[i]["direction"].toUpperCase()];
                                obj = new LazorEmitter(world, tile, entityList[i].turnedOn, direction);
                            } else {
                                throw new Error("turnedOn oder direction fehlt");
                            }                   
                            break;
                        case 'LazorReceiver':
                            obj = new LazorReceiver(world, tile);
                            break;
                        case 'LazorMirror':
                            if(entityList[i].hasOwnProperty("startOrientation")){
                                obj = new LazorMirror(world, tile, entityList[i].startOrientation);
                            } else {
                                throw new Error("keine startOrientation angegeben");
                            }
                            break;
                    default:
                        console.log('Unknown Entity Type: ' + entityList[i]["type"]);
                        throw 'Unknown Entity Type: ' + entityList[i]["type"];
                    }
    
                    /* now set the standard things */
                    
                    if(entityList[i].hasOwnProperty("name"))
                        obj.name = entityList[i].name;
                    if(entityList[i].hasOwnProperty("sprite"))
                        obj.sprite = entityList[i].sprite;
                    if(entityList[i].hasOwnProperty("zIndex"))
                        obj.zIndex = entityList[i].zIndex;
                }
            }
        }
    
        // call init methods (if defined)
        for (var x = 0; x < width; ++x) {
            for (var y = 0; y < height; ++y) {
                for (var z = 0; z < world.grid[x][y].entities.length; ++z) {
                    if (world.grid[x][y].entities[z].init)
                        world.grid[x][y].entities[z].init();
                    //console.log("calling " + x + " " + y);
                }
            }
        }
        if(o.init) o.init(world);
    };
    
    this.byFileName = function(mapName)
    {
        var world = new World();
        if(!levels[mapName]) throw new Error("Level " + mapName + " nicht gefunden");
        this.loadObject(levels[mapName], world);
        world.levelName = mapName;
        world.nextLevel = levels[mapName].nextLevel;
        return world;
    };
};
