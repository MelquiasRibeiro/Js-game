class Animation{
    constructor(positions, image,x,yvariation,altura, largura,spriteWidth,spriteHeigth){
        this.positions = positions,
        this.image = image;
        this.largura = largura
        this.altura = altura
        this.yvariation= yvariation;
        this.x = x;
        this.y = height - this.altura -this.yvariation;
        this.spriteWidth = spriteWidth;
        this.spriteHeigth =spriteHeigth;
        this.frame = 0;
    }
    show(){
        image(this.image,
              this.x, this.y,
              this.largura, this.altura, 
              this.positions[this.frame][0], 
              this.positions[this.frame][1], 
              this.spriteWidth, this.spriteHeigth);
        
              this.animate();
    }
    animate(){
        this.frame ++ 

        if(this.frame >= this.positions.length -1){
            this.frame = 0;
        }
    }
}