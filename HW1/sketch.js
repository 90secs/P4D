//Yezhang Wang
//IGME-609, Project#1
//Self Portrait
//January 26, 2019


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255, 135, 145);
  smooth();
  
  //T-shirt part
  push();
  fill(204);
  noStroke();
  rect(0, 351, 600,327);
  pop();
  
  //Stripes
  push();
  noStroke();
  fill(0, 135, 104);
  rect(0, 463, 600,50);
  rect(0, 532, 600,50);
  pop();
  
  //Neckline
  push();
  noFill();
  strokeWeight(37);
  stroke(0, 135, 104);
  strokeCap(SQUARE);
  arc(331, 351, 152, 152, 0, PI, OPEN);
  pop();
  
  //Neck
  push();
  noStroke();
  fill(65, 134, 255);
  ellipseMode(CENTER);
  ellipse(331, 351, 70);
  
  rectMode(CENTER);
  rect(331, 311, 70, 80);
  pop();
  
  //Face
  push();
  noStroke();
  fill(65, 134, 255);
  rectMode(CENTER);
  rect(301, 215, 194, 194, 0, 0, 16, 50);
  pop();
  
  //Hair
  push();
  noStroke();
  fill(51);
  rectMode(CENTER);
  rect(318, 116, 160, 106, 0, 24, 0, 0);
  arc(238, 63, 212, 212, PI - HALF_PI, PI )
  pop();
  
  push();
  noStroke();
  fill(17);
  rectMode(CENTER);
  rect(328, 116, 140, 106, 0, 24, 0, 0);
  arc(268, 63, 212, 212, PI - HALF_PI, PI )  
  pop();
  
  //Temples
  push();
  noStroke();
  fill(34);
  rectMode(CENTER);
  rect(382, 161, 32, 86, 20, 0, 2, 2);  
  pop();
  
  //Ear
  push();
  noStroke();
  fill(65, 134, 255);
  ellipseMode(CENTER);
  ellipse(398, 203, 50);  
  pop();
  
  push();
  noFill();
  strokeWeight(4);
  stroke(51, 51, 51);
  strokeCap(SQUARE);
  arc(398, 203, 30, 30, PI + QUARTER_PI, QUARTER_PI, OPEN);
  arc(402, 211, 30, 30, PI + QUARTER_PI, 0 - QUARTER_PI, OPEN);
  pop();
  
  //Brow
  push();
  noStroke();
  fill(51);
  arc(237, 196, 24, 24, PI, 0 - HALF_PI);
  arc(245, 184, 24, 24, 0, HALF_PI);
  rectMode(CENTER);
  rect(241, 190, 8, 12)
  
  arc(305, 184, 24, 24, HALF_PI, PI);
  arc(313, 196, 24, 24, 0 - HALF_PI, 0);
  rectMode(CENTER);
  rect(309, 190, 8, 12)
  pop();
  
  //Nose
  push();
  noFill();
  strokeCap(SQUARE);
  strokeWeight(4);
  stroke(51);
  line(266, 216, 266, 230);
  arc(268, 238, 18, 18, HALF_PI, 0 - HALF_PI);
  pop();
  
  //Mouth
  push();
  noFill();
  strokeCap(SQUARE);
  strokeWeight(4);
  stroke(51);
  line(255, 271, 300, 271);
  arc(256, 260, 22, 22, HALF_PI, PI);
  arc(264, 279, 16, 16, HALF_PI, 0 - HALF_PI);
  pop();
  
  //Eyes
  push();
  noFill();
  strokeCap(SQUARE);
  strokeWeight(4);
  stroke(51);
  ellipseMode(CENTER);
  ellipse(240, 216, 20);
  
  arc(240, 216, 34, 34, 0, HALF_PI);
  arc(310, 220, 32, 32, HALF_PI, PI);
  pop();
  
  push();
  noStroke();
  fill(51);
  ellipseMode(CENTER);
  ellipse(310, 220,16);
  pop();
  
  push();
  noStroke();
  fill(51);
  ellipseMode(CENTER);
  ellipse(238, 216, 8);
  pop();
  
  push();
  noStroke();
  fill(255, 135, 145);
  ellipse(309, 220, 6);
  pop();
  
  //Shadow on Neck
  noStroke();
  fill(51,51,51,90);
  beginShape();
  vertex(296, 312);
  vertex(368, 312);
  vertex(296, 332);
  endShape(CLOSE);
}