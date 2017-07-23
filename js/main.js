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
  Nakama.player = Nakama.game.add.sprite(400,400, 'assets', 'Spaceship1-Player.png');
  Nakama.player2 = Nakama.game.add.sprite(200,500, 'assets', 'Spaceship2-Player.png');
}

// update game state each frame
var update = function(){
  if(Nakama.keyboard.isDown(Phaser.Keyboard.LEFT)){
    if(Nakama.player.position.x > 0) Nakama.player.position.x -= 10;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    if(Nakama.player.position.x < Nakama.configs.GAME_WIDTH-Nakama.player.width) Nakama.player.position.x += 10;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.UP)){
    if(Nakama.player.position.y > 0) Nakama.player.position.y -= 10;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.DOWN)){
    if(Nakama.player.position.y < Nakama.configs.GAME_HEIGHT-Nakama.player.height) Nakama.player.position.y += 10;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.A)){
    if(Nakama.player2.position.x > 0) Nakama.player2.position.x -= 10;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.D)){
    if(Nakama.player2.position.x < Nakama.configs.GAME_WIDTH-Nakama.player.width) Nakama.player2.position.x += 10;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.W)){
    if(Nakama.player2.position.y > 0) Nakama.player2.position.y -= 10;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.S)){
    if(Nakama.player2.position.y < Nakama.configs.GAME_HEIGHT-Nakama.player.height) Nakama.player2.position.y += 10;
  }

  Nakama.background.y = Nakama.background.y + 1;
  if(Nakama.background.y > 0) Nakama.background.y = Nakama.background.y - Nakama.configs.GAME_HEIGHT;

}

// before camera render (mostly for debug)
var render = function(){}
