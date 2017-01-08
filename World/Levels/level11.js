addLevel("level11",
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
			"b": [ { type: "Floor" }, { type: "Door", state: "closed", name: "doorNot1"} ],
		},
		content :  
		[	"xxxxxxxx",
			"xs a bzx",
			"x xx xxx",
			"x kA x  ",
			"xxxxxx  "],
			init: function (world) {
			
			// Öffnen / Schließen der Tür 1 durch Betätigen/Loslassen der Druckplatte 1
			world.getEntityByName("plate1").onStatusChange = function ()
			{
				if ( this.isPressed ) {
					world.getEntityByName("door1").open();
					world.getEntityByName("doorNot1").close();
				} else {
					world.getEntityByName("door1").close();
					world.getEntityByName("doorNot1").open();
				}
			};

		}
	},
	"level12"
);  
