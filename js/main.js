var Nakama = {};
Nakama.configs = {
  GAME_WIDTH : 640,
  GAME_HEIGHT : 960
};

window.onload = function(){
  Nakama.game = new Phaser.Game(
    Nakama.configs.GAME_WIDTH,
    Nakama.configs.GAME_HEIGHT,
    Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = Nakama.configs.GAME_WIDTH/2;
  Nakama.game.scale.minHeight = Nakama.configs.GAME_HEIGHT/2;
  Nakama.game.scale.maxWidth = Nakama.configs.GAME_WIDTH;
  Nakama.game.scale.maxHeight = Nakama.configs.GAME_HEIGHT;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.background = Nakama.game.add.sprite(0,-960,"background");

  Nakama.players = [];
  Nakama.players.push(new ShipController(
    200,
    400,
    'Spaceship1-Player.png',
    {
      left: Phaser.Keyboard.LEFT,
      right: Phaser.Keyboard.RIGHT,
      up : Phaser.Keyboard.UP,
      down: Phaser.Keyboard.DOWN,
      fire: Phaser.Keyboard.SPACEBAR
    }
    )
  );
  Nakama.players.push(new ShipController(
    350,
    350,
    'Spaceship2-Player.png',
    {
      left: Phaser.Keyboard.A,
      right: Phaser.Keyboard.D,
      up : Phaser.Keyboard.W,
      down: Phaser.Keyboard.S,
      fire: Phaser.Keyboard.F
    }
    )
  );
}


// update game state each frame
var update = function(){
  /*for(var player of Nakama.players){
    player.update();
  }*/

  //Nakama.player.update();
  //Nakama.player2.update();
  Nakama.background.y = Nakama.background.y + 5;
  if(Nakama.background.y > 0) Nakama.background.y = Nakama.background.y - Nakama.configs.GAME_HEIGHT;
}

// before camera render (mostly for debug)
var render = function(){}
