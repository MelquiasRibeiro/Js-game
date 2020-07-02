function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)
  gameSound.loop();
  game = new Game();
  game.setUp()
  initial = new Initial();
  gameOver = new GameOver();
  scenes = {
    game,
    initial,
    gameOver,
    
  }
  button = new Button('Play', width/2, height/3);
}

function keyPressed(){
 game.keyPressed(key)
}


function draw() {
 scenes[renderNow].draw();
}

