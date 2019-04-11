function setup() {
    var cnv = createCanvas(400, 400);
    //cnv.center();
  }
  
  function draw() {
    //setup mouse input and colors
    var x = mouseX;
    var y = mouseY;
  
    background(255 - x);
    var color1 = color(113, 76, 254);
    var color2 = color(239, 79, 166);
    var color3 = color(144, 238, 2);
  
    /*
    //limit the value of x and y
    if(x > 400){
      x = 400;
    }
    else{
      x = x;
    }
  
    if (y > 400) {
      y = 400;
    } 
    else {
      y = y;
    }
    */
  
    //black circle
    fill(0 + x);
    smooth();
    noStroke();
    ellipseMode(CENTER);
    ellipse(200, 200, 2 * x, 2 * x, 20);
  
    //black rectangle
    var x2 = x - 120;
    if (x < 120) {
      x2 = 0;
    }
  
    fill(0 + x2);
    smooth();
    noStroke();
    rectMode(CENTER);
    rect(200, 200, 1 * x2, 1 * x2);
  
    /*
    //black triangle 
    var x3 = x-160;
    if(x<160){
      x3 = 0;
    }
    
    fill(0 + x3);
    smooth();
    noStroke();
    triangle(100,300,200,100,300,300);
    */
  
    //rectangle
    fill(color3)
    smooth();
    noStroke();
    rectMode(CENTER);
    rect(240 + x, 150 - x, 140, 140);
  
    //circle
    fill(color2);
    smooth();
    noStroke();
    ellipseMode(CORNER);
    ellipse(70 - x, 90 - x, 160, 160);
  
    //triangle
    fill(color1);
    smooth();
    noStroke();
    triangle(120, 300 + x, 200, 150 + x, 280, 300 + x);
  
    //note
    var txt = "Please move the mouse horizontally"
    var textOpc;
    if (x == 0){
      textOpc = 255;
    }
    else{
      textOpc = 0;
    }
    
    fill (0,0,0,textOpc);
    text(txt,100,350);
    
    //document.write(x);
    
    if (x >= 255/2){
      stroke(255, 235, 59,255 - x + 127);
      beginShape(LINES);
      vertex(200,200 - x + 127);
      vertex(200 + x - 127,200);
      vertex(200 + x - 127,200);
      vertex(200,200 + x - 127);
      vertex(200,200 + x - 127);
      vertex(200 - x + 127,200);
      vertex(200 - x + 127,200);
      vertex(200,200 - x + 127);
      endShape();
      
      beginShape(LINES);
      vertex(200,180 - x + 127);
      vertex(220 + x - 127,200);
      vertex(220 + x - 127,200);
      vertex(200,220 + x - 127);
      vertex(200,220 + x - 127);
      vertex(180 - x + 127,200);
      vertex(180 - x + 127,200);
      vertex(200,180 - x + 127);
      endShape();
      
      beginShape(LINES);
      vertex(200,160 - x + 127);
      vertex(240 + x - 127,200);
      vertex(240 + x - 127,200);
      vertex(200,240 + x - 127);
      vertex(200,240 + x - 127);
      vertex(160 - x + 127,200);
      vertex(160 - x + 127,200);
      vertex(200,160 - x + 127);
      endShape();
    }
    
  
  
  }