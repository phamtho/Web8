class EnemyBulletController{
  constructor(x,y,spriteName){
    this.sprite = Nakama.enemyBulletGroup.create(x,y,'assets',spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.anchor = new Phaser.Point(0.5,0.5);
    this.sprite.update = this.update.bind(this);
  }

  update(){
    this.sprite.body.velocity.y = 500;   //-this.configs.BULLET_SPEED;
  }
}
