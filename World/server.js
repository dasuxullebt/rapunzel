var lr = new LevelReader();
var world = lr.byFileName("World/tutorial_kisten.js");

setInterval( 1000, world.update );
