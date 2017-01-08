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
    this.isPlayerAllowedToEnterFrom = function(player, direction) { return true; };
    this.onEnter = function(player, direction)
    {
		console.log(player+"has entered");

		for (var x = 0; x < world.size.x; x++) 
			for (var y = 0; y < world.size.y; y++) 
				for (var z = 0; z < world.grid[x][y].entities.length; z++) 
					if (world.grid[x][y].entities[z] == player)
							world.grid[x][y].entities.splice(z,1);
		
        if(!(this.tile.getNeighbour(direction)==null))
        {
            if(this.tile.getNeighbour(direction).isPlayerAllowedToEnterFrom(direction))//=if(keine der Entities ist eine Große Box ist)
            {
				this.tile.playerLeavesTile(player,direction);
				player.tile = this.tile.getNeighbour(direction);
				player.tile.playerEntersTile(player,direction);

				for (var x = 0; x < world.size.x; x++) 
					for (var y = 0; y < world.size.y; y++) 
						for (var z = 0; z < world.grid[x][y].entities.length; z++) 
							if (world.grid[x][y].entities[z] == player)
									world.grid[x][y].entities.splice(z,1);
				player.tile.entities.push(player);	
            }
			else
			{
				player.tile = this.tile;

				player.tile.entities.push(player);	
			}
		}		
	
   
    };

	this.onLeave = function(player, direction)
	{
		for (var x = 0; x < world.size.x; x++) 
			for (var y = 0; y < world.size.y; y++) 
				for (var z = 0; z < world.grid[x][y].entities.length; z++) 
					if (world.grid[x][y].entities[z] == player)
							world.grid[x][y].entities.splice(z,1);
		player.tile.entities.push(player);	
	}
};
