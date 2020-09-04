
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var world;
var paper;
var ground;
var dustbin;

function setup() {
	createCanvas(800, 700);


	paper = new Paper(100, 650, 50, 50);
	dustbin = new Dustbin(500, 550, 50, 100);
	ground = new Ground(350, 680, 800, 20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);

  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
 
}



