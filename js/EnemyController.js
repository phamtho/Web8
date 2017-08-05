class EnemyController{
  constructor(x,y,spriteName,configs){
    this.sprite = Nakama.enemyGroup.create(x,y,'assets',spriteName);

    this.sprite.anchor = new Phaser.Point(0.5,0.5);
    this.sprite.update = this.update.bind(this);

    this.bullet = [];
    this.bullet.RELOAD_SPEED = 50;
    this.bullet.timer = this.bullet.RELOAD_SPEED;
    this.configs = configs;
    this.sprite.health = this.configs.health;
  }

  update(){
    if(!this.sprite.alive) return;
    this.sprite.position.x = 320 + 320*Math.sin(Nakama.game.time.time/1000);
    if(this.bullet.timer < this.bullet.RELOAD_SPEED) this.bullet.timer++;
    else{
      this.bullet.push(new EnemyBulletController(this.sprite.position.x,this.sprite.position.y,'BulletType1.png'));
      this.bullet.timer = 0;
    }
  }
}
