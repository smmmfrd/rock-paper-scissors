const choices = ["Scissors", "Paper", "Rock"];

var playerWins = 0, computerWins = 0;

const display = document.querySelector('#display');
display.textContent = "Begin!";

const score = document.querySelector('#score');
score.textContent = `Player: ${playerWins} Computer: ${computerWins}`;


const rockButton = document.querySelector('#rock-btn');
rockButton.addEventListener('click', () => {
    playRound("rock", computerPlay());
});
const paperButton = document.querySelector('#paper-btn');
paperButton.addEventListener('click', () => {
    playRound("paper", computerPlay());
});
const scissorsButton = document.querySelector('#scissors-btn');
scissorsButton.addEventListener('click', () => {
    playRound("scissors", computerPlay());
});


function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(pInput){
    let m = '';
    m += pInput[0].toUpperCase();
    for (let i = 1; i < pInput.length; i++) {
        m += pInput[i].toLowerCase();
    }
    return m;
}

function playRound(playerSelection, computerSelection){
    playerSelection = validateInput(playerSelection);
    let message = '';

    if(playerSelection == computerSelection){
        message = `It's a Draw! ${playerSelection} ties with ${computerSelection}!`;
    } else {
        //Player win conditions
        if(playerSelection == choices[0] && computerSelection == choices[1]){
            //Scissors beats Paper
            message = "You Win! Scissors beats Paper!";
            playerWins++;
        } else if(playerSelection == choices[1] && computerSelection == choices[2]){
            //Paper beats Rock
            message = "You Win! Paper beats Rock!";
            playerWins++;
        } else if(playerSelection == choices[2] && computerSelection == choices[0]){
            //Rock beats Scissors
            message = "You Win! Rock beats Scissors!";
            playerWins++;
        } else {
            // Computer won
            message = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            computerWins++;
        }
    }

    display.textContent = message;

    score.textContent = `Player: ${playerWins} Computer: ${computerWins}`;

    if(playerWins == 5 || computerWins == 5){
        gameOver();
    }
}

function resetGame(){
    playerWins = 0;
    computerWins = 0;
    buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = false;
    });

    display.textContent = "Begin!";
    
    score.textContent = `Player: ${playerWins} Computer: ${computerWins}`;

    document.querySelector('#gameOver').innerHTML = '';
}

function gameOver(){
    buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if(button.id != "restart") button.disabled = true;
    });

    let winningMessage = '';
    if(playerWins > computerWins){
        winningMessage = "You won! Congratulations!";
    } else {
        winningMessage = "The computer won! Better luck next time!";
    }

    let gameOverDisplay = document.querySelector('#gameOver');
    gameOverDisplay.textContent = winningMessage;

    let resetButton = document.createElement('button');
    resetButton.id = "restart";
    resetButton.textContent = "Restart";
    resetButton.addEventListener('click', () => {
        resetGame();
    });

    gameOverDisplay.appendChild(resetButton);
}