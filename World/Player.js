var Player = function(world, tile, direction, name = 'Player1')
{
    Entity.call(this, world, tile, name);
    
    this.direction = direction;
    
    this.zIndex = -10;
    
    this.animation.isAnimated = true;
    
    this.isPlayerAllowedToEnterFrom = function(player,direction)
    {
        return false;
    }

    this.canMove = function(direction)
    {
        return this.tile.isPlayerAllowedToLeaveTo(this, direction);
    };
    
    this.kill = function()
    {
        world.gameOver = true;
        this.sprite = "Player_Dead";
        world.didEntitiesChange = true;
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
                this.moveToTile(this.tile.getNeighbour(this.direction));
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
