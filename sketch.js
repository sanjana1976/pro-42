const Engine= Matter.Engine
const World= Matter.World 
const Bodies= Matter.Bodies
var hr 
var sec
var min
var hrAng
var secAng
var minAng
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  hr= hour();
  sec= second();
  min= minute();
  engine= Engine.create();
  world= engine.world;
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  angleMode(DEGREES);
  hrAng= map(hr,0,12,0,360);
  secAng= map(sec,0,60,0,360)

  push();
  rotate(hrAng)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,300,0,200)
  pop();
  push();
  rotate(secAng);
  stroke("blue")
  strokeWeight(7)
  line(0,300,0,200)
  
pop();

  drawSprites();
  //hr
}