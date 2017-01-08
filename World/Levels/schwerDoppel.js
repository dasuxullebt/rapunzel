addLevel("schwerDoppel",
    { 
        names : 
        { 
            " " : [ { type: "Floor"} ],
            "x" : [ { type: "Floor"},  { type: "Wall" } ],
            "s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
            "z" : [ { type: "Floor"},  { type: "Exit" } ],
            "k" : [ { type: "Floor"},  { type: "BigBox" } ],
			"a": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
            "A": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
            "p": [ { type: "Floor"},  { type: "Portal", state: "closed", name: "portal1" } ],
			"q": [ { type: "Floor"},  { type: "Portal", state: "closed", name: "portal2" } ],
			"P": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate2" } ],
			"Q": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate3" } ],
        },
        content :  
        [
		" xxx xx",
		"xs  x px",
		"x q x  x",
		"x  Px kx",
		" xxx   x",
		"x   xk xx",
		"x   x Axzx",
		"x pQxpsazx",
		"x   x  xx",
		" xxx xx"],
        init: function (world) {
            world.getEntityByName("plate1").onStatusChange = function ()
            {
                if ( this.isPressed) {
                    world.getEntityByName("door1").open();
                } else {
                    world.getEntityByName("door1").close();
                }
            };
			world.getEntityByName("plate2").onStatusChange = function ()
            {
                if ( this.isPressed) {
                    world.getEntityByName("portal1").open();
                } else {
                    world.getEntityByName("portal1").close();
                }
            };
            world.getEntityByName("plate3").onStatusChange = function ()
            {
                if ( this.isPressed) {
                    world.getEntityByName("portal2").open();
                } else {
                    world.getEntityByName("portal2").close();
                }
            };
        }
    }
);