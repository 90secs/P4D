var myBall;

function setup() {
  createCanvas(400, 400);
  myBall = new Ball(width/2,height/2,3,40)
}

function draw() {
  background(220);
  myBall.display();
  myBall.move();
  myBall.bounce();
}