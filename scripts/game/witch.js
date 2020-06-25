class Witch{
    constructor(image){
        this.image=image;
        this.positions = [
            [0, 0],
            [220, 0],
            [440, 0],
            [660, 0],
            [0, 270],
            [220, 270],
            [440, 270],
            [660, 270],
            [0, 540],
            [220, 540],
            [440, 540],
            [660, 540],
            [0, 810],
            [220, 810],
            [440, 810],
            [660, 810],
          ] ;
        this.frame =0;
    }

    show(){
        image(this.image,
              0, height-135,
              110, 135, 
              this.positions[this.frame][0], 
              this.positions[this.frame][1], 
              220, 270);
        
              this.animate();
    }
    animate(){
        this.frame ++ 

        if(this.frame >= this.positions.length -1){
            this.frame = 0;
        }
    }
}