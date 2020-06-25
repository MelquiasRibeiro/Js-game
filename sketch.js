let scenarioImage;
let scenerio;
let witchImage;
let witch;
let enemyImage;
let enemy;
let gameSound;
let jumpSound;
let gameOverImage;
const matrixEnemy =[   
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

function preload(){
  scenarioImage = loadImage('imagens/cenario/floresta.png');
  witchImage=loadImage('imagens/personagem/correndo.png');
  enemyImage=loadImage('imagens/inimigos/gotinha.png');
  gameSound = loadSound('sons/trilha_jogo.mp3')
  jumpSound = loadSound('sons/somPulo.mp3')
  gameOverImage = loadImage('imagens/assets/game-over.png')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  scenerio = new Scenario(scenarioImage, 3);
  witch = new Witch(matrixWitch, witchImage, 0, 110, 135, 220, 270);
  enemy =new Enemy(matrixEnemy, enemyImage, width-50 ,52, 52, 104, 104)
  frameRate(40)
  gameSound.loop();
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
  enemy.show();
  enemy.move();

  if(witch.colision(enemy)){
    image(gameOverImage,width-1750/2,height/2)
    gameSound.stop()
    noLoop()
  }
}

