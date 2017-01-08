var DirectedPortal = function (world, tile) {
    Entity.call(this, world, tile, 'DirectedPortal');
    //this.isEnabled = true;
	this.isActivated = true;
    
    this.zIndex = -2;
    
    this.partner = this;
	
	// TODO Animation
    
	this.onEnter = function(player, direction)
	{
		if (this.partner.tile.getNeighbour(direction).isPlayerAllowedToEnterFrom(player, direction))
		{			
			player.tile.playerLeavesTile(player, direction);
			player.tile = this.partner.tile.getNeighbour(direction);
			player.tile.playerEntersTile(player, direction);
			
			//TODO queue second animation
		}
	};
	
	this.isPlayerAllowedToEnterFrom = function(player, direction)
    {
        return this.partner.tile.getNeighbour(direction).isPlayerAllowedToEnterFrom(player, direction);
    };
};
