addLevel("test",
    { 
    	names : 
        { 
            " " : [ { type: "Floor"} ],
            "x" : [ { type: "Floor"},  { type: "Wall" } ],
            "s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
            "z" : [ { type: "Floor"},  { type: "Exit" } ],
            "k" : [ { type: "Floor"},  { type: "BigBox" } ],
            "A" : [ { type: "Floor"},  { type: "Portal", name: "portal1" } ],
            "a" : [ { type: "Floor"},  { type: "Portal", name: "portal2" } ],
			"p" : [ { type: "Floor"},  { type: "PressurePlate", name: "plate" } ],
        },
        content :  
        [
        "xxxxxxxx",
        "x kak zx",
        "x kkk  x",
		"x      x",
		"xs    Ax",
        "x pk   x",
        "xxxxxxxx"],
        init: function (world) {
            world.getEntityByName("portal1").partner = world.getEntityByName("portal2");
            world.getEntityByName("portal2").partner = world.getEntityByName("portal1");
			world.getEntityByName("plate").onStatusChange = function ()
			{
				if ( this.isPressed ) {
					world.getEntityByName("portal1").activate();
				} else {
					world.getEntityByName("portal1").deactivate();
				}
			};
/*=======
        	" " : [ { type: "Floor"} ],
        	"x" : [ { type: "Floor"},  { type: "Wall" } ],
        	"s" : [ { type: "Floor"},  { type: "Player", direction : "right", name : "player1" } ],
        	"z" : [ { type: "Floor"},  { type: "Exit" } ],
        	"k" : [ { type: "Floor"},  { type: "BigBox" } ],
        	"L" : [ { type: "Floor"},  { type:"LazorEmitter", turnedOn: "true", direction: "left"} ],
					"P" : [ { type: "Floor"},  { type: "PressurePlate", isPressed: "false", name: "plate1" }],
					"M" : [ { type: "Floor"},  { type: "LazorMirror", name: "mirror1", startOrientation: "false"} ],
					"k"	: [ { type: "Floor" }, { type: "Door", state: "closed", name: "door1"} ],
					"j" : [ { type: "Floor" }, { type: "Door", state: "closed", name: "door2"} ],
					"Q" : [ { type: "Floor" }, { type: "LazorReceiver", name: "receiver1"}],
					"R" : [ { type: "Floor" }, { type: "LazorReceiver", name: "receiver2"}]
        },
        content :  
        [
        "xxxxxxxxxxxxx",
        "x  k Q     zx",
        "x       P   x",
				"x    M     Lx",
				"x        s  x",
        "x  j R      x",
        "xxxxxxxxxxxxx"],
				
        init: function (world) {
					world.getEntityByName("plate1").onStatusChange = function ()
					{
						if ( this.isPressed ) {
							world.getEntityByName("mirror1").orientation = false;
						} else {
							world.getEntityByName("mirror1").orientation = true;
						}
					};	
					world.getEntityByName("receiver1").onStatusChange = function ()
					{
						//alert (this.isReceiving);
						if ( this.isReceiving ) {
							world.getEntityByName("door1").open();
						} else {
							world.getEntityByName("door1").close();
						}
					};	
					world.getEntityByName("receiver2").onStatusChange = function ()
					{
						if ( this.isReceiving ) {
							world.getEntityByName("door2").open();
						} else {
							world.getEntityByName("door2").close();
						}
					};					
>>>>>>> c31919cdb73b96a661b935fc6295c485917ed596*/
        }
    },
    "test"
);  


