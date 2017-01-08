addLevel("level7",
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
        " xxxxxxxx",
        " xk k k x",
        "xx k k kx",
        "xzk k ksx",
        "xx k k kx",
        " xk k k x",
        " xxxxxxxx"],
    	init: function (world) {
    		// Hier weiteren Code einfügen
    	}
    },
    "level8"
);
