addLevel("level5",
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
        "  xxxx    ",
        "xxx  xxxxx",
        "x k    k x",
        "xs xkkxkzx",
        "x k    k x",
        "xxx   xxxx",
        "  xxxxx   "],
        init: function (world) {
            // Hier weiteren Code einfügen
        }
    },
    "level6"
);
