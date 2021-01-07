
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var gameState='play'

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas (400,400);
  ground = createSprite(200,390,800,20);
  monkey = createSprite(50,340,20,20);
  monkey.addAnimation('running',monkey_running)
  monkey.scale = 0.2;
  ground.velocityX = -3;
  bananaGroup= new Group();
  stoneGroup= new Group();
}


function draw() {
background("lightblue")
  if (gameState === "play"){
    
  
  if (ground.x < 0 ){
    ground.x = 200;
  }
  console.log(monkey.y)
  if (keyDown('space')&& monkey.y> 300){
    monkey.velocityY = -10;
    
  }
  monkey.velocityY += 0.5;
  
  spawnBanana();
  spawnStone();
    if (monkey.isTouching(stoneGroup)){
      gameState = "end"
      ground.velocityX = 0;
      stoneGroup.setVelocityEach(0,0);
      bananaGroup.setVelocityEach(0,0);
      stoneGroup.setLifetimeEach(-1);
      bananaGroup.setLifetimeEach(-1);

    }
  }
  monkey.collide(ground);
drawSprites();  
  
}
function spawnBanana(){
  if(frameCount%60 === 0){
    banana = createSprite(400,200,20,20)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -4
    banana.y = Math.round(random(200,300))
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
}

function spawnStone(){
  if(frameCount%150 === 0){
    stone = createSprite(400,350,20,20)
    stone.addImage(obstacleImage)
    stone.scale = 0.2
    stone.velocityX = -4
    stone.lifetime = 100;
    stoneGroup.add(stone);
  }
}





