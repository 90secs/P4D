class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 1.5;
    this.size = 10;
    this.exist = 1;

  }

  display(png) {
    noStroke();
    fill(0);
    imageMode(CENTER);
    image(png, this.x, this.y,this.size,this.size);
  }

  move() {
    this.y -= this.speed;
  }

  //detect if the bullet is outside the screen
  life() {
    if (this.y < 0) {
      this.exist = 0;
    }
  }
}



