addLevel("level6",
	{ 
		"names" : 
		{ 
			" " : [ { type: "Floor"} ],
			"x" : [ { type: "Floor"},  { type: "Wall" } ],
			"s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
			"z" : [ { type: "Floor"},  { type: "Exit" } ],
			"k" : [ { type: "Floor"},  { type: "BigBox" } ],
		},
		content :  
		[
		"  xxxxx  ",
		" xx   xx ",
		"xx k k xx",
		"xz x x  x",
		"xx k ks x",
		" x k x  x",
		" x k k xx",
		" xx   xx ",
		"  xxxxx  "],
		init: function (world) {
			// Hier weiteren Code einfügen
		}
	},
	"level7"
);
