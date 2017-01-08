var Player = function(world, tile, direction, name = 'Player1')
{
    Entity.call(this, world, tile, name);
    
    this.direction = direction;
    
    this.zIndex = -10;
    
    this.isPlayerAllowedToEnterFrom = function(player,direction)
    {
        return false;
    }
    
    this.update = function()
    {   
        this.animation.update(this);
    };

    this.canMove = function(direction)
    {
        return this.tile.isPlayerAllowedToLeaveTo(this, direction);
    };

    this.move = function(direction)
    {
        if ( world.gameOver )
        { console.log("Game Over. Player can not be moved anymore."); return; }
        
        if ( !this.animation.inAnimation)
        {
            this.direction = direction;
                        
            if(this.canMove(direction))
            {   
                this.tile.playerLeavesTile(this, direction);
                                
                for (var i = 0; i < this.tile.entities.length;i++)
                {
                    if(this.tile.entities[i]==this)
                    {
                        this.tile.entities.splice(i,1);
                    }
                }
                                
                this.tile = this.tile.getNeighbour(this.direction);   
                this.animation.startAnimation();
                this.tile.entities.push(this);
                this.tile.playerEntersTile(this, this.direction);
            }
        }
        else {console.log("Entity still in animation");}
    };

    this.canAction = function(type)
    {
        return false;
    };
    
    this.doAction = function(type){};

    this.performAction = function(type)
    {
        return this.tile.playerDoesAction(this, type);
    };
};
