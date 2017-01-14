var PlayerDummy = function(world, tile)
{   
    Entity.call(this, world, tile);
    this.type='PlayerDummy';
    
    this.animation.isAnimated = true;
    
    this.zIndex = -10;
    
    this.sprite = "Player1";
    this.opacity = 0.5;
    
    this.update = function()
    {
        this.animation.update(this);
        if (!this.animation.inAnimation)
        {
            for (var i = 0; i < this.tile.entities.length; i++)
                if (this == this.tile.entities[i])
                    this.tile.entities.splice(i,1);
                    
            for (var i = 0; i < world.entities.length; i++)
                if (this == world.entities[i])
                    world.entities.splice(i,1);
        }
    };
};
