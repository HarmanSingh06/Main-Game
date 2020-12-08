class Trash {
    constructor(x, y,radius) {
      var options = { 
        density: 2.50,
        friction : 0.4 
        };
  
      this.body = Bodies.circle(x, y, radius,options);
      this.radius = radius;
      World.add(world, this.body);
      var rand = Math.round(random(1,2))
      switch(rand){
        case 1: this.image = loadImage("..//Assets/Images/trash1.png")
        break;
        case 2: this.image = loadImage("..//Assets/Images/trash2.png")
        break; 
      }
    }
  
    display() {
      var angle = this.body.angle;

      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      image(this.image,0, 0, this.radius*2,this.radius*2);
      pop();
    
    }
  }