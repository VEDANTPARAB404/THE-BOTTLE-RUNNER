var bottle, bottleI;

var ob, obI;

var block;

var tower, towerImage;

var spooky;

var gameState = "serve";

var obG, bG;

var score = 0;

var b1, b2 ;

function preload() {
  bottleI = loadImage("oil_bottle-removebg-preview.png");
  towerImage = loadImage("tower.png");
  obI = loadImage("covid-removebg-preview.png");

}

function setup() {
  createCanvas(600, 600)
  obG = createGroup();
  bG = createGroup();
  
  tower = createSprite(305, 225, 10, 10);
  tower.addImage(towerImage);
  tower.velocityY = 5;

  bottle = createSprite(200, 200, 10, 10);
  bottle.addImage(bottleI);
  bottle.scale = 0.3;
  
  b1 = createSprite(5,300,180,700);
  b1.visible = false;
  b2 = createSprite(620,300,180,700);
  b2.visible = false;
}

function draw() {
  background(225);

  //GAMESTATE SERVE
  if (gameState == "serve") {
    background(0);
    textSize(30);
    fill("red");
    text("PRESS SPACE TO START", 120, 300);
    
    textSize(25);
    fill("yellow");
    text("TRY TO SCORE ABOVE 2000",120,370)
    
  }

  if (keyDown("space")) {
    gameState = "play";
  }

  //GAMESTATE PLAY
  if (gameState == "play") {

    
  if (tower.y > 600) {
    tower.y = tower.width / 2;
  }


    if (keyDown("space")) {
      bottle.velocityY = -5;

    }
    bottle.velocityY = bottle.velocityY + 0.8;

    if (keyDown("left")) {
      bottle.x = bottle.x - 3;
    }

    if (keyDown("right")) {
      bottle.x = bottle.x + 3;
    }

    if (bottle.y > 600|| bottle.isTouching(obG)) {
      gameState = "end";
      bottle.velocityY = 0;
      bottle.velocityX = 0;
      //ob.velocityY = 0;
      ob.velocityX = 0;
    }
  
    
    bottle.collide(bG);
    bottle.collide(b1);
    bottle.collide(b2);
    
    score = score + Math.round(getFrameRate()/60);
    
    ob1();
    drawSprites();

    fill("yellow");
    textSize(25); 
    text("SCORE :"+score,450,40);
  }
  //GAMESTATE END
  if (gameState == "end") {
    background(0);
    fill("red");
    textSize(30);
    text("YOU DIED", 240, 300);
  }

}


  function ob1() {

    if (frameCount % 60 === 0) {

  ob = createSprite(random(50, 400), 0, 10, 10);
  obG.add(ob);
  ob.addImage(obI);
  ob.scale = 0.1;
  ob.velocityY = 5
  ob.setCollider("rectangle",100,100,150,150);
  bottle.setCollider("rectangle",0,0,90,390);
       
  block = createSprite(Math.round(random(50, 550)), 10, 60, 10);
  bG.add(block);
  block.velocityY = 4.5;
      
    }

  }

function reset(){
  bottle.x = 300;
  bottle.y = 300;
}