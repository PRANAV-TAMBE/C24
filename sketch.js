const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var b1,b2,b3,b4;
var l1,l2,l3,l4;
var p1,p2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    b1 = new box(700,320,70,70);
    b2 = new box(920,320,70,70);
    b3 = new box(700,240,70,70);
    b4 = new box(920,240,70,70);
    p1 = new Pig(810,350);
    p2 = new Pig(810,220);   
    l1 = new Log(810,260,300,PI/2);
    l2 = new Log(810,180,300,PI/2);
    l3 = new Log(760,120,150,PI/7);
    l4 = new Log(870,120,150,PI/-7);
    bird1 = new bird(100,100)
    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);


    ground.display();
b1.display();
b2.display();
b3.display();
b4.display();
l1.display();
l2.display();
l3.display();
l4.display();
p1.display();
p2.display();
bird1.display();


}