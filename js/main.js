var Nakama = {};
Nakama.configs = {
  GAME_WIDTH : 640,
  GAME_HEIGHT : 960,
  P1_POSITION: {
    x: 550,
    y: 550
  },
  P2_POSITION: {
    x: 450,
    y: 850
  },
  ENEMY_POSITION: {
    x: 320,
    y: 100
  },
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
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.enemyBulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();

  Nakama.players = [];
  Nakama.players.push(new ShipType3Controller(
    Nakama.configs.P1_POSITION.x,
    Nakama.configs.P1_POSITION.y,
    '-Player',
    {
      left: Phaser.Keyboard.LEFT,
      right: Phaser.Keyboard.RIGHT,
      up : Phaser.Keyboard.UP,
      down: Phaser.Keyboard.DOWN,
      fire: Phaser.Keyboard.SPACEBAR,
      health: 1
    }
    )
  );
  Nakama.players.push(new ShipType2Controller(
    Nakama.configs.P2_POSITION.x,
    Nakama.configs.P2_POSITION.y,
    '-Partner',
    {
      left: Phaser.Keyboard.A,
      right: Phaser.Keyboard.D,
      up : Phaser.Keyboard.W,
      down: Phaser.Keyboard.S,
      fire: Phaser.Keyboard.F,
      health: 1
    }
    )
  );
  Nakama.enemy = [];
  Nakama.enemy.push(new EnemyController(
    Nakama.configs.ENEMY_POSITION.x,
    Nakama.configs.ENEMY_POSITION.y,
    'EnemyType1.png',
    {
      health : 5
    }
    )
  );
}



// update game state each frame
var update = function(){
  Nakama.background.y = Nakama.background.y + 5;
  if(Nakama.background.y > 0) Nakama.background.y = Nakama.background.y - Nakama.configs.GAME_HEIGHT;

  Nakama.game.physics.arcade.overlap(
    Nakama.bulletGroup,
    Nakama.enemyGroup,
    onBulletHitEnemy
  );

  Nakama.game.physics.arcade.overlap(
    Nakama.enemyBulletGroup,
    Nakama.playerGroup,
    onBulletHitEnemy
  );

  Nakama.game.physics.arcade.overlap(
    Nakama.bulletGroup,
    Nakama.enemyBulletGroup,
    onBulletHitEnemy
  );
}

// before camera render (mostly for debug)
var render = function(){

}

var onBulletHitEnemy = function(bulletSprite, enemySprite){
  bulletSprite.kill();
  enemySprite.damage(1);
}
