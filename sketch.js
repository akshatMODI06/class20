var a,b;

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor="green";

  b=createSprite(800, 400, 50, 50);
  b.shapeColor="yellow";
}

function draw() {
  background("pink");
  b.x=World.mouseX;
  b.y=World.mouseY;
  
  if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2 && b.y-a.y<a.width/2+b.width/2 && a.y-b.y<a.width/2+b.width/2){
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else{
    a.shapeColor="blue";
    b.shapeColor="blue";
  }

  drawSprites();
}