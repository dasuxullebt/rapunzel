var Entity = function(world, tile, type)
{
    // Die Spielwelt des Entities
    this.world = world;    
    world.entities.push(this);
    
    this.zIndex = 0;
    
    // workaround (rectal tonsillektomy)
    this.sprites = new Array();
    
    // Die Kachel auf der das Entity liegt
    this.tile = tile;
    //console.log(this.tile);
    this.tile.entities.push(this);
    
    this.animation = new Animation(this.tile.position);
    this.animation.isAnimated = false;
    
    // Der Entitytyp, z.B. Tür, Portal, Block
    this.type = type;

    // Die Liste der möglichen Aktionen des Spielers
    this.actionList = [];
    
    // Bezeichnung für das Entity im Level
    this.name = "";
    
    // Sprite für das Entity für die Ausgabe
    this.sprite = type;
    this.opacity = 1;
    
    // Kann dieses Entity vom Spieler aktiviert werden?
    this.isEnabled = true;
     // Kann dieses Entity verschoben werden?
    this.isPushable = false;
    // Wird aufgerufen, wenn ein neues Frame berechnet wird
    this.update = function() 
    {
        if (this.animation.isAnimated)
            this.animation.update(this);
    };
    // Wird aufgerufen, wenn eine Aktion bei dieser Entity ausgeführt werden soll
    this.doAction = function(player, type) {};
    // Wird aufgerufen, wenn ein Spieler ein Feld betritt
    this.onEnter = function(player, directionFrom) {};
    // Wird aufgerufen, wenn ein Spieler ein Feld verlässt
    this.onLeave = function(player, directionTo) {};
    
    //Routine zum Wechsel des Feldes
    this.moveToTile = function(tile)
    {
        this.tile.playerLeavesTile(this, this.direction);
        
                        
        for (var i = 0; i < this.tile.entities.length;i++)
        {
            if(this.tile.entities[i]==this)
            {
                this.tile.entities.splice(i,1);
            }
        }
        
        if (this.animation.isAnimated)
        {
            if (!this.animation.inAnimation)
            {
                this.animation.position = this.tile.position;
                this.animation.startAnimation(this.direction);
            }
        }
        
        this.tile = tile;
        
        this.tile.entities.push(this);
        
        this.tile.playerEntersTile(this, this.direction);
        
    };
    
    // Standardmäßig darf jedes Feld betreten werden
    this.isPlayerAllowedToEnterFrom = function(player, direction) {
        return true;
    };
    this.isPlayerAllowedToLeaveTo = function(player, direction) {
        return true;
    };
};
