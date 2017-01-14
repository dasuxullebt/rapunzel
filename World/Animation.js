var Animation = function(position, animationStep = 5)
{
    // this.animationType = 0;
    this.isAnimated = true;
    this.inAnimation = false;
    this.limit = 1;
    this.progress = this.limit;
    this.step = animationStep;
    this.position = position;
    this.direction;
    
    this.update = function(parent)
    {
        if (this.inAnimation)
        {
            this.progress += game.system.delta * this.step;
            if (this.progress >= this.limit)
            {
                this.progress = 1;
                this.inAnimation = false;
                
                this.position = parent.tile.position;
                
                world.levelFinished = world.exitReached;
            }
        }
    }
    
    this.startAnimation = function(direction)
    {
        if (!this.inAnimation)
        {
            this.inAnimation = true;
            this.direction = direction;
            this.progress = 0;
        }
    }
}
