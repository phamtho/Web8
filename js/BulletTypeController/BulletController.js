class BulletController{
  constructor(x,y,spriteName){
    this.sprite = Nakama.bulletGroup.create(x,y,'assets',spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.update = this.update.bind(this);
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.anchor = new Phaser.Point(0.5,0.5);
    this.sprite.body.velocity.y = -1500;
  }

  update(){

  }
}
