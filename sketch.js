var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3, box1Sprite, box2Sprite, box3Sprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	World.add(world, packageBody);

	helicopterBody = Bodies.rectangle(width/2, 220, width, 10 , {isStatic:true} );
	World.add(world, helicopterBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);

	box1Sprite=createSprite(130, 630, 20, 70);
	box2Sprite=createSprite(270, 630, 20, 70);
	box3Sprite=createSprite(200, 650, 120, 20);

	box1Sprite.velocityX = 5;
	box2Sprite.velocityX = 5;
	box3Sprite.velocityX = 5;
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed()
  if (box1Sprite.x < 0){
	  box1Sprite.velocityX = 5;
	  box2Sprite.velocityX = 5;
	  box3Sprite.velocityX = 5;
  }
  if (box3Sprite.x > 740){
	box1Sprite.velocityX = -5;
	box2Sprite.velocityX = -5;
	box3Sprite.velocityX = -5;
  }
  if (packageSprite.isTouching(box3Sprite)){
	//   score = score + 1;
	  packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	  helicopterBody = Bodies.rectangle(width/2, 220, width, 10 , {isStatic:true} );
	World.add(world, helicopterBody);
		Matter.Body.setStatic(helicopterBody, true);
  }
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(helicopterBody, false);
  }
}



