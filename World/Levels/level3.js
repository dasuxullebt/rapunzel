addLevel("level3",
	{ 
		names : 
		{ 
			" " : [ { type: "Floor"} ],
			"x" : [ { type: "Floor"},  { type: "Wall" } ],
			"s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
			"z" : [ { type: "Floor"},  { type: "Exit" } ],
			"k" : [ { type: "Floor"},  { type: "BigBox" } ],
			"A": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
			"a": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
			"B": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
			"b": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
			"C": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
			"c": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
			"D": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
			"d": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
			"E": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
			"e": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
		},
		content :  
		[
		"xxxx  ",
		"x  x  ",
		"xk xxx",
		"xAsazx",
		"xxxxxx"],
		init: function (world) {
			
			// Öffnen / Schließen der Tür 1 durch Betätigen/Loslassen der Druckplatte 1
			world.getEntityByName("plate1").onStatusChange = function ()
			{
				if ( this.isPressed ) {
					world.getEntityByName("door1").open();
				} else {
					world.getEntityByName("door1").close();
				}
			};

		}
	},
	"level4"
);  
