//need a function that returns one of 3 randoms strings, rock , paper , scissor
//should be done using a the math method ,

function computerPlay(x) {
  let choice = ['scissor', 'rock', 'paper'];
  return choice[Math.floor(Math.random() * choice.length)];
}
//In this function want the user to select his choice from the html options
//want his choice to be the results of this function
//bring back the value in the input I

function userPlay(option) {
  let playerSelection = option;
  let computerSelection = computerPlay();
  playRound(computerSelection, playerSelection);
}
// console.log(userPlay('Rock-Paper-Scissors-Lizard-Spock'));
//make a functiomn that plays a single roound
//needs the human action, need the computer action,
//needs if statement to have a winner
let computerCount = 0;
let playerCount = 0;
let result = document.getElementById('result');

function playRound(computer, user) {
  if (
    (computer == 'scissor' && user == 'rock') ||
    (computer == 'rock' && user == 'paper') ||
    (computer == 'paper' && user == 'scissors')
  ) {
    playerCount++;
    result.innerHTML = `Player won !! ${user} beats ${computer} Player score is  ${playerCount} and Computer score is ${computerCount}`;
    console.log(result);
  } else {
    computerCount++;
    result.innerHTML = `Computer Won!! ${computer} beats ${user} Player score is  ${playerCount} and Computer score is ${computerCount}`;
  }

  if (playerCount >= 5) {
    result.innerHTML = 'Player won the game, reset the Game!!';
  } else if (computerCount >= 5) {
    result.innerHTML = 'Computer won the game ';
  }
}

function clearResult() {
  result.innerHTML = '';
  computerCount = 0;
  playerCount = 0;
}

//i need to keep score of the game
// counting the amount of wins and lost from user , computer
// once it get to 5 retrun win done game
// need a variable that holds the number of wins
// need one for each type computercount and usercount
// need a if statment to present what happens when the counts get to 5
// need to reset the count once it reaches 5
