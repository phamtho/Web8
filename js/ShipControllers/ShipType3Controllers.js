class ShipType3Controller extends ShipController{
  constructor(x, y, spriteSuffix, configs){
    super(
      x,
      y,
      `Spaceship1${spriteSuffix}.png`,    //Spaceship1 + spriteSuffix + ".png"
      configs
    );
    this.configs.SHIP_SPEED = 300;
    this.bullet.RELOAD_SPEED = 1;
  }

//won't let the ship shoot while it's moving. Otherwise it'll be too OP. The bullet has an added function. It's exploded when it meets the enemy's bullet.
  fire(){
    if(!Nakama.keyboard.isDown(this.configs.left) && !Nakama.keyboard.isDown(this.configs.left) && !Nakama.keyboard.isDown(this.configs.down) && !Nakama.keyboard.isDown(this.configs.right) && !Nakama.keyboard.isDown(this.configs.up) && Nakama.keyboard.isDown(this.configs.fire)){
    new BulletType3Controller(
      this.sprite.x,
      this.sprite.y - Nakama.configs.GAME_HEIGHT/2,
      "BulletType3.png"
    );
    }
  }
}
