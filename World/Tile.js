Tile = function(world, position)
{
    this.world = world;
    this.position = position;
    this.entities = [];
    
    this.update = function()
    {
        for (var i = 0; i < this.entities.length; i++)
                if(this.entities[i].update)
                        this.entities[i].update();
    };
    
    this.hasEntity = function(type)
    {
        for (var i = 0; i < this.entities.length; i++)
        {
            if (this.entities[i].type == type)
                return true;
        }
        return false;
    };
        
    this.getEntityByType = function(type)
    {
        for (var i = 0; i < this.entities.length; i++)
        {
            if (this.entities[i].type == type)
                return this.entities[i];
        }
        return null;
    };
    
    this.getPlayerOnTile = function()
    {
        // search for a player on this tile
        for (var j = 0; j < world.players.length; j++ )
            if (world.players[j].tile == this )
                return world.players[j];
        return undefined;
    }
    
    this.getActions = function(player)
    {
        var actions = new Array();
        for (var i = 0; i < this.entities.length; i++)
        {
            if (this.entities[i].getActionList)
                actions.concat(this.entities[i].getActionList(player));
        }
        return actions;
    };
    
    this.getNeighbour = function(direction)
    {
        if(this.position.x == 0 && direction == Direction.LEFT) return null;
        if(this.position.x == this.world.size.x - 1 && direction == Direction.RIGHT) return null;
        if(this.position.y == 0 && direction == Direction.UP) return null;
        if(this.position.y == this.world.size.y - 1 && direction == Direction.DOWN) return null;
        
        if (direction == Direction.UP || direction == Direction.DOWN){
            return this.world.grid[this.position.x][this.position.y + Math.sign(direction)];
        }else{
            return this.world.grid[this.position.x + Math.sign(direction)][this.position.y];
        }
    };
    
    this.isPlayerAllowedToEnterFrom = function(player, direction)
    {      
        var ok = true;
        for (var i = 0; i < this.entities.length; i++)
            ok = ok & this.entities[i].isPlayerAllowedToEnterFrom(player, direction);
        return ok;
    };
    
    this.isPlayerAllowedToLeaveTo = function(player, direction)
    {
        var neighbour = this.getNeighbour(direction);
        if(!neighbour) return false;
        var ok = neighbour.isPlayerAllowedToEnterFrom(player, direction);
        for (var i = 0; i < this.entities.length; i++)
            ok = ok & this.entities[i].isPlayerAllowedToLeaveTo(player, direction);
        return ok;
    };
        
    this.playerEntersTile = function(player, direction)
    {
        //this.onEnter(player, direction);
        
        for (var i = 0; i < this.entities.length; i++)
        {
            if(this.entities[i].onEnter)
            {
                this.entities[i].onEnter(player, direction);
            }
        }
    };
    
    this.playerLeavesTile = function(player, direction)
    {
        //this.onLeave(player, direction);
            
        for (var i = 0; i < this.entities.length; i++)
            if(this.entities[i].onLeave)
                this.entities[i].onLeave(player, direction);
    };
    
    this.playerDoesAction = function(player, type)
    {
        if(this.doAction)
            this.doAction(player, type);
            
        for (var i = 0; i < this.entities.length; i++)
            if(this.entities[i].doAction)
                this.entities[i].doAction(player, type);
    };
};
