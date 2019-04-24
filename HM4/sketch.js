//Global Variables
var bullets = [];
var bulletImg;

var shooter;
var shooterImg;

var targets = [];
var targetImg;
var targetsY = [75, 200, 325];

var myScore;
var myFont;

var bgImg;

function preload() {
    //Input an image for bullets
    bulletImg = loadImage('Assets/Ellipse.png');

    //Input an image for shooter's static state
    shooterImg = loadImage('Assets/shooter-static.png');
    
    //Input an image for targets
    targetImg = loadImage('Assets/target.png')
    
    //Input an image for background
    bgImg = loadImage('Assets/bg.png')
    
    //Input the font
    myFont = loadFont('Assets/DTM-Sans.otf')
  }  

function setup() {
    createCanvas(800, 600);

    //creat shooter, targets and scoreboard from external js files
    shooter = new Character(width/2 - 30,height*3/4);
    for (var i = 0; i < 3; i++) {
      targets[i] = new Target(100, targetsY[i]);
    }
    myScore = new Scoreboard(20,550);
  }
  
function draw() {
  background(220);
  //draw the background
  push();
  imageMode(CORNER);
  image(bgImg,0,0,width,height);
  pop();

  //draw the shooter and start hit detection
  shooter.display();
  shooter.constraint();

  //draw three targets and move them.
  for (var i = 0; i < targets.length; i++) {
    targets[i].display(targetImg);
    targets[i].move();
    targets[i].changeDirection();
  }

  //when anyone of those targets is hit, erase the target and make it respawn after 3 seconds;
  for (var i = 0; i < targets.length; i++) {
    if (targets[i].contains()) {
      targets[i].size = 0.1;
      myScore.score += 1; 
      setTimeout(respawn, 3000);
    }
  }
  
  //display every bullet in the bullets array
  for (i = 0; i < bullets.length; i++) {
    bullets[i].display(bulletImg);
    bullets[i].move();
    bullets[i].life();
  }
  //erase those ones outside the screen
  for (i = 0;i<bullets.length; i++){
    if(bullets[i].exist == 0){
        bullets.splice(i,1);
    }
  }

  //backup set of controlling the shooter
  if (keyIsDown(87)) {
    shooter.moveUp();
  }
  if (keyIsDown(65)) {
    shooter.moveLeft();
  }
  if (keyIsDown(83)) {
    shooter.moveDown();
  }
  if (keyIsDown(68)) {
    shooter.moveRight();
  }

  //draw the scoreboard
  myScore.display(myFont);
}

//the respawn function of targets
function respawn(){
  for(i = 0; i < targets.length; i++){
    if(targets[i].size === 0.1){
      targets[i].size = 50;
      targets[i].x = random(100,700);
    }
  }
}

//SHOOT!!!
function mouseClicked() {
    var bullet = new Bullet(shooter.x + shooter.size/2, shooter.y- shooter.size/2);
    bullets.push(bullet);
}

//control the shooter
function keyPressed() {
    if(keyCode === LEFT_ARROW) {
        shooter.moveLeft();
    }
    if(keyCode === RIGHT_ARROW) {
      shooter.moveRight();
    }
    if(keyCode === UP_ARROW) {
      shooter.moveUp();
    }
    if(keyCode === DOWN_ARROW) {
      shooter.moveDown();
    }

}