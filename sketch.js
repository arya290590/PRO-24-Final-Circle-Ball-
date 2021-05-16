
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	
	paper_ball = new paper(50,50,50)

	ground = new Ground(400,680,800,20)
	
    Log1 = new LOG(690,655,200,30)
	Log2 = new LOG(600,582.5,30,175)
	Log3 = new LOG(780,582.5,30,175)
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
  Engine.update(engine);
  strokeWeight(0)
    


  var reset = createButton('reset')
  reset.position(10,10)


  reset.mousePressed(()=>{
	
	location.reload();


	}
	
	)
 
  paper_ball.display();

  ground.display();

  Log1.display();
  Log2.display();
  Log3.display();


  createEdgeSprites();
 
  
  drawSprites();
 
}


function keyPressed(){
    if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:120,y:-120})

	}

	if (keyCode === DOWN_ARROW) {

		Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:-80,y:80})
	
		}
	




}



