var PressurePlate = function(world, tile)
{
	Entity.call(this, world, tile, 'PressurePlate');
  
	Object.defineProperty(this, 'isPressed', {
		get : function () {return this.state;},
		set : function (val) {
			var changed = (this.state != val);
			this.state = val;
			if (this.onStatusChange && changed)
				this.onStatusChange();
		}
	});

	this.isDeactivated = false;
	this.sprite = 'PressurePlate_notPressed';
	this.isPressed = false;
	
  this.zIndex = -2;
    
		this.update = function()
		{
			this.setPressed();
		}
		
  this.onEnter = function(player, directionFrom)
    {
        //this.setPressed();
    };

  this.onLeave = function (player, directionTo)
    {
        //this.setPressed();
    };

	this.setPressed = function(){
		temp = false;
		for (var i = 0; i < this.tile.entities.length; ++i) {
			if (this.tile.entities[i].type.search('Player') == 0 || this.tile.entities[i].type == 'BigBox') {
				temp = true;
				break;
			}
		}
		this.isPressed = temp;

		if (this.isDeactivated)
		{
			this.sprite = 'PressurePlate_deactivated';
		}
		else
		{
			if (!this.isPressed)
			{
				this.sprite = 'PressurePlate_notPressed';
			}
			else
			{
				this.sprite = 'PressurePlate_Pressed';
			}
		}
	};	
};
