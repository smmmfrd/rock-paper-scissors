const choices = ["Scissors", "Paper", "Rock"];

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
        message = "It's a Draw! You both picked the same choice!";
    } else {
        message = `Player Selection: ${playerSelection}\nComputer Selection: ${computerSelection}`;

        //Player win conditions
        if(playerSelection == choices[0] && computerSelection == choices[1]){
            //Scissors beats Paper
            message = "You Win! Scissors beats Paper!";
        } else if(playerSelection == choices[1] && computerSelection == choices[2]){
            //Paper beats Rock
            message = "You Win! Paper beats Rock!";
        } else if(playerSelection == choices[2] && computerSelection == choices[0]){
            //Rock beats Scissors
            message = "You Win! Rock beats Scissors!";
        } else {
            // Computer won
            message = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        }
    }

    console.log(message);
}

function play(){
    for (let i = 0; i < 5; i++) {
        const p = prompt("What is your choice?", "ROCK");
        playRound(p, computerPlay());
    }
}