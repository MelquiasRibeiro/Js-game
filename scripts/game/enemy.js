class Enemy extends Animation{
    constructor(positions, image,x,yvariation,altura, largura,spriteWidth,spriteHeigth,speed){
        super(positions, image,x,yvariation,altura, largura,spriteWidth,spriteHeigth)
        this.speed = speed;
        
        this.x= width 
    }
    move(){
        this.x = this.x - this.speed;
    }

    appear(){
        this.x= width
    }

}