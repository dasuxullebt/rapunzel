/*Ice sind Felder, aud denen man nicht stehen bleiben kann.
 *Stöße mit BigBox sind Elastisch mit gleicher Masse (anstoßendes bleibt stehen, angestoßenes bewegt sich.)
 *Stöße mit smallBox sollen Plastisch sein (alles soll sich danach mit der Geschwindigkeit der BigBox/des Spielers bewegen.
 *TODO Stöße mit smallBox müssen noch ausgearbeitet werden...
 */
var Ice=function(world,tile)
{
    Entity.call(this,world,tile,'ice');
    
    this.zIndex=-1;
    
    this.update=function(){};
    
    this.isPlayerAllowedToEnterFrom = function(player, direction) 
    { 
        return true; 
    };
    
    this.onEnter = function(player, direction)
    {   
        for (var i = 0; i < this.tile.entities.length; i++)
        {
            if (this.tile.entities[i] != this)
                if(this.tile.entities[i].onEnter)
                    this.tile.entities[i].onEnter(player,direction);
        }
        
        if(!(this.tile.getNeighbour(direction)==null))
        {
            if(this.tile.getNeighbour(direction).isPlayerAllowedToEnterFrom(direction))//=if(keine der Entities ist eine Große Box ist)
            {
                player.animation.limit++;
                player.moveToTile(this.tile.getNeighbour(direction));
            }
        }               

   
    };

        this.onLeave = function(player, direction)
        {
            
        }
};
