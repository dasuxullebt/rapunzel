addLevel("stephanDoppel5",
    { 
        names : 
        { 
            " " : [ { type: "Floor"} ],
            "x" : [ { type: "Floor"},  { type: "Wall" } ],
            "s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
            "z" : [ { type: "Floor"},  { type: "Exit" } ],
            "k" : [ { type: "Floor"},  { type: "BigBox" } ],
            "A": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
            "B": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door2"} ],
            "C": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door3"} ],
            "D": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door4"} ],
            "E": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door5"} ],
            "F": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door6"} ],
            "a": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
            "b": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate2" } ],
            "c": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate3" } ],
            "d": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate4" } ],
            "e": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate5" } ],
        },
        content :  
        [
        "     xxxxx    xxx    ",
        "  xxxx   x  xxxaxxx  ",
        "xxx cx k x  x  k  xxx",
        "xzBA  skxx  x Dks Czx",
        "xxxd x k x  x  k  xxx",
        "  x x    x  xxxbxxx  ",
        "  x  exxxx    xxx    ",
        "  xxxxx              "],
        init: function (world) {
            world.getEntityByName("plate1").onStatusChange = function ()
            {
                if ( this.isPressed) {
                    world.getEntityByName("door1").open();
                } else {
                    world.getEntityByName("door1").close();
                }
            };
            world.getEntityByName("plate2").onStatusChange = function ()
            {
                if ( this.isPressed) {
                    world.getEntityByName("door2").open();
                } else {
                    world.getEntityByName("door2").close();
                }
            };
            world.getEntityByName("plate3").onStatusChange = function ()
            {
                if (this.isPressed && world.getEntityByName("plate5").isPressed) {
                    world.getEntityByName("door3").open();
                } else {
                    world.getEntityByName("door3").close();
                }
            };
            world.getEntityByName("plate4").onStatusChange = function ()
            {
                if (this.isPressed && world.getEntityByName("plate5").isPressed) {
                    world.getEntityByName("door4").open();
                } else {
                    world.getEntityByName("door4").close();
                }
            };
            world.getEntityByName("plate5").onStatusChange = function ()
            {
                if (this.isPressed && world.getEntityByName("plate3").isPressed) {
                    world.getEntityByName("door3").open();
                } else {
                    world.getEntityByName("door3").close();
                }
                if (this.isPressed && world.getEntityByName("plate4").isPressed) {
                    world.getEntityByName("door4").open();
                } else {
                    world.getEntityByName("door4").close();
                }
            };
        }
    },
    "mittelDoppel"
);
