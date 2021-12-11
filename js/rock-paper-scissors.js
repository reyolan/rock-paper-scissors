let userScore = 0;
let computerScore = 0;

// Player picks between RPS
function playPlayer() {
  let playerSelect = prompt("Rock, Paper, or Scissors?");
  return playerSelect.toLowerCase();
}

// Computer picks between RPS
function playComputer() {
  let compChoices = ["rock", "paper", "scissors"];
  return compChoices[Math.floor(Math.random() * compChoices.length)];
};

// Plays a single round of rock, paper and scissors with score
function playRound(playerSelection, computerSelection) {

  if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
    alert(`You win! ${playerSelection} beats ${computerSelection}`);
    return trackScore("player")

  } else if ((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")) {
    alert(`You lose! ${playerSelection} loses to ${computerSelection}`);
    return trackScore("computer")

  } else if (playerSelection === computerSelection) {
    alert(`It's a tie! ${playerSelection} ties with ${computerSelection}`);
    return trackScore()

  } else {
    alert("Not a valid option! Computer gets the score!");
    return trackScore("computer")
  }
}

// Track score
function trackScore(winner) {
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

// Declare win
function declareWin() {
  if (userScore > computerScore) {
    alert("You Win!")
  } else if (userScore < computerScore) {
    alert("You lose!")
  } else {
    alert("It's a tie!")
  }
}

// Rounds of Rock, Paper, and Scissors
function game() {

  let rounds = parseInt(prompt("How many rounds?"))

  if (rounds) {
    for (rounds; rounds > 0; rounds--) {
      playRound(playPlayer(), playComputer());
    }
    declareWin();
  } else {
    alert("Invalid input!")
  }
}

game();
