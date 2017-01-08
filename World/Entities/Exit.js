var Exit = function(world, tile)
{
    Entity.call(this, world, tile, 'Exit');
    
    
    
    // Callbacks
    this.onEnter = function(player)
    {
        //console.log(world.players);
        for(var i=0;i<world.players.length;i++)
        {
            isCorrect=false;
            for(var j=0;j<world.players[i].tile.entities.length;j++)
            {
                if(world.players[i].tile.entities[j].type=='Exit')
                {
                    isCorrect=true;
                }
            }
            if(!isCorrect)
            {
                i=world.players.length;//==Abbruch der Corschleife
            }
        }
       //console.log(isCorrect);
        if(isCorrect)
        {
            world.didEntitiesChange = true;
            world.exitReached = true;
        }
   };
};
