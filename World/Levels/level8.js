addLevel("level8",
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
        " xxxxxxx ",
        " xk   kx ",
        "xx k k xx",
        "xzk k ksx",
        "xx k k xx",
        " xk   kx ",
        " xxxxxxx "],
    	init: function (world) {
    		// Hier weiteren Code einf�gen
    	}
	},
    "level9"
);
