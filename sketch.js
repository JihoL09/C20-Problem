//namespacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball, ground;
var rock;
function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  ball=Bodies.circle(100, 20,  10, ball_options);     //step 3 create the Bodies (created inside  computer memory)
  World.add(world, ball);               //Step 4 Adding the Body inside the world.

  var ground_options={
    isStatic: true
  }
  ground = Bodies.rectangle(0,370,400,4, ground_options);
  World.add(world,ground);

  var rock_options={
    isStatic: true
  }
rock = Bodies.circle(300,20,10, rock_options);
  World.add(world,rock);
}

function draw() 
{
  background(51);
  Engine.update(engine);
 ellipse(ball.position.x,ball.position.y,10);
  ellipse(rock.position.x,rock.position.y,10);
  rect(ground.position.x, ground.position.y,400,4);



 
}

