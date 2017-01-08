var LazorEmitter = function (world, tile, turnedOn, direction) {

	Entity.call(this, world, tile, 'LazorEmitter');

	this.direction = direction;
	this.turnedOn = true;
	var targetTile = this.tile.getNeighbour(this.direction);
	this.lazor;

	this.init = function () {
		if (turnedOn) {
			this.enable();
		} else {
			this.disable();
		}
	};
	
	this.update = function()
	{
		if (this.turnedOn)
		{
			if (!targetTile.hasEntity('LazorBeam') && this.checkTransparency(targetTile))
			{
				this.lazor = new LazorBeam(world, targetTile, direction, true);
			}
		}
	};
	
	this.isPlayerAllowedToEnterFrom = function(player, direction)
	{
		return false;
	};

	this.enable = function () {
		this.turnedOn = true;
	};

	this.checkTransparency = function (checkTile) {
		for (var i = 0; i < checkTile.entities.length; i++) {
			if (checkTile.entities[i].type != 'Floor')//|| !this.tile.entities[i].isTransparent)
			{
				return false;
			}
		}
		return true;
	};

	this.disable = function () {
		this.turnedOn = false;
		lazor.remove();
	};

	this.toggle = function () {
		if (turnedOn) {
			this.disable();
		} else {
			this.enable();
		}
	};
};