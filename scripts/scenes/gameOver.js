class GameOver {
    constructor() {
        this.buttonRestart= new Button('Restart',width / 2, height / 7 * 5);
    
      }
    
      draw() {
        this. _Background()
        this.buttonRestart.draw()
      }
      
      _Background() {
        image(gameOverBg, 0, 0, width, height);
      }
}