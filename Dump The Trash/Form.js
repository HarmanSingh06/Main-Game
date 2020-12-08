class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Dump The Trash");
      this.title.position(200, 400);
  
      this.input.position(200 , 200);
      this.button.position(200, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        gameState = 'PLAY';
        this.greeting.html("Hello")
        this.greeting.position(200, 400);
      });
    }
  }
  