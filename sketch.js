const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world,engine,bob1,bob2,bob3,bob4,bob5,bob6,bob7;

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  

  top1 = new Top(480,80,400,40);
  
	bob1 =  new Bob (375,400,50); 
  bob2 =  new Bob (425,400,50);
  bob3 =  new Bob (475,400,50); 
  bob4 =  new Bob (525,400,50);
  bob5 =  new Bob (575,400,50);
  bob6 =  new Bob (625,400,50); 
	bob7 =  new Bob (675,400,50);
	
  
  rope1 = new String (bob1.body,{x:320,y:100});
  rope2 = new  String  (bob2.body,{x:370,y:100});
  rope3 = new String (bob3.body,{x:420,y:100});
  rope4 = new  String  (bob4.body,{x:470,y:100});
  rope5 = new  String  (bob5.body,{x:520,y:100});
  rope6 = new String (bob6.body,{x:570,y:100});
  rope7 = new  String  (bob7.body,{x:620,y:100});
  
	
  
}


function draw() {
    background(0);
  Engine.update(engine);
  rectMode(CENTER);
  background(100);
  Engine.update(engine);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  
  top1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  
  
  


}
function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:0.04,y:0.04});
	}
}



