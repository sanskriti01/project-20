var car, wall;

var speed, weight;


function setup() {

  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor="white"

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor="yellow"

  speed = random(55, 90)
  weight = random(400, 1500)

  car.velocityX = 5;
}

function draw() {
  background("blue");  

if(wall.x - car.x < (car.width + wall.width/2)){
  car.velocityX = 0;

  var deformation = 0.5 * weight * speed* speed/22500;

  if(deformation > 180){
    car.shapeColor = "red";
  }

  if(deformation < 180 && deformation > 100){
    car.shapeColor = "black"
  }

  if(deformation < 180){
    car.shapeColor = "green"
  }
}



  drawSprites();
}