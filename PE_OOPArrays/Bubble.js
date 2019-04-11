class Bubble {
  constructor(x, y, r, a) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.alpha = a;
  }

  display() {
    ellipseMode(CENTER);
    fill(this.alpha);
    ellipse(this.x, this.y, 1.2 * this.r, 1.2 * this.r);
  }

  rise() {
    this.y = this.y - this.r + 4;
  }

  wrap() {
    if (this.y <= 0) {
      this.y = height;
    }
  }
}