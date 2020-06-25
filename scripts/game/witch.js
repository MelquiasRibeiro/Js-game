class Witch extends Animation{
    constructor(positions, image,x,altura, largura,spriteWidth,spriteHeigth){
        super(positions, image,x,altura, largura,spriteWidth,spriteHeigth)
        
        this.yInitial = height - this.altura;
        this.y = this.y
        this.jumpSpeed = 0;
        this.gravity = 5;
    }

    jump(){
        this.jumpSpeed = -50;   
    }

    aplyGravity(){
        this.y = this.y + this.jumpSpeed;
        this.jumpSpeed = this.jumpSpeed + this.gravity;

        if(this.y > this.yInitial){
            this.y = this.yInitial;
        }
    }

    colision(enemy){
        noFill()

        const precision = 0.7;

        const collided = collideRectRect(
            this.x,
            this.y,
            this.largura*precision,
            this.altura*precision,
            enemy.x,
            enemy.y,
            enemy.largura*precision,
            enemy.altura*precision
        )

        return collided;
    }
    
}