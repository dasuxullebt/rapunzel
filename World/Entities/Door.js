var Door = function(world, tile, isOpen = true)
{
    if (isOpen)
        Entity.call(this, world, tile, 'Door_Open');
    else
        Entity.call(this, world, tile, "Door_Closed");
    this.actionList = ['press']; // Eventuell zwei Aktionen 'open' und 'close'
    this.isOpen = isOpen;

    Object.defineProperty(this, 'sprite', {get : function() {
        return ( this.isOpen ) ? "Door_Open" : "Door_Closed";}});


    this.zIndex = -2;
    
    this.isPlayerAllowedToEnterFrom = function(player, direction)
    {
        return true;
    };
    
    this.toggleOpenchangeStatus = function(player)
    {
        if(this.isEnabled)
        {
            this.isOpen = !this.isOpen;
            this.world.didEntitiesChange = true;
        }

        if ( !this.isOpen )
            this.killPlayersOnMe();

    };

    this.open = function (player)
    { if ( !this.isOpen ) this.toggleOpenchangeStatus(); };

    this.close = function (player)
    { if ( this.isOpen ) this.toggleOpenchangeStatus(); };

    this.canOpen = function(player)
    {
        return !this.isEnabled;
    };

    this.onEnter = function(player, direction)
    {
        if ( !this.isOpen )
            this.killPlayersOnMe();
    }

    this.killPlayersOnMe = function ()
    {
        var playerOnTile = this.tile.getPlayerOnTile();
        if ( playerOnTile != undefined ) 
        {
            playerOnTile.kill();
        }
    };

};
