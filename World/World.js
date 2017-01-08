var World = function()
{
    this.players = new Array();
    this.entities = new Array();
    this.grid = [[new Tile(this, {x: 0, y: 0}, 'floor', [])]];
    this.didEntitiesChange = false;
    this.exitReached = false;
    this.levelFinished = false;
    this.gameOver = false; // Spiel vorbei (ein Player gestorben?)

    Object.defineProperty(this, 'size', {get : function() {
        return {x: this.grid.length, y: this.grid[0].length};}});

    this.getTileByEntityName = function(name)
    {
        for (var k = 0; k < this.entities.length; k++)
            if (this.entities[k].name == name)
                return this.entities[k].tile;
        return null;
    }
    
    this.getEntityByEntityName = function(name)
    {
        for (var k = 0; k < this.entities.length; k++)
        {
            if (this.entities[k].name == name)
            {
                return this.entities[k];
            }
        }
        return null;
    }

    this.getEntityByName = function(name)
    {
        for(var i = 0; i < this.entities.length; ++i)
            if(this.entities[i].name == name)
                return this.entities[i];
        return null;
    }
    
    this.forEachTile = function(callback)
    {
        for(var x = 0; x < this.grid.length; ++x)
            for(var y = 0; y < this.grid[x].length; ++y)
                callback(this.grid[x][y]);
    }
    
    this.update = function()
    {
        for(var x = 0; x < this.grid.length; ++x)
            for(var y = 0; y < this.grid[x].length; ++y)
                this.grid[x][y].update();
    };          
};
