function playerPlay() {
    let playerSelect = prompt("Rock, Paper, or Scissors?");
    return playerSelect.toLowerCase();
}

// Computer picks between rock paper and scissors in an array
function computerPlay() {
    let compChoices = ["rock", "paper", "scissors"];
    return compChoices[Math.floor(Math.random() * compChoices.length)];
};

// Plays a single round of rock, paper and scissors
function oneRound(playerSelection, computerSelection) {

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        return "1";


    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")) {
        alert(`You lose! ${playerSelection} loses to ${computerSelection}`);
        return "0";


    } else if (playerSelection === computerSelection) {
        return alert(`It's a tie! ${playerSelection} ties with ${computerSelection}`);
    } else {
        alert("Not a valid option!")
    }
}


function game() {

    /*5 games of Rock, Paper, and Scissors*/
    let userScore = 0;
    let computerScore = 0;

    for (let counter = 0; counter < 5; counter++)
        oneRound(playerPlay(), computerPlay());

}

game();