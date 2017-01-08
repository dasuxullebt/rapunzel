addLevel("mittelDoppel2",
    { 
        names : 
        { 
            " " : [ { type: "Floor"} ],
            "x" : [ { type: "Floor"},  { type: "Wall" } ],
            "s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
            "z" : [ { type: "Floor"},  { type: "Exit" } ],
            "k" : [ { type: "Floor"},  { type: "BigBox" } ],
			"1": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
			"2": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door2"} ],
			"a": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door3"} ],
            "A": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
            "B": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate2" } ],
			"C": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate3" } ],
        },
        content :  
        [
		"    xxx",
		"  xxxCx",
		"xxx   x",
		"x k1  x",
		"x AkB x",
		"x  xk x",
		"xx a  x",
		"x  xx2x",
		"xssxzzx",
		"xxxxxxx"],
        init: function (world) {
			console.log(world.getEntityByName("plate1").position);
            world.getEntityByName("plate1").onStatusChange = function ()
            {
                if ( this.isPressed && world.getEntityByName("plate2").isPressed) {
                    world.getEntityByName("door1").open();
                } else {
                    world.getEntityByName("door1").close();
                }
				if ( this.isPressed && world.getEntityByName("plate3").isPressed) {
                    world.getEntityByName("door2").open();
                } else {
                    world.getEntityByName("door2").close();
                }
				if ( this.isPressed) {
                    world.getEntityByName("door3").open();
                } else {
                    world.getEntityByName("door3").close();
                }
            };
			world.getEntityByName("plate2").onStatusChange = function ()
            {
                if ( this.isPressed && world.getEntityByName("plate1").isPressed) {
                    world.getEntityByName("door1").open();
                } else {
                    world.getEntityByName("door1").close();
                }
            };
            world.getEntityByName("plate3").onStatusChange = function ()
            {
                if ( this.isPressed && world.getEntityByName("plate1").isPressed) {
                    world.getEntityByName("door2").open();
                } else {
                    world.getEntityByName("door2").close();
                }
            };
        }
    }
);
