const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var circle1,circle2,circle3,circle4,circle5,circle6,circle7,circle8;
var cons1,cons2,cons3,cons4,cons5,cons6,cons7,cons8;

function setup() {
  createCanvas(800,400);

  engine=Engine.create(); 
  world=engine.world;

  circle1 = new Circle(400,100,20);
  circle2 = new Circle(450,100,20);
  circle3 = new Circle(500,100,20);
  circle4 = new Circle(550,100,20);
  circle5 = new Circle(600,100,20);
  circle6 = new Circle(650,100,20);
  circle7 = new Circle(700,100,20);
  circle8 = new Circle(750,100,20);

  cons1 = new SlingShot(circle1.body,{x:400,y:1});
  cons2 = new SlingShot(circle2.body,{x:450,y:1});
  cons3 = new SlingShot(circle3.body,{x:500,y:1});
  cons4 = new SlingShot(circle4.body,{x:550,y:1});
  cons5 = new SlingShot(circle5.body,{x:600,y:1});
  cons6 = new SlingShot(circle6.body,{x:650,y:1});
  cons7 = new SlingShot(circle7.body,{x:700,y:1});
  cons8 = new SlingShot(circle8.body,{x:750,y:1});

}

function draw() {
  background(0);  

  Engine.update(engine);

  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();

  drawSprites();
}