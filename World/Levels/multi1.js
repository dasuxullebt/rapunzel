addLevel("multi1",
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
        [   "xxxxxxxxxxxxx",
            "x sxz x     x",  
            "x xxx x  s  x",
            "x x   x     x",
            "x   x xz    x",
            "xxxxxxxxxxxxx"],
        init: function (world) {
            // Hier weiteren Code einfügen
        }
    },
    "level2"
);
