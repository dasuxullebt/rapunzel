var Door = function(world, tile, isOpen = true)
{
    Entity.call(this, world, tile, 'Door_Closed');
    this.actionList = ['press']; // Eventuell zwei Aktionen 'open' und 'close'
    this.isOpen = isOpen;

    Object.defineProperty(this, 'sprite', {get : function() {
        return ( this.isOpen ) ? "Door_Open" : "Door_Closed";}});


    this.zIndex = -2;
    
    this.isPlayerAllowedToEnterFrom = function(player, direction)
    {
        return (this.isOpen);
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

    this.doAction = function(player, type)
    {
    };

    this.onEnter = function(player, direction)
    {
        if ( !this.isOpen )
            this.killPlayersOnMe();
    }

    this.killPlayersOnMe = function ()
    {
        var playerOnField = this.getPlayerOnThisField();
        if ( playerOnField != undefined ) {
            playerOnField.sprite = "Player_Dead";
        
        alert(playerOnField.type + " ist verbrannt!!! Drücke 'R' für Neustart oder 'ESC', um ins Hauptmenü zurückzukehren.");
        this.world.didEntitiesChange = true;
        world.gameOver = true;
        }
    };

    this.getPlayerOnThisField = function ()
    {
        if ( !this.isOpen )
        { 
            // search for a player on this tile
            for( var j = 0; j < world.players.length; j++ )
                if ( world.players[j].tile.position == this.tile.position )
                    return world.players[j];
            return undefined;
        }
    };

};
