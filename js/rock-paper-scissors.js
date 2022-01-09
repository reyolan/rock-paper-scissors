let userScore = 0;
let computerScore = 0;

function initializeEvents() {
	let choice = document.getElementsByTagName("button");
	let choiceArray = [...choice];

	choiceArray[0].addEventListener("click", () => funcChoice("Rock"));
	choiceArray[1].addEventListener("click", () => funcChoice("Paper"));
	choiceArray[2].addEventListener("click", () => funcChoice("Scissors"));
	choiceArray[3].addEventListener("click", () => playAgain());
}

function initializeDom() {
	// appending new div for result
	let putResult = document.querySelector("body");
	let result = document.createElement("div");
	result.id = "result";

	let referenceNode = document.querySelector("#buttons");
	putResult.insertBefore(result, referenceNode);

	// appending p inside div for result
	let pRoundStatement = document.createElement("p");
	pRoundStatement.textContent = "Choose your weapon";
	pRoundStatement.id = "round-statement";
	result.appendChild(pRoundStatement);

	// create a div for player
	let yourChoiceDiv = document.createElement("div");
	yourChoiceDiv.className = "choice";
	result.insertBefore(yourChoiceDiv, pRoundStatement);

	// create a div for computer
	let compChoiceDiv = document.createElement("div");
	compChoiceDiv.className = "choice";
	result.appendChild(compChoiceDiv);

	// appending p inside yourChoiceDiv for playerScore
	let yourScore = document.createElement("p");
	yourScore.textContent = `You: 0`;
	yourScore.id = "user-score";
	yourChoiceDiv.appendChild(yourScore);

	// appending p inside yourChoiceDiv for choice of player
	let yourChoice = document.createElement("p");
	yourChoice.textContent = " ";
	yourChoice.className = "choose";
	yourChoice.id = "user-choice";
	yourChoiceDiv.insertBefore(yourChoice, yourScore);

	// appending p inside compChoiceDiv for computerScore
	let compScore = document.createElement("p");
	compScore.textContent = `Computer: 0`;
	compScore.id = "comp-score";
	compChoiceDiv.appendChild(compScore);

	// appending p inside compChoiceDiv for choice of computer
	let compChoice = document.createElement("p");
	compChoice.textContent = " ";
	compChoice.className = "choose";
	compChoice.id = "comp-choice";
	compChoiceDiv.insertBefore(compChoice, compScore);
}

function updateScoreInDom(userScore, computerScore) {
	let yourScore = document.querySelector("#user-score");
	let compScore = document.querySelector("#comp-score");

	yourScore.textContent = userScore;
	compScore.textContent = computerScore;
}

function updateChoiceInDom(userChoice, computerChoice) {
	let yourChoice = document.querySelector("#user-choice");
	let compChoice = document.querySelector("#comp-choice");

	yourChoice.textContent = userChoice;
	compChoice.textContent = computerChoice;
}

function updateRoundStatement(roundStatement) {
	let pRoundStatement = document.querySelector("#round-statement");
	pRoundStatement.textContent = roundStatement;
}

// Computer picks between RPS
function playComputer() {
	let compChoices = ["Rock", "Paper", "Scissors"];
	return compChoices[Math.floor(Math.random() * compChoices.length)];
}

function funcChoice(choice) {
	playRound(choice, playComputer());
}

function playAgain() {
	userScore = 0;
	computerScore = 0;
	document.querySelector("#round-statement").textContent = "Choose your weapon";
	document.querySelector("#user-choice").textContent = " ";
	document.querySelector("#comp-choice").textContent = " ";
	document.querySelector("#user-score").textContent = `You: ${userScore}`;
	document.querySelector(
		"#comp-score"
	).textContent = `Computer: ${computerScore}`;
}

// Plays a single round of rock, paper and scissors with score
function playRound(playerSelection, computerSelection) {
	updateChoiceInDom(playerSelection, computerSelection);

	if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Scissors" && computerSelection === "Paper") ||
		(playerSelection === "Paper" && computerSelection === "Rock")
	) {
		updateRoundStatement(
			`You win! ${playerSelection} beats ${computerSelection}`
		);
		trackScore("player");
	} else if (
		(playerSelection === "Rock" && computerSelection === "Paper") ||
		(playerSelection === "Scissors" && computerSelection === "Rock") ||
		(playerSelection === "Paper" && computerSelection === "Scissors")
	) {
		updateRoundStatement(
			`You lose! ${playerSelection} loses to ${computerSelection}`
		);
		return trackScore("computer");
	} else if (playerSelection === computerSelection) {
		updateRoundStatement(
			`It's a tie! ${playerSelection} ties with ${computerSelection}`
		);
		trackScore();
	} else {
		roundStatement = "Not a valid option! Computer gets the score!";
		trackScore("computer");
	}
}

// Track score
function trackScore(winner) {
	if (winner === "player") {
		userScore += 1;
	} else if (winner === "computer") {
		computerScore += 1;
	}
	updateScoreInDom(`You: ${userScore}`, `Computer: ${computerScore}`);

	if (userScore === 5 || computerScore === 5) {
		declareWin();
	}
}

// Declare win
function declareWin() {
	if (userScore === 5) {
		updateRoundStatement("You Win!");
	} else {
		updateRoundStatement("You lose!");
	}
	disableButton();
}

function disableButton() {
	let choice = document.getElementsByTagName("button");
	let choiceArray = [...choice];
	choiceArray[0].disabled = true;
	choiceArray[1].disabled = true;
	choiceArray[2].disabled = true;
}

initializeEvents();
initializeDom();
