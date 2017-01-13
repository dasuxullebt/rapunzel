Display = function()
{       
       
    this.getEntityPosition = function(entity)
    {   
        var x = entity.animation.position.x * this.tile_width;
        var y = entity.animation.position.y * this.tile_height;

        var xOffset = 0;
        var yOffset = 0;
        
        if (entity.animation.inAnimation )
        {
            switch (entity.animation.direction)
            {
                case Direction.RIGHT:
                    xOffset = entity.animation.animationProgress * this.tile_width;
                    break;
                case Direction.LEFT:
                    xOffset = - entity.animation.animationProgress * this.tile_width;
                    break;
                case Direction.UP:
                    yOffset = - entity.animation.animationProgress * this.tile_height;
                    break;
                case Direction.DOWN:
                    yOffset = entity.animation.animationProgress * this.tile_height;
                    break;
            }
        }
        return {x: x + xOffset, y: y + yOffset};
    };

    this.getCameraTarget = function()
    {
        //if(world.size.x <= 12 && world.size.y <= 9)
            return {x: this.world.size.x * this.tile_width / 2, y: this.world.size.y * this.tile_height / 2};
        //else
        // {
            //target = this.getEntityPosition(this.world.players[0]);
            //target.x = Math.max(target.x, 300);
            //target.y = Math.max(target.y, 300);
            //target.x = Math.min(target.x, this.world.size.x * tile_width - 300);
            //target.y = Math.min(target.y, this.world.size.y * tile_height - 300);
                        //return target;
                // }
    };
    

    this.init = function(world)
    {
                
        this.world = world;
                var t = Math.min(Math.min(game.system.originalWidth / this.world.size.x,
                        game.system.originalHeight / this.world.size.y), 100);

        this.tile_width = t;
        this.tile_height = t;
        
        //this.tile_height = 100;
        //this.tile_width = 100;
        this.camera = {
            position: this.getCameraTarget(),
            velocity: {x: 0, y: 0},
            target: this.getCameraTarget()
        };
    };

    this.updateCamera = function()
    {
        this.camera.target = this.getCameraTarget();
        var dx = this.camera.target.x - this.camera.position.x;
        var dy = this.camera.target.y - this.camera.position.y;
        var d = Math.sqrt(dx * dx + dy * dy) + 0.01;
        dx /= d; dy /= d; 
        var vel = 200 * Math.tanh(d * 0.005);

        this.camera.velocity.x += (dx * vel - this.camera.velocity.x) * game.system.delta;
        this.camera.velocity.y += (dy * vel - this.camera.velocity.y) * game.system.delta;

        this.camera.velocity.x -= 0.3 * this.camera.velocity.x * game.system.delta;
        this.camera.velocity.y -= 0.3 * this.camera.velocity.y * game.system.delta;

        this.camera.position.x += this.camera.velocity.x * game.system.delta;
        this.camera.position.y += this.camera.velocity.y * game.system.delta;
    }

    text = levelText = null;

    this.destroyStuff = function () {
        if (text != null) text.destroy();
        if (levelText != null) levelText.destroy();
    };
    
    this.update = function()
    {
        var typ = "";

        this.destroyStuff();
        this.updateCamera();
        game.scene.clear();
        
        var entities = this.world.entities;
        entities.sort(function(x, y) {return x.zIndex < y.zIndex;});
        var textMessages = [];
        for (var k = 0; k < entities.length; ++k) {
                                         
            var file = (this.world.entities[k].sprite != '') ?
                this.world.entities[k].sprite :
                entities[k].type.toLowerCase();

            var sprite;
            
            if (this.world.entities[k].sprites[file] != undefined) {
                sprite = this.world.entities[k].sprites[file];
            } else {
                sprite = this.world.entities[k].sprites[file] = new game.Sprite(file);
            }

            var pos = this.getEntityPosition(entities[k]);

            sprite.x = pos.x - this.camera.position.x + game.system.originalWidth / 2 - 12;
            sprite.y = pos.y - this.camera.position.y + game.system.originalHeight / 2 - 12;
            
            //sprite.anchor.set(0.5, 0.5);
            sprite.width = this.tile_width * 1.26;
            sprite.height = this.tile_height * 1.26;

            sprite.addTo(game.scene.stage);

            if(this.world.entities[k].type == 'TextMessage' && this.world.entities[k].isPressed)
                textMessages.push(this.world.entities[k].message);

        }

        textMessages = textMessages.join("\n");

        var textStyle = {font:'bold 60px sans-serif', fill: 'rgb(250, 200, 125)'};
        text = new game.Text(textMessages, textStyle);
        text.anchor.set(0.5, 0.5);
        text.position.x = game.system.originalWidth / 2;
        text.position.y = game.system.originalHeight / 2;
        text.addTo(game.scene.stage);
 
        var levelNameStyle = {font:'bold 30px sans-serif', fill: 'rgb(192, 192, 192)'};
        levelText = new game.Text("Level: " + this.world.levelName, levelNameStyle);
        levelText.position.x = game.system.originalWidth / 2 - levelText.width / 2;
        levelText.position.y = 10;
        levelText.addTo(game.scene.stage);        
    };
};
