function togglegame(state){
    const GameElement = document.getElementById("Game");
    if(state =='badmintoon'){
          GameElement.src = './../img/amb.jpeg';
    }
    else if(state =='chess-board'){
          GameElement.src = './../img/amb-1.jpeg';
    }
    else if(state == 'cricket'){
          GameElement.src ='./../img/amb-2.jpeg';
    }
    else if(state == 'soccer-ball'){
     GameElement.src = './../img/amb-3.webp';
    }
   
 }