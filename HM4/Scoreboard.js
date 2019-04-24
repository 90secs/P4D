class Scoreboard {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.score = 0;
        this.size = 32;

    }

    display(font){
        push();
        fill(255);
        textSize(this.size);
        textFont(font);
        text('SCORE: ' + this.score ,this.x,this.y);
        pop();
    }
}