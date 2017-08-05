class ShipController{
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.playerGroup.create(x,y,'assets',spriteName);

    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor = new Phaser.Point(0.5,0.5);

    this.configs = configs;
    this.sprite.health = this.configs.health;

    this.bullet = [];
    this.bullet.timer = this.bullet.RELOAD_SPEED;

    this.sprite.update = this.update.bind(this);
  }
//sprite la anh
  update(){
    if(!this.sprite.alive) return;
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
        this.fire();
        this.bullet.timer = 0;
      }
    }
  }
  fire(){ };
}
