var BigBox = function(world, tile)
{   
    Entity.call(this, world, tile, 'BigBox');
    this.zIndex = -9;    
    
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
		if (direction == null)
			return false;
		else if(this.tile.getNeighbour(direction)==null)
        {
            return false;
        }
        else if(player.type == "BigBox")
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
        for (var i = 0; i< this.tile.entities.length;i++)
        {
            if(this.tile.entities[i]==this)
            {
                this.tile.entities.splice(i,1);
                break;
            }
        }   
        
        this.tile.playerLeavesTile(this, direction);
                
        this.direction = direction;
        
        this.animation.startAnimation();
        
        this.tile=this.tile.getNeighbour(direction);
		
        this.tile.entities.push(this);
		
        this.tile.playerEntersTile(this, direction);
    }
};
