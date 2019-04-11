//Yezhang Wang
//IGME-609, Project#3
//Conditionals and Loops
//March 22, 2019


//load fonts
function preload() {
  fontReg = loadFont('font/Roboto-Regular.ttf')
  fontThin = loadFont('font/Roboto-Thin.ttf')
  fontBold = loadFont('font/Roboto-Bold.ttf')
}

//GLOBAL VARIABLES
var ball;
var checkBox;
var checkBoxTextSize;
var slider;
var switcher;
var step1 = false;
var step2 = false;
var bgColor;


function setup() {
  createCanvas(480, 400);
  ball = new Ball();
  checkBox = new CheckBox();
  slider = new Slider();
  switcher = new Switcher();
  bgColor = color(220);
  checkBoxTextSize = 12;
}

function draw() {
  background(bgColor);
//background pattern
  for(i = 0; i < 20; i++){
    for(j = 0; j < 24; j++){
      push();
      noStroke();
      fill(251,251,251,80);
      ellipseMode(CENTER);
      ellipse(10 + 20*j,10+20*i,6,6);
      pop();
    }
  }
  checkBox.display();
  ball.display();
//state switch1
  if(dist(ball.x, ball.y, 82.5, 82.5) <= 42.5){
  	checkBox.checkText(checkBoxTextSize);
    step1 = true;
  } else {
  	step1 = false;
  }
//state listener1
  if(step1){
  	slider.display();
  }
//state switch2
  if(checkBoxTextSize >= 56){
  	step2 = true;
  } else {
  	step2 = false;
  }
//state listener2
  if(step2){
    switcher.display();
    switcher.text();
  }
}


// COMPONENTS

//check box
function CheckBox() {
  this.size = 12;
  this.display = function() {
    push();
		stroke(51);
  	noFill();
  	strokeWeight(5);
  	rect(40,40,85,85);
    pop();
  }
//checkbox text, only be activated when the ball is in the box.
  this.checkText = function(s){
    this.size = s;
    textAlign(LEFT,CENTER);
    textSize(this.size);
  	text('Checked', 160, 87.5);
  }
}

//slider
function Slider(){
  this.length = 400;
  this.start = 40;
  this.x = 55;
  this.y = 188.5;
  
  this.display = function(){
    push();
    fill(51);
    strokeWeight(5);
    stroke(51);
  	line(this.start, this.y, this.start + this.length, this.y);
    
    rectMode(CENTER);
    rect(this.x,this.y,30,30);
    
    textAlign(LEFT,BOTTOM);
    textSize(24);
    noStroke();
    text('Font'+' '+'Size:' + ' '+int(checkBoxTextSize), 40,231);
    pop();
  }
//its drag behavior, and the limitation of mouseX
  this.drag = function(){
  	this.x = mouseX;
    if(mouseX<55){
    	this.x = 55;
    }
    if(mouseX > 425){
    	this.x = 425;
    }
  }
//the slider control of check box text size, from 12 to 56
  this.control = function(){
  	checkBoxTextSize = map(this.x,55,425,12,56);
  }
}

//switcher
function Switcher(){
  this.x = 47;
  this.y = 286;
  this.state = false;
  
  this.display = function(){
    push();
    stroke(51);
    fill(51);
    rect(40, 278, 85, 40);
    pop();
    
    push();
    noStroke();
    fill(bgColor);
    rect(this.x,this.y,25,25);
    pop();
  }
//the switch behavior and state condition
  this.move = function(){
    if(this.x === 47){
      this.x = 93;
      this.state = true;
    } else {
      this.x = 47;
      this.state = false;
    }
  }
//text, only be activated when the switch is on
  this.text = function(){
    if(this.state == true){
      textAlign(LEFT,BOTTOM);
      textSize(24);
      noStroke();
      text('Activated', 160, 312);
    }
  }
}

//ball
function Ball() {
  this.x = width/2;
  this.y = height/2;
  this.r = 40;
  
  this.display = function(){
    push();
    fill(51);
    stroke(bgColor);
    strokeWeight(5);
    ellipseMode(CENTER);
  	ellipse(this.x, this.y, this.r);
    pop();
  }
//its drag behavior
  this.drag = function() {
    this.x = mouseX;
    this.y = mouseY;
  }
}

//EVENT LISTENER

//drag the ball
function mouseDragged(){
  if(dist(mouseX,mouseY,ball.x,ball.y) <= 1.5*ball.r){
	ball.drag();
  }
//use the slider control
  if(dist(mouseX,mouseY,slider.x,slider.y) <= 30){
  	slider.drag();
    slider.control();
  }
}
//turn on or off the switch
function mouseClicked(){
  if(mouseX >= 40 && mouseX <= 125){
    if(mouseY >= 278 && mouseY <= 318){
      switcher.move();
    }
  }  
}
//keyboard behavior
function keyPressed(){
//press p to change the background color to pink
  if(keyCode == 80){
    bgColor = color(255, 193, 223);
  }
//press w to change the background color to light gray
  if(keyCode == 87){
    bgColor = color(220);
  }
//press b to change the background color to blue
  if(keyCode == 66){
    bgColor = color(204, 225, 255);
  } 
//press r to reset the canvas
  if(keyCode == 82){
    createCanvas(480, 400);
    ball = new Ball();
    checkBox = new CheckBox();
    slider = new Slider();
    switcher = new Switcher();
    bgColor = color(220);
    checkBoxTextSize = 12;
  }
}

















