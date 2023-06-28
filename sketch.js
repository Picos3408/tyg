var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var gameOver, gameOverImg;
var restart, restartImg;



function preload() {
  bgImg = loadImage("assets/bg.png")

  balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png")

  obsTop1 = loadImage("assets/obsTop1.png")
  obsTop2 = loadImage("assets/obsTop2.png")

  obsBottom1 = loadImage("assets/obsBottom1.png")
  obsBottom2 = loadImage("assets/obsBottom2.png")
  obsBottom3 = loadImage("assets/obsBottom3.png")

  gameOverImg = loadImage("assets/gameOver.png");
  restartImg = loadImage("assets/restart.png");

  jumpSound = loadSound("assets/jump.mp3");
  dieSound = loadSound("assets/die.mp3");
}

function setup() {

  createCanvas(400, 400)
  //imagem de fundo
  bg = createSprite(165, 485, 1, 1);
  bg.addImage(bgImg);
  bg.scale = 1.3


  //criar solos superiores e inferiores
  bottomGround = createSprite(200, 390, 800, 20);
  bottomGround.visible = false;

  topGround = createSprite(200, 10, 800, 20);
  topGround.visible = false;

  //criar o balão      
  balloon = createSprite(100, 200, 20, 50);
  balloon.addAnimation("balloon", balloonImg);
  balloon.scale = 0.2;


  topObstaclesGroup = new Group();
  bottomObstaclesGroup = new Group();
  barGroup = new Group();

  //criar sprites game over e restart
gameOver = createSprite(220,200);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5;
gameOver.visible = false;

restart = createSprite(220,200);
restart.addImage(restartImg);
restart.scale = 0.5;
restart.visible = false;



}

function draw() {

  background("black");

  //faça o balão de ar quente pular
  if (keyDown("space")) {
    balloon.velocityY = -6;

  }

  //adicione gravidade
  balloon.velocityY = balloon.velocityY + 0.1;


  Bar();

  drawSprites();

  //gerar obstáculos superiores
  spawnObstaclesTop();


}


function spawnObstaclesTop() {
  if (World.frameCount % 60 === 0) {
    obstacleTop = createSprite(400, 50, 40, 50);

    //obstacleTop.addImage(obsTop1);

    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;

    //posições y aleatórias para os principais obstáculos
    obstacleTop.y = Math.round(random(10, 100));



    var rand = Math.round(random(1, 2));


    switch (rand) {
      case 1: obstacleTop.addImage(obsTop1);
        break;
      case 2: obstacleTop.addImage(obsTop2);
        break;
      default: break;
    }

    //atribuir tempo de vida à variável
    obstacleTop.lifetime = 100;

    balloon.depth = balloon.depth + 1;



  }
}
function spawnObstacleBottom() {
  if (World.frameCount % 60 === 0) {
    obstacleBottom = createSprite(400, 50, 40, 50);

    //obstacleTop.addImage(obsTop1);

    obstacleBottom.scale = 0.1;
    obstacleBottom.velocityX = -4;

    //posições y aleatórias para os principais obstáculos
    obstacleBottom.y = Math.round(random(10, 100));



    var rand = Math.round(random(1, 2));


    switch (rand) {
      case 1: obstacleTop.addImage(obsTop1);
        break;
      case 2: obstacleTop.addImage(obsTop2);
        break;
      default: break;
    }

    //atribuir tempo de vida à variável
    obstacleTop.lifetime = 100;

    balloon.depth = balloon.depth + 1;



  }
}
function Bar() {
  if (World.frameCount % 60 === 0) {
    var bar = createSprite(400, 200, 10, 800);
    bar.velocityX = -6
    bar.depth = balloon.depth;
    bar.lifetime = 70;
    bar.visible = false;
  }
}



