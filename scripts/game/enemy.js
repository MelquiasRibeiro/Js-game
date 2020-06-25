class Enemy extends Animation{
    constructor(positions, image,x,yvariation,altura, largura,spriteWidth,spriteHeigth,speed,delay){
        super(positions, image,x,yvariation,altura, largura,spriteWidth,spriteHeigth)
        this.speed = speed;
        this.delay =delay;
        this.x = x + this.delay;
    }
    move(){
        this.x = this.x - this.speed;

        if(this.x < -this.largura -this.delay){
            this.x = width;
        }
    }

}