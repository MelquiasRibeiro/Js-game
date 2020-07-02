class Game {
    constructor(){
        this.enemyId=0;
    }

    setUp(){
        scenerio = new Scenario(scenarioImage, 3);
        witch = new Witch(matrixWitch, witchImage, 0,30, 110, 135, 220, 270);
        life = new Life(3,3);
        const drop = new Enemy(matrixDrop, dropImage, width-50,30 ,52, 52, 104, 104,10,100)
        const troll = new Enemy(matrixTroll, trollImage, width,0 ,200, 200, 400, 400,10,100)
        const flyerDrop = new Enemy(matrixFlyerDrop, flyerDropImage, width-52,200 ,100, 75, 200, 150,10,100)
        points = new Points()
        enemys.push(drop);
        enemys.push(troll);
        enemys.push(flyerDrop);
    } 

    keyPressed(key){
        if(key ==="ArrowUp"){
            witch.jump();
            jumpSound.play()
          }
    }

    draw(){
        scenerio.show();
        scenerio.move();
        witch.show();
        witch.aplyGravity(); 
        points.show();
        points.getPoints();
        life.draw();
        
        const enemyOnScreen = enemys[this.enemyId];
        const visibleEnemy = enemyOnScreen.x < -enemyOnScreen.largura;
      
      
        enemyOnScreen.show()
        enemyOnScreen.move()
      
      
          if(visibleEnemy){
            this.enemyId++;
            if(this.enemyId> enemys.length-1){
              this.enemyId = 0;
            }  
            enemyOnScreen.speed = parseInt(random(20,30))
          }
          
          if (witch.colision(enemyOnScreen)) {
            life.loseLife()
            witch.beInvulnerable()
            if(life.lifes ===0){
              image(gameOverImage, width/2 - 200, height/3)  
              noLoop()
            }
          }
    }
}