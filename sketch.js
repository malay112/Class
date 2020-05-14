var movingRect, FixedRect
var gameObject1,gameObject2


function setup() {
  createCanvas(window.innerWidth,window.innerHeight);

  movingRect = createSprite(400,200,100,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = 3;
  

  FixedRect = createSprite(400,400, 100,30);
  FixedRect.shapeColor
  FixedRect.debug = true;
  FixedRect.velocityY = -3;
  

  gameObject1 = createSprite(20,200,50,50)
  gameObject1.debug = true;
  gameObject1.shapeColor = "green";
  //gameObject1.velocityX = 3;

  gameObject2 = createSprite(440,200,50,50)
  gameObject2.debug = true;
  gameObject2.shapeColor = "green";
  //gameObject2.velocityX = -3;
}

function draw() {
  background("orange");
  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  
  


  if( isTouching(gameObject1,gameObject2)){
    gameObject1.shapeColor = "blue";
    gameObject2.shapeColor = "blue"
  }

  else {
    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

bounceOff(movingRect, FixedRect);
  
  drawSprites();
}