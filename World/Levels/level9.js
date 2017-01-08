addLevel("level9",
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
			"B": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate2" } ],
			"b": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door3"} ],
			"C": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate3" } ],
			"c": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door3"} ],
			"D": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate4" } ],
			"d": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door4"} ],
			"E": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate5" } ],
			"e": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door5"} ],
		},
		content :  
		[
		"  xxxxxxxx ",
		"  x k  s x ",
		"  x k xkxx ",
		"  x k x  x ",
		"xxx xx   x ",
		"xza  xxkxx ",
		"xxx      Ax",
		"  xxxxxxxx"],
		init: function (world) {
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
	"level10"
);  


