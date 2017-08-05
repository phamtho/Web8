class ShipType1Controller extends ShipController{
  constructor(x, y, spriteSuffix, configs){
    super(
      x,
      y,
      `Spaceship1${spriteSuffix}.png`,    //Spaceship1 + spriteSuffix + ".png"
      configs
    );
    this.configs.SHIP_SPEED = 300;
    this.bullet.RELOAD_SPEED = 10;
  }

  fire(){
    new BulletType1Controller(
      this.sprite.x,
      this.sprite.y,
      "BulletType1.png"
    )
  }
}
