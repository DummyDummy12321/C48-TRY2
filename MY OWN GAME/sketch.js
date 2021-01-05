var shape1, shape2,shape3,shape4, shape5, shape6;
var hurdle1,hurdle2,hurdle3,hurdle4,hurdle5;
var basket, basketimg;
var ground;

var hurdleGroup, shapeGroup;

function preload()
{

basketimg = loadImage("PIC/basket.png");
hurdle1 = loadImage("PIC/O1.png");
hurdle2 = loadImage("PIC/O2.png");
hurdle3 = loadImage("PIC/O3.png");
hurdle4 = loadImage("PIC/O4.png");
hurdle5 = loadImage("PIC/O5.png");

shape1 = loadImage("PIC/S1.png");
shape2 = loadImage("PIC/S2.png");
shape3 = loadImage("PIC/S3.png");
shape4 = loadImage("PIC/S4.png");
shape5 = loadImage("PIC/S5.png");
shape6 = loadImage("PIC/S6.png");

}

function setup()
 {
  createCanvas(1400,650);
  
  ground = createSprite(700,640,1400,20);
  ground.shapeColor = "brown";

  basket = createSprite(400,580,90,70);
  basket.addImage("bask",basketimg);
  basket.scale = 0.3;

  hurdleGroup = new Group();
  shapeGroup = new Group();
 
}


function draw() 
{
 background(255);

  if (keyDown("left") && basket.x > 50) 
 {
basket.x = basket.x -7;
 }
  
 if (keyDown("right") && basket.x < 1350) 
 {
basket.x = basket.x + 7;
 }
basket.collide(ground);
spawnShapes();
spawnHurdles();
  drawSprites();
 
}

function spawnShapes()
{
  if(frameCount % 100 === 0)  
  {
    var shape = createSprite(100,-100,20,20);
    shape.velocityY = 3;
    shape.x=Math.round(random(100,1300));
    var R = Math.round(random(1,6)) ;
    switch(R)
    {
      case 1 : shape.addImage("s1",shape1);
      shape.scale = 0.15;
      break;
      case 2 : shape.addImage("s2",shape2);
      shape.scale = 0.3;
      break;
      case 3 : shape.addImage("s3",shape3);
      shape.scale = 0.2;
      break;
      case 4 : shape.addImage("s4",shape4);
      shape.scale = 0.5;
      break;
      case 5 : shape.addImage("s5",shape5);
      shape.scale = 0.3;
      break;
      case 6 : shape.addImage("s6",shape6);
      shape.scale = 0.2;

      break;
      default : break;
    }

    shape.depth = basket.depth;
    basket.depth++;
    shape.lifetime = 1000;
    shapeGroup.add(shape);
  
  }
}

function spawnHurdles()
{
  if(frameCount % 250 === 0)  
  {
    var hurdle = createSprite(100,-100,20,20);
    hurdle.velocityY = 3;
    hurdle.x=Math.round(random(100,1300));
    var R = Math.round(random(1,5)) ;
    switch(R)
    {
      case 1 : hurdle.addImage("s1",hurdle1);
      hurdle.scale = 0.15;
      break;
      case 2 : hurdle.addImage("s2",hurdle2);
      hurdle.scale = 0.3;
      break;
      case 3 : hurdle.addImage("s3",hurdle3);
      hurdle.scale = 0.2;
      break;
      case 4 : hurdle.addImage("s4",hurdle4);
      hurdle.scale = 0.3;
      break;
      case 5 : hurdle.addImage("s5",hurdle5);
      hurdle.scale = 0.3;
      break;
      default : break;
    }

    hurdle.depth = basket.depth;
    basket.depth++;
    hurdle.lifetime = 1000;
    hurdleGroup.add(hurdle);
  
  }
}

