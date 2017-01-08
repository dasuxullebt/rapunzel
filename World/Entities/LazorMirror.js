var  LazorMirror = function(world, tile, startOrientation = false)
{
  Entity.call(this, world, tile, 'LazorMirror');    
	
		
	Object.defineProperty(this, 'sprite', {
		get : function () {return this.orientation ? 'Mirror1' : 'Mirror2';}
	});

	//orientation = false: /
	//orientation = true:  \	
	this.orientation = startOrientation;
	this.fromDirection = Direction.RIGHT;
	this.emitDirection;
	var lazor;
	var lightStatus, localOri;
	
	this.recalc = function()
	{
		//alert("Stuff" + this.fromDirection);
		if (lazor) lazor.remove();
		
		switch (this.fromDirection)
		{
			case Direction.DOWN:
				if (this.orientation)
				{
					this.emitDirection = Direction.LEFT;
				}
				else
				{
					this.emitDirection = Direction.RIGHT;
				}						
				break;
			case Direction.UP:
				if (this.orientation)
				{
					this.emitDirection = Direction.RIGHT;
				}
				else
				{
					this.emitDirection = Direction.LEFT;
				}		
				break;
			case Direction.LEFT:
				if (this.orientation)
				{
					this.emitDirection = Direction.DOWN;
				}
				else
				{
					this.emitDirection = Direction.UP;
				}		
				break;
			case Direction.RIGHT:
				if (this.orientation)
				{
					this.emitDirection = Direction.DOWN;
					//alert("blub" + this.emitDirection);
				}
				else
				{
					this.emitDirection = Direction.UP;
					//alert("blub" + this.emitDirection);
				}		
				break;
		}
	};	
	
	Object.defineProperty(this, 'hasLight', {
		get : function () {
	    return lightStatus; },
		set : function (val) {
	    var temp = (lightStatus != val);
			lightStatus = val;
			if (temp) 
			{
				this.recalc();
				//console.log("Kekse");
			}
			//console.log  ( this.hasLight + " " + lightStatus);
		}
	});		
	
	Object.defineProperty(this, 'orientation', {
		get : function () {
	    return localOri; },
		set : function (val) {
	    localOri = val;
			this.recalc();
			//alert (this.orientation);
		}
	});	

	this.recalc();
	
	this.update = function()
	{
		//console.log(this.emitDirection + "Stuff" + this.hasLight);
		//console.log(this.hasLight +" "+ this.checkTransparency(this.tile.getNeighbour(this.emitDirection)) + " " + !this.tile.getNeighbour(this.emitDirection).hasEntity('LazorBeam'))
		if (this.hasLight && this.checkTransparency(this.tile.getNeighbour(this.emitDirection)) && !this.tile.getNeighbour(this.emitDirection).hasEntity('LazorBeam'))
			{
				//console.log('kjg');
				lazor = new LazorBeam(this.world, this.tile.getNeighbour(this.emitDirection), this.emitDirection, true);
			}
	};
	
	this.switchOrientation = function()
	{
		this.orientation = !this.orientation;
	};
	
	this.turnOn = function(fromDirection)
	{
		this.hasLight = true;
		this.fromDirection = fromDirection;
	};
	
	this.turnOff = function()
	{
		this.hasLight = false;
	};
	
	this.isPlayerAllowedToEnterFrom = function()
	{
		return false;
	};
	
		this.checkTransparency = function(checkTile)
		{
			for (var i = 0; i < checkTile.entities.length; i++)
			{
				if (checkTile.entities[i].type != 'Floor' && checkTile.entities[i].type != 'LazorBeam')//|| !this.tile.entities[i].isTransparent)
				{
					return false;
				}
			}
			return true;
		};
};
