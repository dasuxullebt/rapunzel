addLevel("level2",
	{ 
		names : 
		{ 
			" " : [ { type: "Floor"} ],
			"x" : [ { type: "Floor"},  { type: "Wall" } ],
			"s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
			"z" : [ { type: "Floor"},  { type: "Exit" } ],
			"k" : [ { type: "Floor"},  { type: "BigBox" } ],
		},
		content :  
		[
		" xxxx ",
		"xx  xx",
		"xsk zx",
		"xxx xx",
		"  xxx "],
		init: function (world) {
			// Hier weiteren Code einfuegen
		}
	},
	"level3"
);

