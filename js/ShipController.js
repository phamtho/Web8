class ShipController{
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x,y,'assets',spriteName);

    Nakama.game.physics.arcade.enable(this.sprite); //dung cai nay

    this.sprite.body.collideWorldBounds = true;

    this.configs = configs;
    this.configs.SHIP_SPEED = 300;

    this.bullet = [];
    this.bullet.RELOAD_SPEED = 10;
    this.bullet.timer = this.bullet.RELOAD_SPEED;

    this.sprite.update = this.update.bind(this);
  }
//sprite la anh
  update(){
    if(Nakama.keyboard.isDown(this.configs.left)){
    //  if(this.sprite.position.x > 0) this.sprite.position.x -= 10;
      this.sprite.body.velocity.x = -this.configs.SHIP_SPEED;
    }

    else if(Nakama.keyboard.isDown(this.configs.right)){
      //if(this.sprite.position.x < Nakama.configs.GAME_WIDTH-this.sprite.width) this.sprite.position.x += 10;
      this.sprite.body.velocity.x = this.configs.SHIP_SPEED;
    }

    else if(Nakama.keyboard.isDown(this.configs.up)){
      //if(this.sprite.position.y > 0) this.sprite.position.y -= 10;
      this.sprite.body.velocity.y = -this.configs.SHIP_SPEED;
    }

    else if(Nakama.keyboard.isDown(this.configs.down)){
      //if(this.sprite.position.y < Nakama.configs.GAME_HEIGHT-this.sprite.height) this.sprite.position.y += 10;
      this.sprite.body.velocity.y = this.configs.SHIP_SPEED;
    }
    else {
      this.sprite.body.velocity.x = 0;
      this.sprite.body.velocity.y = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.fire)){
      if(this.bullet.timer < this.bullet.RELOAD_SPEED) this.bullet.timer++;
      else{
        this.bullet.push(new BulletController(this.sprite.position.x + this.sprite.width/4,this.sprite.position.y - this.sprite.height/3,'BulletType1.png'));
        this.bullet.timer = 0;
      }
    }
  }
}
