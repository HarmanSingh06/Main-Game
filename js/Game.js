class Game {
  constructor(){
   
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    //Astronaut 1 
    astronaut1 = createSprite(100,200);
    astronaut1.scale = 0.02;
    astronaut1.addAnimation("Astrounat",astrounat1_Anim);

    astronaut2 = createSprite(300,200);
    astronaut2.addAnimation("Astrounat",astrounat1_Anim);
    astronaut2.scale = 0.02;
    
    astronaut3 = createSprite(500,200);
    astronaut3.addAnimation("Astrounat",astrounat1_Anim);
    astronaut3.scale = 0.02;
    
    astronaut4 = createSprite(700,200);
    astronaut4.addAnimation("Astrounat",astrounat1_Anim);
    astronaut4.scale = 0.02;
    
    astronauts = [astronaut1, astronaut2, astronaut3, astronaut4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(100);
      imageMode(CENTER)
      image(track, displayWidth/2,displayHeight/2,displayWidth,displayHeight);
      
      //index
      var index = 0;

      //x and y position of the cars
      var x;
      var y;

      for(var plr in allPlayers){

        index = index + 1 ;

        //use data form the database to display the astrounat in X direction
        x = displayWidth - allPlayers[plr].distanceX;
        astronauts[index-1].x = x;
        
        //use data form the database to display the astrounat in y direction
        y = displayHeight - allPlayers[plr].distanceY;
        
        astronauts[index-1].y = y;

        if (index === player.index){
          camera.position.x = astronauts[index-1].x;
          camera.position.y = astronauts[index-1].y;
        }

        if(astronauts[index-1].x < 729 && astronauts[index-1].x > 560 && astronauts[index-1].y > 447 && astronauts[index-1].y < 620){
          form.displayNavigate();
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distanceY +=10
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distanceX +=10
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distanceX -=10
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distanceY -=10
      player.update();
    }


    if(player.distance > 3860){
      gameState = 2;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
