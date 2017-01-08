addLevel("level13",
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
            "e": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door5"} ],
            "f": [ { type: "Floor" }, { type: "Door", state: "closed", name: "door6"} ]
        },
        content :  
        [   "xxxxx   ",
            "x a xx  ",
            "xbkscx  ",
            "xCsx x  ",
            "xxexAxxx",
            " xBfdzzx",
            " xxxxxxx"],
        init: function (world) {
            
            // Öffnen / Schließen der Tür 1 durch Betätigen/Loslassen der Druckplatte 1
            world.getEntityByName("plate1").onStatusChange = function ()
            {
                if ( this.isPressed || world.getEntityByName("plate3").isPressed) {
                    world.getEntityByName("door1").open();
                    world.getEntityByName("door5").open();
                    world.getEntityByName("door6").open();
                    world.getEntityByName("door3").open();
                } else {
                    world.getEntityByName("door1").close();
                    world.getEntityByName("door5").close();
                    world.getEntityByName("door6").close();
                    world.getEntityByName("door3").close();
                }
            };
            world.getEntityByName("plate2").onStatusChange = function ()
            {
                if ( this.isPressed ) {
                    world.getEntityByName("door2").open();
                    world.getEntityByName("door4").open();
                } else {
                    world.getEntityByName("door2").close();
                    world.getEntityByName("door4").close();
                }
            };
            world.getEntityByName("plate3").onStatusChange = function ()
            {
                //console.log("plate3.onStatusChange() casted");
                //console.log(world.getEntityByName("plate1").isPressed +"||"+ world.getEntityByName("plate3").isPressed+"="+world.getEntityByName("plate1").isPressed || world.getEntityByName("plate3").isPressed);
                if (world.getEntityByName("plate1").isPressed || this.isPressed)
                {
                    //console.log(world.getEntityByName("door1").isOpen)
                    world.getEntityByName("door1").open();
                    world.getEntityByName("door5").open();
                    world.getEntityByName("door6").open();
                    world.getEntityByName("door3").open();
                    //console.log(world.getEntityByName("door1").isOpen)
                } else 
                {
                    world.getEntityByName("door1").close();
                    world.getEntityByName("door5").close();
                    world.getEntityByName("door6").close();
                    world.getEntityByName("door3").close();
                    
                }
            };
        }
    },
    "stephanDoppel1"
);
