var Animation = function(position, animationStep = 5)
{
    // this.animationType = 0;
    this.isAnimated = true;
    this.inAnimation = false;
    this.animationProgress = 1;
    this.animationStep = animationStep;
    this.position = position;
    this.direction;
    
    this.update = function(parent)
    {
        if (this.inAnimation)
        {
            this.animationProgress += game.system.delta * this.animationStep;
            if (this.animationProgress >= 1)
            {
                this.animationProgress = 1;
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
            this.animationProgress = 0;
        }
    }
}
