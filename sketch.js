let scenarioImage;
let scenerio;
let witchImage;
let witch;
let dropImage;
let drop;
let gameSound;
let jumpSound;
let gameOverImage;
let trollImage;
let troll;
let flyerDropImage;
let flyerDrop;
let points
const enemys =[];


const matrixDrop =[   
[0, 0],
[105, 0],
[210, 0],
[315, 0],
[0, 104],
[105, 104],
[210, 104],
[315, 104],
[0, 208],
[105, 208],
[210, 208],
[315, 208],
[0, 312],
[105, 312],
[210, 312],
[315, 312],
[0, 409],
[105, 409],
[210, 409],
[315, 409],
[0, 503],
[105, 503],
[210, 503],
[315, 503],
[0, 609],
[105, 609],
[210, 609],
[315, 609],
]
const matrixWitch = [
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
const matrixTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrixFlyerDrop = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

function preload(){
  scenarioImage = loadImage('imagens/cenario/floresta.png');
  witchImage=loadImage('imagens/personagem/correndo.png');
  dropImage=loadImage('imagens/inimigos/gotinha.png');
  trollImage=loadImage('imagens/inimigos/troll.png')
  flyerDropImage = loadImage('imagens/inimigos/gotinha-voadora.png')
  gameSound = loadSound('sons/trilha_jogo.mp3')
  jumpSound = loadSound('sons/somPulo.mp3')
  gameOverImage = loadImage('imagens/assets/game-over.png')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  scenerio = new Scenario(scenarioImage, 3);
  witch = new Witch(matrixWitch, witchImage, 0,30, 110, 135, 220, 270);
  const drop = new Enemy(matrixDrop, dropImage, width-50,30 ,52, 52, 104, 104,10,100)
  const troll = new Enemy(matrixTroll, trollImage, width,0 ,200, 200, 400, 400,10,500)
  const flyerDrop = new Enemy(matrixFlyerDrop, flyerDropImage, width-50,400 ,52, 52, 200, 150,10,500)
  points = new Points()
  enemys.push(drop);
  enemys.push(troll);
  enemys.push(flyerDrop);

  console.log(enemys)
  

  frameRate(40)
  //gameSound.loop();
}

function keyPressed(){
  if(key ==="ArrowUp"){
    witch.jump();
    jumpSound.play()
  }
}


function draw() {
  scenerio.show();
  scenerio.move();
  witch.show();
  witch.aplyGravity(); 
  points.show();
  points.getPoints();
  enemys.forEach(enemy => {
    enemy.show()
    enemy.move()
    
    if (witch.colision(enemy)) {
      image(gameOverImage, width/2 - 200, height/3)      
      noLoop()
    }
    
  })
  
}

