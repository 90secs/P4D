//Yezhang Wang
//IGME-609, Project#2
//Interactive Scene
//February 13, 2019

let ball;
let theCursor;
let rival;

function setup() {
  createCanvas(400, 400);
  ball = new bouncingBall();
  theCursor = new bat();
  rival = new opponent();

}

//opponent
class opponent {
  constructor() {
    this.x = 100;
    this.y = 20;
    this.width = 50;
    this.height = 10;
    this.xSpeed = 5;
  }
  
  display() {
    noStroke();
    fill(11, 63, 168);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }
  
  automove() {
    if(ball.ySpeed > 0){
      this.x = this.x;
    }
    if(ball.ySpeed < 0){
      if(this.x < ball.x - 25){
        this.xSpeed = random(3,8)
        this.x = this.x + this.xSpeed;
      }
      if(this.x > ball.x + 25){
        this.xSpeed = random(3,8)
        this.x = this.x - this.xSpeed;
      }
      if(this.x >= ball.x - 25 && this.x <= ball.x + 25){
        this.x = this.x //+ random(-1,1);
      }
    }
  }
}

// ball
class bouncingBall {
  constructor() {
    this.x = 200;
    this.y = 0;
    this.xSpeed = 2;
    this.ySpeed = 6;
    this.randomHit = 1;
  }

  display() {
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 10, 10);
  }

  move() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }

  bounce() {
    //hit top
    if (this.x <= width && this.x >= 0 && this.y < 0) {
      this.xSpeed = 0;
      this.ySpeed = 0;
    }
    
    //hit rival
    if (this.x >= rival.x - 25 && this.x <= rival.x + 25) {
      if (this.y == 30) {
        //this.xSpeed = this.xSpeed * -1;
        this.randomHit = random(0.8,1.8);
        this.xSpeed = this.xSpeed * this.randomHit;
        print(this.xSpeed);
        this.ySpeed = this.ySpeed * -1;
      }
    }

    //hit bat
    if (this.x >= theCursor.x - 25 && this.x <= theCursor.x + 25) {
      if (this.y >= 370) {
        //this.xSpeed = this.xSpeed * -1;
        this.ySpeed = this.ySpeed * -1;
      }
      //print(theCursor.x)
    }

    //hit bottom
    if (this.y >= height) {
      this.xSpeed = 0;
      this.ySpeed = 0;
    }

    //hit left
    if (this.x < 0) {
      this.xSpeed = this.xSpeed * -1;
      //this.ySpeed = this.ySpeed * -1;
    }

    //hit right
    if (this.x > width) {
      this.xSpeed = this.xSpeed * -1;
      //this.ySpeed = this.ySpeed * -1;
    }
  }
}
// bat
class bat {
  constructor() {
    this.x = 200;
    this.y = 380;
    this.width = 50;
    this.height = 10;
  }

  display() {
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.x = mouseX;

    if (this.x < 25) {
      this.x = 25;
    }

    if (this.x > width - 25) {
      this.x = width - 25;
    }
  }
}

function draw() {
  var a = frameCount / 10;
  background(219 - a, 36 + a, 0 + a);
  //background
  push();
  rectMode(CENTER);
  noFill();
  stroke(255);
  strokeWeight(10);
  rect(200, 0, 390, 790);
  rect(25, 0, 50, 800);
  rect(375, 0, 50, 800);
  rect(200, 0, 300, 400);
  line(200, 0, 200, 200);
  pop();

  ball.display();
  ball.bounce();
  ball.move();
  theCursor.display();
  theCursor.move();
  rival.display();
  rival.automove();

  //alert
  if (ball.y >= width) {
    push();
    fill(255);
    textFont('Futura');
    textSize(56);
    text('GameOver', 56, 320);
    pop();
  }
  
  if(ball.y <= 0){
    push();
    fill(255);
    textFont('Futura');
    textSize(56);
    text('YouWin!', 90, 320);
    pop();
  }
}