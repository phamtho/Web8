class BulletController{
  constructor(x,y,spriteName){
    this.sprite = Nakama.game.add.sprite(x,y,'assets',spriteName);

    Nakama.game.physics.arcade.enable(this.sprite);

    //this.configs.BULLET_SPEED = 500;

    this.sprite.update = this.update.bind(this);
  }

  update(){
    this.sprite.body.velocity.y = -500; //-this.configs.BULLET_SPEED;
  }
}
