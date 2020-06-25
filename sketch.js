let scenarioImage;
let scenerio;
let witchImage;
let witch;
let gameSound;


function preload(){
  scenarioImage = loadImage('imagens/cenario/floresta.png');
  witchImage=loadImage('imagens/personagem/correndo.png');
  gameSound = loadSound('sons/trilha_jogo.mp3')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  scenerio = new Scenario(scenarioImage, 3);
  witch = new Witch(witchImage);
  frameRate(40)
  //gameSound.loop();
}

function draw() {
  scenerio.show();
  scenerio.move();
  witch.show();
  
}

