const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var engine,world;

var dump;

var LOBBY = 0;
var PLAY = 1;
var END = 2;

var TOUCHES = [];
var gameState = 'LOBBY';
function preload(){
    
}

function setup(){
    createCanvas(800,795)

    engine = Engine.create();
    world = engine.world;

    //-------------------------------Just Images
    dumper = new Dumper(300,350)
    dumpButton = new DumpButton(700,400);
    //-------------------------------Just Images

    //Actual Functioning-------------I am Not Adding Boxes In the Picture Classes Because i needed more flexibility while positioning them
    box1 = new Box(600,200,20,1200,"blue")
    box2 = new Box(0.03,200,5,1200,"blue"),
    box3 = new Box(500,815,1000,40,"grey")

    //------------------------------------Trash 
    trash1 = new Trash(200,200,60)
    trash2 = new Trash(300,300,60)
    trash3 = new Trash(250,100,60)
    trash4 = new Trash(250,100,60)
    trash5 = new Trash(250,100,60)
    trash6 = new Trash(250,100,60)
    trash7 = new Trash(250,100,60)
    trash8 = new Trash(250,100,60)
    trash9 = new Trash(250,100,60)
    trash10 = new Trash(250,100,60)
    trash11 = new Trash(250,100,60)
    trash12 = new Trash(250,100,60)
    trash13 = new Trash(250,100,60)
    trash14 = new Trash(250,100,60)


    
    //-------------------------------------Trash

    //Creating Button
    dump = createImg('Assets/Images/button_dump-trash.png');
    dump.position(620,300);

    //Creating Form
    form = new Form();
    }


function draw(){
background(0)

console.log(gameState)

if(gameState === "LOBBY"){
    form.display();
}

if(gameState === "PLAY"){
Engine.update(engine);
dumper.display();
dumpButton.display();
form.hide();
dump.mousePressed(dumpTrash);

//-----------------------Trash
trash1.display();
trash2.display();
trash3.display();
trash4.display();
trash5.display();
trash6.display();
trash7.display();
trash8.display();
trash9.display();
trash10.display();
trash11.display();
trash12.display();
trash13.display();
trash14.display();
//--------------------Trash 
}
//Setting GameState To END 
    if(trash1.body.position.y>8000){
    gameState = 'END'
    }
    

if(gameState === "END" ){
    push()
    fill("white");
    textSize(50)
    stroke("black");
    strokeWeight(3)
    text("Task Completed", 130,400);
    pop();
    console.log("gameOver")
}    

}

function dumpTrash(){
    box3.remove();
}

function buttonHide(){
    dump.hide()
}
