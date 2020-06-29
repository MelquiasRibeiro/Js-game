class Initial{
    constructor(){

    }
    draw(){
        this.__imageBg();
        this.__text();
        this.__button();
    }


    __imageBg(){
        image(initialImage, 0, 0, width, height)

    }

    __text(){
        textFont(font)
        textAlign(CENTER)
        textSize(50)
        text('The witch and',width/2,100)
        text('the weeping troll',width/2,150)
    }

    __button(){
        button.draw()
    }
}