class Button {
    constructor(text,x,y){
        this.text = text;
        this.x = x;
        this.y = y;
        this.button = createButton(this.text)
        this.button.mousePressed(()=> this._chageScene())
        this.button.addClass('botao-tela-inicial');
    }

    draw(){
        this.button.position(this.x, this.y)
        this.button.center();
    }

    _chageScene(){
        this.button.remove();
        if (renderNow == 'gameOver') {
            window.location.reload();
        }else{
            renderNow ='game'
        }
    

    
    }

}