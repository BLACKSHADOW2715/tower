class Polygon {
    
    constructor(x, y,radius) {
   this.image=loadImage("polygon.png")   
  this.polygon3=Bodies.circle(50,200,20) 
  World.add(world,this.polygon3) 
  
  }
  display(){
    var pos=this.polygon3.position
    var angle = this.polygon3.angle;
    push();
    translate(pos.x,pos.y );
    rotate(angle);
    
    imageMode(CENTER);
        image(this.image, 0, 0, 250);
    pop();
  
  }
  }