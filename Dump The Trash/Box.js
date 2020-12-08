class Box{
    constructor(x,y,width,height,color){
        var options={
            friction : 1,
            density : 0.2,
            isStatic : true
        }
        this.visibility = 255;
        this.width = width;
        this.height = height;
        this.color = color
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push()

        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop();
    }

    remove(){
        World.remove(world,this.body)
    }
}