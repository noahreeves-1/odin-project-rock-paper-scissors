// this function makes the computer select a choice for rock, paper, or scissor
function computerPlay(guess) {
    
    guess = Math.floor(Math.random() * 3 + 1);
    
    if (guess === 1) {
        return 'rock';
    } else if (guess === 2) {
        return 'paper';
    } else if (guess === 3) {
        return 'scissors';
    } else {
        return 'No guess';
    }
}

let userScore = 0;
let computerScore = 0;

// this function gives me the outcome of the game based on my selection and the computer selection
function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "rock") {
        return "You tied! Rock and rock cancel each other out.";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "You tied! Paper and paper cancel each other out.";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "You tied! Scissors and scissors cancel each other out.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose! Paper beats rock.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        userScore++;
        return "You win! Rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        userScore++;
        return "You win! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lose! Scissors beat paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        userScore++;
        return "You win! Scissors beats paper.";
    } else return "Something went wrong.";
}

// the game function runs the game 5 times

// function game() {
//     computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//     computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//     computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//     computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//     computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
// }

let computerSelection = '';
let playerSelection = '';

/*  Add an event listener to the buttons that calls the playRound function with
the correct playerSelection every time a button is clicked. */

let userChoice = document.querySelectorAll('.rps-choice');
userChoice.forEach(choice => {
    choice.addEventListener('click', () => {
        playerSelection = choice.textContent;
        buttonClick();
    })
});

let myChoice = document.querySelector('.my-choice');
let computerChoice = document.querySelector('.computer-choice');
let winner = document.querySelector('.winner');
let uScore = document.querySelector('.user-score');
let cScore = document.querySelector('.computer-score');

function buttonClick() {
    playerSelection = playerSelection.toLowerCase();
    myChoice.textContent = "I choose: " + playerSelection;
    computerSelection = computerPlay();
    computerChoice.textContent = "Computer chooses: " + computerSelection;
    winner.textContent = playRound(playerSelection, computerSelection);
    uScore.textContent = 'User Score: ' + userScore
    cScore.textContent = 'Computer Score: ' + computerScore;

    if (userScore === 5) {
        return alert('User wins!');
    } else if (computerScore === 5) {
        return alert('Computer wins!');
    }
};

/* let playerSelection = prompt(); */

// console.log(computerSelection);
// playerSelection = playerSelection.toLowerCase();
// console.log(playerSelection);

// console.log(playRound(playerSelection, computerSelection));

// // game();         