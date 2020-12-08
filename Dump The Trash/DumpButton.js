class DumpButton{
    constructor(x,y){
        this.image = loadImage("../Assets/Images/buttonDump.png")
        this.x = x;
        this.y = y;
    }
    display(){
        imageMode(CENTER)
        image(this.image, this.x,this.y,230,795)
    }
    hide(){
        
    }
}