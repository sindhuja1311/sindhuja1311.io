const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');

function computerPlay() {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		alert("It's a tie try again!");
        location.replace("panda5.html");
	} else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
		playerSelection === 'paper' && computerSelection === 'rock' ||
		playerSelection === 'scissors' && computerSelection === 'paper') {
		alert('You win!');
        location.replace('end.html');
	} else {
		alert('You lose! restart game');
        location.replace('panda1.html');
	}
}

function game() {
	rock.addEventListener('click', () => {
		const playerSelection = 'rock';
		const computerSelection = computerPlay();
		playRound(playerSelection, computerSelection);
	});
	paper.addEventListener('click', () => {
		const playerSelection = 'paper';
		const computerSelection = computerPlay();
		playRound(playerSelection, computerSelection);
	});
	scissors.addEventListener('click', () => {
		const playerSelection = 'scissors';
		const computerSelection = computerPlay();
		playRound(playerSelection, computerSelection);
	});
    
}

game();
