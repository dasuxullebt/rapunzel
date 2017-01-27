addLevel("mittelDoppel",
    { 
        names : 
        { 
            " " : [ { type: "Floor"} ],
            "x" : [ { type: "Floor"},  { type: "Wall" } ],
            "s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
            "z" : [ { type: "Floor"},  { type: "Exit" } ],
            "k" : [ { type: "Floor"},  { type: "BigBox" } ],
            "A": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
                        "B": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate2" } ],
            "a": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
                        "b": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door2"} ],
            "C": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate3" } ],
                        "c": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door3"} ],
            "ĉ": [ { type: "Floor" }, { type: "Door", state: "open", name: "door3op"} ],
                        "d": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door4"} ],
            "f": [ { type: "Floor" }, { type: "Door", state: "open", name: "door4op"} ],
                        "E": [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate4" } ],
                        "e": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door5"} ],
            "ê": [ { type: "Floor" }, { type: "Door", state: "open", name: "door5op"} ],
                        "i": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door6"} ],
            "j": [ { type: "Floor" }, { type: "Door", state: "open", name: "door6op"} ],
        },
        content :  
        [
                "xxxxxxx xxxxxxx",
                "xs f Bx x  ê sx",
                "xjxE  x x  Cxcx",
                "x k xix xĉx k x",
                "x  d  x xA e  x",
                "xxxbxxx xxxaxxx",
                "xxxzxxx xxxzxxx",
                "  xxx     xxx  "],
        init: function (world) {
            world.getEntityByName("plate1").onStatusChange = function ()
            {
                if ( this.isPressed || world.getEntityByName("plate2").isPressed) 
                {
                    world.getEntityByName("door1").open();
                    world.getEntityByName("door2").open();
                } 
                else 
                {
                    world.getEntityByName("door1").close();
                    world.getEntityByName("door2").close();
                }
            };
            world.getEntityByName("plate2").onStatusChange = function ()
            {
                if ( this.isPressed || world.getEntityByName("plate1").isPressed) {
                    world.getEntityByName("door1").open();
                                        world.getEntityByName("door2").open();
                } else {
                    world.getEntityByName("door1").close();
                                        world.getEntityByName("door2").close();
                }
            };
            world.getEntityByName("plate3").onStatusChange = function ()
            {
                                console.log("B")
                if ( this.isPressed ) {
                    world.getEntityByName("door3").open();
                                        world.getEntityByName("door3op").close();
                                        world.getEntityByName("door4").open();
                                        world.getEntityByName("door4op").close();
                } else {
                    world.getEntityByName("door3").close();
                                        world.getEntityByName("door3op").open();
                                        world.getEntityByName("door4").close();
                                        world.getEntityByName("door4op").open();
                }
            };
                        world.getEntityByName("plate4").onStatusChange = function ()
            {
                                console.log("B")
                if ( this.isPressed ) {
                    world.getEntityByName("door5").open();
                                        world.getEntityByName("door5op").close();
                                        world.getEntityByName("door6").open();
                                        world.getEntityByName("door6op").close();
                } else {
                    world.getEntityByName("door5").close();
                                        world.getEntityByName("door5op").open();
                                        world.getEntityByName("door6").close();
                                        world.getEntityByName("door6op").open();
                }
            };
        }
    },
    "mittelDoppel2"
);
