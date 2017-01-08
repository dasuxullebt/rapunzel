addLevel("RolandsLevel",
    { 
        names : 
        { 
            " " : [ { type: "Floor"} ],
            "x" : [ { type: "Floor"},  { type: "Wall" } ],
            "s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
            "z" : [ { type: "Floor"},  { type: "Exit" } ],
            "k" : [ { type: "Floor"},  { type: "BigBox" } ],
            "a" : [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" } ],
            "A" : [ { type: "Floor"},  { type: "Door", state: "open", name: "door1"} ],
            "B" : [ { type: "Floor"},  { type: "Door", state: "closed", name: "door"} ],
            "p" : [ { type: "Floor"},  { type: "DirectedPortal", name: "portal1" } ],
            "P" : [ { type: "Floor"},  { type: "DirectedPortal", name: "portal2" } ],
        },
        content :  
        [   " xxxxxx ",
            "x    ksx",
            "x Ak  kx",
            "xkpBkB x",
            "x  kBkBx",
            "x k  BPx",
            "x   kkkx",
            " xxx zax",
            "    xxx "],
        init : function (world)
        {
            world.getEntityByName("portal1").partner = world.getEntityByName("portal2");
            world.getEntityByName("portal2").partner = world.getEntityByName("portal1");
            world.getEntityByName("plate1").onStatusChange = function ()
            {
                if (this.isPressed)
                    world.getEntityByName("door1").close();
                else
                    world.getEntityByName("door1").close();
            }
        }
    },
    "RolandsLevel"
);
