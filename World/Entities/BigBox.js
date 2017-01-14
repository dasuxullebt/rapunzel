var BigBox = function(world, tile)
{   
    Entity.call(this, world, tile, 'BigBox');
    
    this.zIndex = -9;    
    
    this.animation.isAnimated = true;
    
    //TODO: Animation
    this.update = function()
    {
        this.animation.update(this);
    };
    
    this.onEntitiesChange = function(entities)
    {
        //TODO die Zerstörung der Kiste, wenn sie die 
    };
        
    this.isPlayerAllowedToEnterFrom = function(player, direction)
    {
        if (direction == null || this.animation.inAnimation)
        {
            return false;
        }
        else if(this.tile.getNeighbour(direction)==null)
        {
            return false;
        }
        else if(player.type == this.type)
        {
            return false;
        }
        else
            return this.tile.getNeighbour(direction).isPlayerAllowedToEnterFrom(this, direction);
    };

    this.onEnter = function(player, direction)
    {
        if (player != this)
        {
            //console.log(player);
            //console.log(direction);   
            this.pushTo(direction);
        }
    };

    this.pushTo = function(direction)
    {
        //verschiebe die Box:
        
        this.direction = direction;
        
        this.moveToTile(this.tile.getNeighbour(direction));
    }
};
