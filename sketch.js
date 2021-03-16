const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon_img
var engine, world
var ground

function preload(){

    polygon_img=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)

//blocks 1
    //level 1
    ground = new Ground(600,590,900,10)
  stand1 = new Stand(390,290,250,10);
  stand2 = new Stand(890,430,250,10);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);

    //level 2
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    //level 3
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);

    //level 4
    box16 = new Box(390,155,30,40);

    //blocks 1
    //level 1
    ox1 = new Box(800,400,30,40);
    ox2 = new Box(830,400,30,40);
    ox3 = new Box(860,400,30,40);
    ox4 = new Box(890,400,30,40);
    ox5 = new Box(920,400,30,40);
    ox6 = new Box(950,400,30,40);
    ox7 = new Box(980,400,30,40);

    //level 2
    ox8 = new Box(830,360,30,40);
    ox9 = new Box(860,360,30,40);
    ox10 = new Box(890,360,30,40);
    ox11 = new Box(920,360,30,40);
    ox12 = new Box(950,360,30,40);
    //level 3
    ox13 = new Box(860,320,30,40);
    ox14 = new Box(890,320,30,40);
    ox15 = new Box(920,320,30,40);

    //level 4
    ox16 = new Box(890,280,30,40);

    //the object
ball=Bodies.circle(50,200,20)
World.add(world,ball)

slingShot=new SlingShot(this.ball,{x:150,y:200})


  

}
function draw(){
    background(56,44,44);

    fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  
  ground.display();
  stand1.display();
  stand2.display();
    fill("skyblue");
      box1.display();
      box2.display();
      box3.display();
      box4.display();
      box5.display();
      box6.display();
      box7.display();
      fill("pink");
      box8.display();
      box9.display();
      box10.display();
      box11.display();
      box12.display();
      fill("turquoise");
      box13.display();
      box14.display();
      box15.display();
    
      fill("grey");
      box16.display();
      fill("skyblue");
      ox1.display();
      ox2.display();
      ox3.display();
      ox4.display();
      ox5.display();
      ox6.display();
      ox7.display();
      fill("pink");
      ox8.display();
      ox9.display();
      ox10.display();
      ox11.display();
      ox12.display();
      fill("turquoise");
      ox13.display();
      ox14.display();
      ox15.display();
          fill("grey");
      ox16.display();
   
      

      imageMode(CENTER)
      image(polygon_img,ball.position.x,ball.position.y,40,40)
      
      slingShot.display(); 


}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX, y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

