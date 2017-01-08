var LazorReceiver = function(world, tile)
{
	Entity.call(this, world, tile, 'LazorReceiver');
	
	Object.defineProperty(this, 'isReceiving', {
		get : function () {return this.state;},
		set : function (val) {
			var changed = (this.state != val);
			this.state = val;
			if (this.onStatusChange && changed)
			{
				this.onStatusChange();
				//alert ("stuff" + this.state);
			}
		}
	});
	
	this.isReceiving = false;
	
	this.turnOn = function()
	{
		this.isReceiving = true;
	};
	
	this.turnOff = function()
	{
		this.isReceiving = false;
	};
	
	this.isPlayerAllowedToEnterFrom = function()
	{
		return false;
	};
}