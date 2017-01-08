addLevel("tutorial_mehrspieler",
	{ 
		"names" : 
		{ 
			" " : [ { type: "Floor"} ],
			"x" : [ { type: "Floor"},  { type: "Wall" } ],
			"s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
			"z" : [ { type: "Floor"},  { type: "Exit" } ],
			"A": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
			"a": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
			"B": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate2" } ],
			"b": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door2"} ],
		},
		content :  
		[
		"xxx xxx",
		"xsx xsx",
		"xax xAx",
		"xBx xbx",
		"xzx xzx",
		"xxx xxx"],
		init: function (world) {
			// Hier weiteren Code einfügen
		}
	},
	"level7"
);