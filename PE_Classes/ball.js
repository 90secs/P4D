class Ball{
    constructor(x,y,speed,size){
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.size = size;
      if(x >= width){
        x = width - size/2;
      }else if(x<=0){
        x = size/2;
      }
    }
    
    display(){
      fill('#ec407a')
      ellipseMode(CENTER);
      noStroke();
      ellipse(this.x,this.y,this.size,this.size);
    }
    
    move(){
      if(this.x >= width){
        this.x = width - this.size/2
      } else if (this.x <= 0){
        this.x = this.size/2
      }
      
      this.x += this.speed;
    }
    
    bounce(){
      if(this.x > width - this.size/2 || this.x <= this.size/2){
        this.speed *= -1;
      }
    }
  }
  