addLevel("level4",
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
        "xxxxxxxxxx",
        "x k k k xx",
        "xs k    zx",
        "x k k k xx",
        "xxxxxxxxxx"],
        init: function (world) {
            // Hier weiteren Code einfügen
        }
    },
    "level5"
);
