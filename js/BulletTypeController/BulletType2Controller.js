class BulletType2Controller extends BulletController {
  constructor(x, y, configs){
    super(x, y, "BulletType2.png",configs);

    this.sprite.SPEED = 250;
    this.sprite.TURN_SPEED = 5;
  }

  update(){
    this.target = Nakama.enemyGroup.getFirstAlive();
    if (this.target == null) {
      this.target = {
        x : 0,
        y : 0
      };
    }

    var targetAngle = Nakama.game.math.angleBetween(
      this.sprite.position.x, this.sprite.position.y,
      this.target.x, this.target.y,
    );

    if(this.sprite.rotation !== targetAngle + Math.PI/2){     // +PI/2 so it'll make the bullet fly toward the enemy instead of being thrown to the enemy.
      var delta = targetAngle - this.sprite.rotation + Math.PI/2;
      if (delta > Math.PI) delta -= Math.PI * 2;
      if (delta < -Math.PI) delta += Math.PI * 2;
      if (delta > 0){
        this.sprite.rotation += Nakama.game.math.degToRad(this.sprite.TURN_SPEED);
      }
      if (delta < 0){
        this.sprite.rotation -= Nakama.game.math.degToRad(this.sprite.TURN_SPEED);
      }
    }
    if (Math.abs(delta) < Nakama.game.math.degToRad(this.sprite.TURN_SPEED)) {
      this.sprite.rotation = targetAngle + Math.PI/2;
    }
    // -PI/2 so it'll correct the way that the bullet's supposed to fly
    this.sprite.body.velocity.x = Math.cos(this.sprite.rotation - Math.PI/2) * this.sprite.SPEED;
    this.sprite.body.velocity.y = Math.sin(this.sprite.rotation - Math.PI/2) * this.sprite.SPEED;
  }
}
