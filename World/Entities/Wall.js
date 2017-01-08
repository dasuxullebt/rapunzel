var Wall = function(world, tile)
{
    Entity.call(this, world, tile, 'Wall');
    
    this.zIndex = -8;
    
    this.init = function()
    {
        this.sprite = "Wall";
        var left = this.tile.getNeighbour(Direction.LEFT);
        if(left && left.hasEntity("Wall")) this.sprite += "Left";
        var right = this.tile.getNeighbour(Direction.RIGHT);
        if(right && right.hasEntity("Wall")) this.sprite += "Right";
        var up = this.tile.getNeighbour(Direction.UP);
        if(up && up.hasEntity("Wall")) this.sprite += "Up";
        var down = this.tile.getNeighbour(Direction.DOWN);
        if(down && down.hasEntity("Wall")) this.sprite += "Down";
    };
    
    this.isPlayerAllowedToEnterFrom = function(player, direction)
    {
                return false;
    };
};



