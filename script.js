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

// this function gives me the outcome of the game based on my selection and the computer selection
function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "rock") {
        return "You tied! Rock and rock cancel each other out.";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "You tied! Paper and paper cancel each other out.";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "You tied! Scissors and scissors cancel each other out.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beat paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
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

function buttonClick() {
    playerSelection = playerSelection.toLowerCase();
    console.log("Me: " + playerSelection);
    computerSelection = computerPlay();
    console.log("Computer: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

/* let playerSelection = prompt(); */

// console.log(computerSelection);
// playerSelection = playerSelection.toLowerCase();
// console.log(playerSelection);

// console.log(playRound(playerSelection, computerSelection));

// // game();         