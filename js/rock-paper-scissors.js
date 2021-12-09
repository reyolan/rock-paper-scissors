let userScore = 0;
let computerScore = 0;

function playerPlay() {
  let playerSelect = prompt("Rock, Paper, or Scissors?");
  return playerSelect.toLowerCase();
}

// Computer picks between rock paper and scissors in an array
function computerPlay() {
  let compChoices = ["rock", "paper", "scissors"];
  return compChoices[Math.floor(Math.random() * compChoices.length)];
};

// Plays a single round of rock, paper and scissors with score
function oneRound(playerSelection, computerSelection) {

  if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
    alert(`You win! ${playerSelection} beats ${computerSelection}`);
    score("player")

  } else if ((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")) {
    alert(`You lose! ${playerSelection} loses to ${computerSelection}`);
    score("computer")

  } else if (playerSelection === computerSelection) {
    alert(`It's a tie! ${playerSelection} ties with ${computerSelection}`);
    score()

  } else {
    alert("Not a valid option!");
    score()
  }
}

// Track score
function score(winner) {
  if (winner === "player") {
    userScore += 1;
    alert(`Player: ${userScore} Computer: ${computerScore}`)
  } else if (winner === "computer") {
    computerScore += 1;
    alert(`Player: ${userScore} Computer: ${computerScore}`)
  } else {
    alert(`Player: ${userScore} Computer: ${computerScore}`)
  }
}

/*5 rounds of Rock, Paper, and Scissors*/
function game() {

  for (let counter = 0; counter < 5; counter++)
    oneRound(playerPlay(), computerPlay());

  if (userScore > computerScore) {
    return alert("You Win!")
  } else if (userScore < computerScore) {
    return alert("You lose!")
  } else {
    return alert("It's a tie!")
  }
}

game();
