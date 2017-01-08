addLevel("level12",
    { 
        names : 
        { 
            " " : [ { type: "Floor"} ],
            "x" : [ { type: "Floor"},  { type: "Wall" } ],
            "s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
            "z" : [ { type: "Floor"},  { type: "Exit" } ],
            "k" : [ { type: "Floor"},  { type: "BigBox" } ],
            "A": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
            "a": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
            "B": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate2" } ],
            "b": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door2"} ],
            "C": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate3" } ],
            "c": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door3"} ],
            "d": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door4"} ],
        },
        content :  
        [   "      xxxxx  ",
            "      xazzx  ",
            "    xxxbxxx  ",
            "    x  c  x  ",
            "xxxxx xxx xx ",
            "xA  x k k sx ",
            "xx  x  k  sx ",
            " xkkx k k  x ",
            " xC   xxxx xx",
            " xxxx B d   x",
            "    xxxxxx  x",
            "         xxxx"],
            init: function (world) {
            
            // Öffnen / Schließen der Tür 1 durch Betätigen/Loslassen der Druckplatte 1
            world.getEntityByName("plate1").onStatusChange = function ()
            {
                if ( this.isPressed ) {
                    world.getEntityByName("door1").open();
                } else {
                    world.getEntityByName("door1").close();
                }
            };
            world.getEntityByName("plate2").onStatusChange = function ()
            {
                if ( this.isPressed ) {
                    world.getEntityByName("door2").open();
                } else {
                    world.getEntityByName("door2").close();
                }
            };
            world.getEntityByName("plate3").onStatusChange = function ()
            {
                if ( this.isPressed ) {
                    world.getEntityByName("door3").open();
                    world.getEntityByName("door4").open();
                } else {
                    world.getEntityByName("door3").close();
                    world.getEntityByName("door4").close();
                }
            };

        }
    },
    "level13"
);
