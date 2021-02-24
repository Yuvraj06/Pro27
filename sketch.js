
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new paper(290,500,100);
	bob2 = new paper(390,500,100);
	bob3 = new paper(490,500,100);
	bob4 = new paper(590,500,100);
	bob5 = new paper(690,500,100);

	roof = new Ground(500,150,600,50)

	ground = new Ground(500,690,1000,20);

	rope = new Chain(bob1.body,{x:290,y:150});
	rope2 = new Chain(bob2.body,{x:390,y:150});
	rope3 = new Chain(bob3.body,{x:490,y:150});
	rope4 = new Chain(bob4.body,{x:590,y:150});
	rope5 = new Chain(bob5.body,{x:690,y:150});

	Engine.run(engine);

	
  
}


function draw() {
 
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ground.display();

  	textSize(30);
	fill("white")
 	 text("Press 'Space'",400,50);
	
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-550,y:0});
	  
  
	}
}


