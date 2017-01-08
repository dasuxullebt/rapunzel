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
            for (var i = 0; i < player.tile.entities.length; i++)
            {
                if (player == player.tile.entities[i])
                {
                    player.tile.entities.splice(i,1);
                }
            }
                        //console.log("player");
            //console.log(player.tile.position);
            player.tile.playerLeavesTile(player, null);
            player.tile = this.partner.tile;
            player.tile.playerEntersTile(player, null);
            player.tile.entities.push(player);
                        //console.log("player ");
            //console.log(player.tile.position);
            
            if (player.type != 'Player1' && player.type != 'Player2' && player.type != 'Player')
            {
                this.partner.isEnabled = false;
            }
        }   
    };

    this.onLeave = function (player, direction) {
                if (this.isActivated)
        {       this.isEnabled = true;
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
                                        neighbour = this.tile.getNeighbour(-direction);
                                        console.log(neighbour);
                                        for (i = 0; i < world.players.length; i++)
                                        {
                                                pusher = world.players[i];
                                                //console.log(pusher.tile);
                                                if (pusher.tile == this.tile)
                                                {
                                                        //console.log(pusher);
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
            for (var i = 0; i < player.tile.entities.length; i++)
            {
                if (player == player.tile.entities[i])
                {
                    player.tile.entities.splice(i,1);
                }
            }
            
            
            player.tile.playerLeavesTile(player, null);
                        console.log(player.tile);
            player.tile = this.partner.tile;
                        player.animation.position = player.tile.position;
                        console.log(player.tile);
            player.tile.playerEntersTile(player, null);
            player.tile.entities.push(player);
        }
    }
};
