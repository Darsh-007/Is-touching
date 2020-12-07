var fixedRect;
var movingRect;
var go1;
var go2;


function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="yellow";
  fixedRect.debug=true;
  movingRect=createSprite(600,200,50,50);
  movingRect.shapeColor="cyan";
  movingRect.debug=true;
  go1=createSprite(200,300,40,40);
  go1.shapeColor="green";
  go2=createSprite(200,350,40,40);
  go2.shapeColor="orange";
}

function draw() {
  background("black");  

movingRect.x=mouseX;
movingRect.y=mouseY;

if(isTouching(movingRect,go2)){
  movingRect.shapeColor="blue";
  go2.shapeColor="red";
}
else{
  movingRect.shapeColor="cyan";
  go2.shapeColor="yellow";
}

  
  drawSprites();
}















