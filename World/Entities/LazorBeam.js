var LazorBeam = function(world, tile, direction, isPersistent = false)
{
    Entity.call(this, world, tile, 'LazorBeam');    
		
		this.direction = direction;
		var nextTile = this.tile.getNeighbour(this.direction);
    
    this.update = function()
		{
			if (!this.checkTransparency(this.tile)) this.remove();
			
			if (nextTile.hasEntity('LazorMirror'))
			{
				//console.log("turnon");
				nextTile.getEntityByType('LazorMirror').turnOn(-this.direction);
			}
			else if (nextTile.hasEntity('LazorReceiver'))
			{
				
				nextTile.getEntityByType('LazorReceiver').turnOn();
			}			
			else if (this.checkTransparency(nextTile) && !nextTile.hasEntity('LazorBeam'))
			{
				//console.log("has");
				nextTile.entities.push(new LazorBeam(this.world, nextTile, this.direction));
			}			
			
			if (!this.tile.getNeighbour(-this.direction).hasEntity('LazorBeam') && !isPersistent)
			{
				this.remove();
			}
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
		
		this.remove = function()
		{			
			if (nextTile.hasEntity('LazorReceiver'))
			{
				nextTile.getEntityByType('LazorReceiver').turnOff();
				//console.log("A");
			}		
			if (nextTile.hasEntity('LazorMirror'))
			{
				nextTile.getEntityByType('LazorMirror').turnOff();
				//console.log("A");
			}		
		
			for (var i = 0; i < this.world.entities.length; i++)
			{
				if (this.world.entities[i] == this)
				{
					this.world.entities.splice(i,1);
					//alert ("Y U no work brah");
				}
			}
				
			for (var i = 0; i < this.tile.entities.length; i++)
			{
				if (this.tile.entities[i] == this)
				{
					this.tile.entities.splice(i,1);
				}
			}
		
			//alert ("Delete me sucker"+this.tile.position.x+","+this.tile.position.y);	
			delete (this);
		};
};
