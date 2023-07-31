let win = 0;
let lose = 0;
let tie = 0;
function playGame(playerMove){
  const computerMove = pickComputermove();
  let result = '';

  if(playerMove === 'scissors'){

    if(computerMove === 'rock'){
    result = 'You lose!';
    lose += 1;
  }else if(computerMove === 'paper'){
    result = 'You win';
    win += 1;
  }else if(computerMove === 'scissors'){
    result = 'Tie!';
    tie += 1;
  }
  } else if(playerMove === 'paper'){

  if(computerMove === 'rock'){
    result = 'You win!';
    win += 1;
  }else if(computerMove === 'paper'){
    result = 'Tie';
    tie += 1;
  }else if(computerMove === 'scissors'){
    result = 'You lose!';
    lose += 1;
  }
} else if(playerMove === 'rock'){

  if(computerMove === 'rock'){
    result = 'Tie!';
    tie += 1;
  }else if(computerMove === 'paper'){
    result = 'You lose!';
    lose += 1;
  }else if(computerMove === 'scissors'){
    result = 'You win!';
    win += 1;
  }

}
var winElement = document.getElementById('winCount');
  var tieElement = document.getElementById('tieCount');
  var loseElement = document.getElementById('loseCount');

  winElement.textContent = win;
  tieElement.textContent = tie;
  loseElement.textContent = lose;
}

function pickComputermove(){

  const randomNumber = Math.random();
  let computerMove = '';
  let result = '';
  if(randomNumber >= 0 && randomNumber < 1/3){
     computerMove = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
     computerMove = 'paper';
  } else if(randomNumber < 1){
     computerMove = 'scissors';
  }

  return computerMove;
}