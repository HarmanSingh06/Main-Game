class Dumper{
    constructor(x,y){
        this.image = loadImage("../Assets/Images/backdrop.png")
        this.x = x;
        this.y = y;
    }
    display(){
        imageMode(CENTER)
        image(this.image, this.x,this.y,99*6,99*9)
    }
}