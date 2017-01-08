addLevel("level1",
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
        [   "xxxxxxx",
            "x sxz x",
            "x xxx x",
            "x x   x",
            "x   x x",
            "xxxxxxx"],
        init: function (world) {
            // Hier weiteren Code einfügen
        }
    },
    "level2"
);
