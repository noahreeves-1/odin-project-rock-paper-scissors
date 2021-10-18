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

function playRockPaperScissors(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "rock") {
        return "You tied! Rock and rock cancel each other out.";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "You tied! Paper and paper cancel each other out.";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "You tied! Scissors and scissors cancel each other out.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Rock beats paper.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper.";
    } else return "Something went wrong.";
}

function game(i) {
    i = 1;
    while (i < 6) {
        console.log(playRockPaperScissors());
    };
    

}

let playerSelection = "sCissoRs";
let computerSelection = computerPlay();

console.log(computerSelection);
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

console.log(playRockPaperScissors(playerSelection, computerSelection));
    
game();