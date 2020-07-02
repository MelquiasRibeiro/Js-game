class Life {
    constructor(maxLifes,initialLifes){
        this.maxLifes = maxLifes;
        this.initialLifes = initialLifes;
        this.lifes = initialLifes;

        this.heartWidth =30;
        this.heartHeigth =30;
        this.xInitial = 20;
        this.y = 20
    }

    draw(){
        for(let i = 0; i<this.lifes; i++){
            const margin = i * 10;
            const position = this.xInitial * (i+1)

            image(lifeImage,position+margin,this.y,this.heartWidth,this.heartHeigth)
        }
    }

    getLife(){
        if(this.lifes < this.maxLifes){
            this.lifes++
        }
    }

    loseLife(){
        this.lifes--
    }
}