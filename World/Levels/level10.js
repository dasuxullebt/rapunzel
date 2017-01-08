addLevel("level10",
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
        },
        content :  
        [
        "xxx xxx",
        "xsx xsx",
        "xax xAx",
        "xBx xbx",
        "xzx xzx",
        "xxx xxx"],
        init: function (world) {
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
        }
    },
    "level11"
);

