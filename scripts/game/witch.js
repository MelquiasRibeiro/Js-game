class Witch extends Animation{
    constructor(positions, image,x,yvariation,altura, largura,spriteWidth,spriteHeigth){
        super(positions, image,x,yvariation,altura, largura,spriteWidth,spriteHeigth)

        this.yvariation = yvariation;
        this.yInitial = height - this.altura - this.yvariation;
        this.y = this.y;
        this.jumpSpeed = 0;
        this.gravity = 5;
        this.jumpHeight=-50
        this.jumps = 0 ;
        this.invulnerable = false;

    }

    jump(){
        if(this.jumps < 2){
            this.jumpSpeed = this.jumpHeight;   
            this.jumps++
        }
    }

    aplyGravity(){
        this.y = this.y + this.jumpSpeed;
        this.jumpSpeed = this.jumpSpeed + this.gravity;

        if(this.y > this.yInitial){
            this.y = this.yInitial;
            this.jumps = 0
        }
    }
    beInvulnerable(){
        this.invulnerable = true;
        setTimeout(()=>{this.invulnerable=false},1000)
    }


    colision(enemy){
        if(this.invulnerable){
            return false
        }

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