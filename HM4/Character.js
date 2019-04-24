class Character{
	
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.size = 80;
		this.speed = 3;
	}
	
	display(){
		imageMode(CENTER);
		image(shooterImg, this.x, this.y, this.size, this.size);
	}
	
	//control the character move up
	moveUp(){
		this.y = this.y - this.speed;
	}
	
	//control the character move down
	moveDown(){
		this.y = this.y + this.speed;
	}
	
	//control the character move left
	moveLeft(){
		this.x = this.x - this.speed;
	}
	
	//control the character move right
	moveRight(){
		this.x = this.x + this.speed;
	}

	//limit the character‘s range of activity
	constraint(){
		if(this.x <= 0 + this.size/2){
			this.x = 0 + + this.size/2;
		}
		if(this.x >= width - this.size/2){
			this.x = width - this.size/2
		}
		if(this.y <= height*4/5){
			this.y = height*4/5;
		}
		if(this.y >= height - this.size/2){
			this.y = height - this.size/2
		}
	}
}