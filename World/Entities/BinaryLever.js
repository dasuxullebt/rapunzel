var BinaryLever = function(world, tile, initialState = false)
{
    Entity.call(this, world, tile, 'BinaryLever');
    this.actionList = ['press'];
    this.state = initialState;
    
    this.zIndex = -2;
    
    this.pull = function(player)
    {
        if(this.canPull(player))
        {
            this.state = !this.state;
            this.onPull(player);
        }
    }; 

    this.canPull = function(player)
    {
        return this.isEnabled;
    };

    this.doAction = function(player, type)
    {
        if(type == 'press')
            this.pull(player);  
    };

    // Diese Funktion wird im Spiellevel festgelegt
    this.onPull = function(player) {};
};
