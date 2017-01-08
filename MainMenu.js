game.module('game.main').body(function() {
game.addAsset('background/background menu.jpg', 'background1'); //Including backgound and sound
game.addAudio('sounds/collision1.ogg', 'collision1');
game.createScene('Main', {
    init: function() {
        this.levelSel = 1;

        //Background
        var background = new game.Sprite('background1').center().addTo(this.stage); 
        
        //Adding Text
        var style = {font:'bold 30px sans-serif', fill: 'rgb(200, 0, 0)'};
        this.title = new game.Text('', style).addTo(this.stage);
        this.title.x = 850; this.title.y = 700;
        this.printLevel();
            
        //this.help = new game.Text('Use Arrow keys and ENTER', style).addTo(this.stage);
        //this.help.x = 10; this.help.y = 600 - 24 - 10;

        
    },
    keydown: function(event) {
        if(event == "UP")
            this.levelSel++;
        if(event == "DOWN")
            this.levelSel--;
        this.levelSel = (this.levelSel + levelNames.length) % levelNames.length;
        //Textausgabe
        this.printLevel();
        //Anwenden
        if(event == "ENTER")
            this.runLevel();
        //sounds
        //var sound = game.audio.playSound('collision1');
        //game.audio.setVolume(sound, 0.5);
    },

    printLevel: function()
    {
        this.title.setText('Level 1 to ' + levelNames.length + '\nSelected Level: ' + '\n'+ levelNames[this.levelSel]);
    },
    
    runLevel: function()
    {
        levelName = levelNames[this.levelSel];
        console.log("Now playing " + levelName);
        game.system.setScene("Game");
    }
});
});
