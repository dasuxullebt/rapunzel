var printWorld = function(w = world) {
    for(var x = 0; x < world.grid.length; ++x)
        for(var y = 0; y < world.grid[x].length; ++y)
        {
            console.log("x = " + x + ", " + "y = " + y);
            console.log(world.grid[x][y]);
            for(var i = 0; i < world.grid[x][y].entities.length; ++i)
                console.log(world.grid[x][y].entities[i]);  
        }
    
    for(var i = 0; i < world.players.length; ++i)
    {
        console.log("Player: id=" + i);
        console.log(world.players[i]);
    }
}

var printMap = function(w = world) {

    console.log("---------------------------------------------------------------------");

    rows = "";
    for (var y = 0; y < world.size.y; y++)
    {
        row = "(";
        for (var x = 0; x < world.size.x; x++)
        {            
            for (var i = 0; i < world.grid[x][y].entities.length; i++)
            {
                row += "," + world.grid[x][y].entities[i].type[0] + "";
            }
            
            if(world.players[0].tile.position.x == x && world.players[0].tile.position.y == y)
            {
                row += ",p";
            }
            
            row += ")\t(";
        }
        rows += row + ")\n";
    }
    
    console.log(rows);
    console.log("---------------------------------------------------------------------");
}




//Anzeige der Spielwelt
var tile_height = 50;
var tile_width = 50;
var levelName = "test";
var world, mainScene;

game.module('game.game').body(function() //this is Pandajs feature
{
    loadAssets(); //Look further down
    
    var lr = new LevelReader();
    
    mainScene = game.createScene('Game', 
    {
        init: function()
        {
            this.world = lr.byFileName(levelName);
            world = this.world;
            
            this.display = new Display();
            this.display.init(this.world);
            
            this.input = new Input(this, this.world);  
        },
        
        update: function()
        {
            
            if (world.levelFinished)
            {
                if (world.nextLevel)
                {
                    levelName = world.nextLevel;
                    console.log("Level finished\n" + "Now playing " + levelName);
                    this.init();
                }
                else
                {
                    console.log("Game Finished");
                    game.system.setScene('Main');
                }
            }
            
            if (this.world.levelRestart)
            {
                console.log("Level restarted");
                
                world = lr.byFileName(levelName);
                
                this.init()
            }
            
            
            this.world.update();
            this.display.update();
        },
            
        keydown: function(event)
        {
            //alert (event.toString() == "LEFT");
            this.input.moveEvent(event);
        }
  });
});

loadAssets = function()
{
    sprites = new Array(    'Wall','WallLeft','WallRight','WallUp','WallDown',
                            'WallLeftRight','WallUpDown','WallLeftDown',
                            'WallLeftUp','WallRightDown','WallRightUp',
                            'WallLeftRightUp','WallLeftRightDown',
                            'WallLeftUpDown','WallRightUpDown','WallLeftRightUpDown');
    for (var i = 0; i < sprites.length; i++)
    {
        game.addAsset('sprites/Wall/' + sprites[i] + '.png', sprites[i]);
    }
    game.addAsset('sprites/Floor/floor.png', 'Floor');
    game.addAsset('sprites/empty.png', 'Empty');
    game.addAsset('sprites/Floor/exit.png', 'Exit');

    game.addAsset('sprites/Player/player1.png', 'Player1');
    game.addAsset('sprites/Player/player2.png', 'Player2');
    game.addAsset('sprites/Player/gravestone.png', 'Player_Dead');
    
    game.addAsset('sprites/Floor/Portal2.png', 'Portal');
    game.addAsset('sprites/Floor/Portal3.png', 'DirectedPortal');
    game.addAsset('sprites/Entities/bigbox.png', 'BigBox');
    
    game.addAsset('sprites/Floor/doorclosed.png', 'Floor');
    game.addAsset('sprites/Floor/dooropen.png', 'Door_Open');
    game.addAsset('sprites/Floor/doorclosed.png', 'Door_Closed');
    game.addAsset('sprites/Floor/DirectedPortal.png', 'DirectedPortal');
    game.addAsset('sprites/Floor/platedefault.png', 'PressurePlate_notPressed');
    game.addAsset('sprites/Floor/platelocked.png', 'PressurePlate_deactivated');
    game.addAsset('sprites/Floor/platepressed.png', 'PressurePlate_Pressed');
	game.addAsset('sprites/Entities/ice.png', 'ice');
    game.addAsset('sprites/Entities/Lazor.png', 'LazorBeam');
    game.addAsset('sprites/Entities/statueprototype.png', 'LazorEmitter');
		game.addAsset('sprites/Entities/statueblueball.png', 'LazorReceiver');
		game.addAsset('sprites/coloredTiles/RedTile.png', 'LazorMirror');
	game.addAsset('sprites/Entities/Mirror1.png', 'Mirror1');
	game.addAsset('sprites/Entities/Mirror2.png', 'Mirror2');
}
