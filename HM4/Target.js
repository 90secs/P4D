class Target {

	constructor(x, y) {
	  this.x = x;
	  this.y = y;
	  this.size = 50;
	  this.speed = random(1, 1.5);
	}
  
	display(png) {
	  imageMode(CENTER);
	  image(png, this.x, this.y,this.size, this.size);
	}
  
	move() {
	  this.x += this.speed;
	}
	
	//bounce horizontally
	changeDirection() {
	  if (this.x - 2*this.size < 0 || this.x + 2*this.size > width) {
		this.speed *= -1;
	  }
	}
  
	//check if the bullet hit the target；
	contains() {
	  for(var i = 0; i < bullets.length; i++){
		  let d = dist(bullets[i].x, bullets[i].y, this.x, this.y);
	  	if (d < this.size/2 + bullets[i].size/2) {
			bullets[i].exist = 0;
			return true;
	  	} 
	  }
	  return false;
	}
}