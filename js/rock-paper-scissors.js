let userScore = 0;
let computerScore = 0;

let choice = document.getElementsByTagName("button");
let choiceArray = [...choice];

choiceArray[0].addEventListener("click", () => funcChoice("Rock"));
choiceArray[1].addEventListener("click", () => funcChoice("Paper"));
choiceArray[2].addEventListener("click", () => funcChoice("Scissors"));
choiceArray[3].addEventListener("click", () => playAgain());

// appending new div for result
let putResult = document.querySelector("body");
let result = document.createElement("div");
result.id = "result";

let referenceNode = document.querySelector("#buttons");
putResult.insertBefore(result, referenceNode);

// appending p inside div for result
let p = document.createElement("p");
p.textContent = "Choose your weapon";
p.id = "roundStatement";
result.appendChild(p);

// create a div for player
let yourChoiceDiv = document.createElement("div");
yourChoiceDiv.className = "choice";
result.insertBefore(yourChoiceDiv, p);

// create a div for computer
let compChoiceDiv = document.createElement("div");
compChoiceDiv.className = "choice";
result.appendChild(compChoiceDiv);

// appending p inside yourChoiceDiv for playerScore
let yourScore = document.createElement("p");
yourScore.textContent = `You: ${userScore}`;
yourChoiceDiv.appendChild(yourScore);

// appending p inside yourChoiceDiv for choice of player
let yourChoice = document.createElement("p");
yourChoice.textContent = " ";
yourChoice.className = "choose";
yourChoiceDiv.insertBefore(yourChoice, yourScore);

// appending p inside compChoiceDiv for computerScore
let compScore = document.createElement("p");
compScore.textContent = `Computer: ${computerScore}`;
compChoiceDiv.appendChild(compScore);

// appending p inside compChoiceDiv for choice of computer
let compChoice = document.createElement("p");
compChoice.textContent = " ";
compChoice.className = "choose";
compChoiceDiv.insertBefore(compChoice, compScore);

function funcChoice(choice) {
	playRound(choice, playComputer());
}

function playAgain() {
	userScore = 0;
	computerScore = 0;
	p.textContent = "Choose your weapon";
	yourChoice.textContent = " ";
	compChoice.textContent = " ";
	yourScore.textContent = `You: ${userScore}`;
	compScore.textContent = `Computer: ${computerScore}`;
}

// Computer picks between RPS
function playComputer() {
	let compChoices = ["Rock", "Paper", "Scissors"];
	return compChoices[Math.floor(Math.random() * compChoices.length)];
}

// Plays a single round of rock, paper and scissors with score
function playRound(playerSelection, computerSelection) {
	yourChoice.textContent = `${playerSelection}`;
	compChoice.textContent = `${computerSelection}`;
	if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Scissors" && computerSelection === "Paper") ||
		(playerSelection === "Paper" && computerSelection === "Rock")
	) {
		p.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
		return trackScore("player");
	} else if (
		(playerSelection === "Rock" && computerSelection === "Paper") ||
		(playerSelection === "Scissors" && computerSelection === "Rock") ||
		(playerSelection === "Paper" && computerSelection === "Scissors")
	) {
		p.textContent = `You lose! ${playerSelection} loses to ${computerSelection}`;
		return trackScore("computer");
	} else if (playerSelection === computerSelection) {
		p.textContent = `It's a tie! ${playerSelection} ties with ${computerSelection}`;
		return trackScore();
	} else {
		p.textContent = "Not a valid option! Computer gets the score!";
		return trackScore("computer");
	}
}

// Track score
function trackScore(winner) {
	if (winner === "player") {
		userScore += 1;
		yourScore.textContent = `You: ${userScore}`;
		compScore.textContent = `Computer: ${computerScore}`;
	} else if (winner === "computer") {
		computerScore += 1;
		yourScore.textContent = `You: ${userScore}`;
		compScore.textContent = `Computer: ${computerScore}`;
	} else {
		yourScore.textContent = `You: ${userScore}`;
		compScore.textContent = `Computer: ${computerScore}`;
	}

	if (userScore === 5 || computerScore === 5) {
		declareWin();
	}
}

// Declare win
function declareWin() {
	if (userScore === 5) {
		p.textContent = "You Win!";
	} else {
		p.textContent = "You lose!";
	}
	disableButton();
}

function disableButton() {
	choiceArray[0].disabled = true;
	choiceArray[1].disabled = true;
	choiceArray[2].disabled = true;
}
