var Input = function(scene, world)
{
    this.scene = scene;
    this.world = world;
    this.moveEvent = function(event)
    {
        var world = this.world;

        switch (event.toString())
        {
            case "LEFT": 
                if (world.players[1] != undefined)
                {
                    world.players[1].move(Direction.LEFT);
                }
                else if (world.players[0] != undefined)
                {
                    world.players[0].move(Direction.LEFT);
                }
                break;
            case "A":
                if (world.players[0] != undefined)
                {
                    world.players[0].move(Direction.LEFT);
                }
                break;
            case "UP": 
                if (world.players[1] != undefined)
                {
                    world.players[1].move(Direction.UP);
                }
                else if (world.players[0] != undefined)
                {
                    world.players[0].move(Direction.UP);
                }
                break;
            case "W":
                if (world.players[0] != undefined)
                {
                    world.players[0].move(Direction.UP);
                }
                break;
            case "RIGHT": 
                if (world.players[1] != undefined)
                {
                    world.players[1].move(Direction.RIGHT);
                }
                else if (world.players[0] != undefined)
                {
                    world.players[0].move(Direction.RIGHT);
                }
                break;
            case "D":
                if (world.players[0] != undefined)
                {
                    world.players[0].move(Direction.RIGHT);
                }
                break;
            case "DOWN": 
                if (world.players[1] != undefined)
                {
                    world.players[1].move(Direction.DOWN);
                }
                else if (world.players[0] != undefined)
                {
                    world.players[0].move(Direction.DOWN);
                }
                break;
            case "S":
                if (world.players[0] != undefined)
                {
                    world.players[0].move(Direction.DOWN);
                }
                break;
            case "SPACE":
                if (world.players[0] != undefined)
                {
                    alert("Player 1 Action!");
                    world.players[0].performAction("press"); 
                    //TODO, do something with actions
                }
                break;
            case "ENTER":
                if (world.players[1] != undefined)
                {
                    console.log("Player 2 Action!");
                    world.players[1].performAction("press");
                }
                else if (world.players[0] != undefined)
                {
                    console.log("Player 1 Action!");
                    world.players[0].performAction("press");
                }
                break;
            case "ESC":
                game.system.setScene('Main');
                break;
            case "R":
                world.levelRestart = true;
                break;
        }
    };
};
