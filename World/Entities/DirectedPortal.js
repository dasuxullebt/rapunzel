var DirectedPortal = function (world, tile) {
    Entity.call(this, world, tile, 'DirectedPortal');
    //this.isEnabled = true;
        this.isActivated = true;
    
    this.zIndex = -2;
    
    this.partner = this;
        
    // TODO Animation

    this.onEnter = function(player, direction)
    {
        if (this.isActivated && this.partner.isActivated && this.partner.tile.getNeighbour(direction).isPlayerAllowedToEnterFrom(player, direction))
        {                       
            Ghost = new PlayerDummy(world, this.tile.getNeighbour(-player.direction));
            Ghost.direction = player.direction;
            //Ghost.animation.inAnimation = true;
            Ghost.animation.startAnimation(Ghost.direction);
            
            player.animation.position = this.partner.tile.position;
            player.moveToTile(this.partner.tile.getNeighbour(direction));
            
            //TODO queue second animation
        }
    };
        
    this.isPlayerAllowedToEnterFrom = function(player, direction)
    {
        return this.partner.tile.getNeighbour(direction).isPlayerAllowedToEnterFrom(player, direction);
    };
};
