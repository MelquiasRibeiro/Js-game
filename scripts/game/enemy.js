class Enemy extends Animation{
    constructor(positions, image,x,altura, largura,spriteWidth,spriteHeigth){
        super(positions, image,x,altura, largura,spriteWidth,spriteHeigth)
        this.velocidade = 10;
    }
    move(){
        this.x = this.x - this.velocidade;

        if(this.x < -this.largura){
            this.x = width;
        }
    }

}