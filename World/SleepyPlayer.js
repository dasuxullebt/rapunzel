var SleepyPlayer = function(world, tile, direction, name = 'SleepyPlayer1')
{
    Player.call(this, world, tile, direction, name);
    
    curSteps = 0;
    posSteps = 5;
    this.actionList = ['wakeUp'];
    
    this.update = function()
    {   
        if (this.inAnimation)
        {
            if (this.animationProgress >= 1)
            {
                this.animationProgress = 1;
                this.inAnimation = false;           
            }
            else
            {
                this.animationProgress += game.system.delta * this.animationStep;
                if (this.animationProgress >= 1)
                    this.animationProgress = 1;
            }
        }
    };

    this.canMove = function(direction)
    {
		if(curSteps<posSteps){
			return this.tile.isPlayerAllowedToLeaveTo(this, direction);
		}else{
			return false;
		}
    };

    this.move = function(direction)
    {
        if (!this.inAnimation)
        {
            this.direction = direction;
            if(this.canMove(direction))
            {   
				curSteps++;
                this.tile.playerLeavesTile(this, direction);
                this.tile = this.tile.getNeighbour(this.direction);   
                this.tile.playerEntersTile(this, this.direction);
                this.inAnimation = this.isAnimated;
                this.animationProgress = game.system.delta * this.animationStep;
            }
        }
        else {console.log("Entity still in animation");}
    };

    this.canAction = function(type)
    {
        return false;
    };

    
    this.doAction = function(player, type)
	{
		if(type == 'wakeUp')
			this.wakeUp();	
	};
	this.wakeUp = function(){
		curSteps=0;
	};
};
