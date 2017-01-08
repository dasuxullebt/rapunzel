addLevel("tutorial1", 
    { 
        names : 
        { 
            " " : [ { type: "Floor"} ],
            "#" : [ { type: "Floor"}, { type: "Wall" } ],
            "1" : [ { type: "Floor"}, { type: "Player", direction : "right", name : "player1" } ],
            "2" : [ { type: "Floor"}, { type: "Player", direction : "right", name : "player2" } ],
            "x" : [ { type: "Floor"}, { type: "Exit" } ],
            "M" : [ { type: "Floor"}, { type: "BigBox" } ],
            "~" : [ { type: "Floor"}, { type: "Ice" } ],
            "D" : [ { type: "Floor"}, { type: "Door", "state": "open"} ],
            "P" : [ { type: "Floor"}, { type: "Portal", to: "Q", name: "P" } ],
            "Q" : [ { type: "Floor"}, { type: "Portal", to: "P", name: "Q" } ],
            "T" : [ { type: "Floor"}, { type: "TextMessage", message: "Hallo Welt" } ]
        },
        content :  
        [   "##########", 
            "#        #", 
            "#  1M M2 #", 
            "##~~~~~  #",
            "##~~~~~  #",  
            "#  ~~~~  #", 
            "#        #", 
            "#  x  x  #", 
            "##########" ],
        init: function(world) {
            // Hier weiteren Code einfügen
        }
    },
    "level1"
);
