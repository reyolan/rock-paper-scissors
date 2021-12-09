// Computer picks between rock paper and scissors in an array
function computerPlay() {
    let compChoices = ["Rock", "Paper", "Scissors"];
    return compChoices[Math.floor(Math.random() * compChoices.length)];
}

// Plays a single round of rock, paper and scissors

function oneRound(playerSelection, computerSelection) {
    // ask the user and to choose

    let playerSelect = prompt("Rock, Paper, or Scissors?");

    playerSelection = playerSelect.toLowerCase();

    computerSelection = computerPlay().toLowerCase();

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")) {
        alert(`You lose! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === computerSelection) {
        alert(`It's a tie! ${playerSelection} ties with ${computerSelection}`);
    } else {
        return;
    }

    /* Rock beats scissors
    Rock loses to paper
    Rock ties with rock
    
    Scissors beat paper
    Scissors loses to rock
    Scissors ties with scissors
    
    Paper beats rock
    Paper loses to scissors
    Paper ties with paper*/

}


function game() {


    oneRound();
    oneRound();
    oneRound();
    oneRound();
    oneRound();
}