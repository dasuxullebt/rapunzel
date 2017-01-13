var Portal = function (world, tile) {
    Entity.call(this, world, tile, 'Portal');
    this.isEnabled = true;
        this.isActivated = true;
    
    this.zIndex = -2;
    
    this.partner = this;

    // TODO Animation
    // direction = null bedeuetet, dass der User über ein Portal kam
        
    this.toggleActivationchangeStatus = function(player)
    {
            this.isActivated = !this.isActivated;
            this.world.didEntitesChange = true;
                            
            this.sprite = (this.isActivated) ? "Portal" : "Empty";
            this.isEnabled = this.isActivated;
            for (var i = 2; i < this.tile.entities.length; ++i)
            {
                    if (this.tile.entities[i].type != "Player1" && this.tile.entities[i].type != "Player2" && this.tile.entities[i].type != "Player")
                            this.isEnabled = false;
            }
            if(this.partner.isActivated != this.isActivated)
                    this.partner.toggleActivationchangeStatus();
    };
    
    this.activate = function (player)
    {
            if (!this.isActivated)
                    this.toggleActivationchangeStatus();
    };
    
    this.deactivate = function (player)
    {
            if (this.isActivated)
                    this.toggleActivationchangeStatus();
    };

    this.onEnter = function(player, direction) 
    {
        if (direction != null && this.isEnabled && this.partner.isEnabled && this.partner.tile.isPlayerAllowedToEnterFrom(player, direction))
        {
            player.direction = null;
            
            player.moveToTile(this.partner.tile);
            
            if (player.type != 'Player1' && player.type != 'Player2' && player.type != 'Player')
            {
                this.partner.isEnabled = false;
            }
        }   
    };

    this.onLeave = function (player, direction) 
    {
        if (this.isActivated)
        {       
            this.isEnabled = true;
            for (var i = 0; i < this.tile.entities.length; i++)
            {
                if (player == this.tile.entities[i])
                {
                    this.tile.entities.splice(i,1);
                }
            }
            if (direction != null)
            {
                if (player.type != 'Player1' && player.type != 'Player2' && player.type != 'Player')
                {
                    for (i = 0; i < world.players.length; i++)
                    {
                        pusher = world.players[i];
                        if (pusher.tile == this.tile)
                        {
                            this.onEnter(pusher, pusher.direction);
                        }
                    }
                }
            }
        }
    };
        
    
    this.doAction = function(player, type)
    {
        if (type == "press" && this.isEnabled && this.partner.isEnabled && this.partner.tile.isPlayerAllowedToEnterFrom(player, null))
        {
            player.direction = null;
            
            player.moveToTile(this.partner.tile);
        }
    }
};
