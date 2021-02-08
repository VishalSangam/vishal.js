var fixedRect, movingRect;
var rect1,rect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
rect1 = createSprite(100,100,50,50)
rect1. shapeColor = "green"
rect2=createSprite(200,200,80.80)
rect2.shapeColor = "green"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


 if(IsTouching(movingRect,rect2)){
  movingRect.shapeColor = "red";
  rect2.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  rect2.shapeColor = "green";
 }

  drawSprites();

}






