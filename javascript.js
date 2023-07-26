
function getComputerChoice(){
    let x = Math.floor(Math.random() * (4 - 1) + 1);
    if (x == 1){
        return "ROCK";
    } else if (x == 2){
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

 
 function playRound( playerSelection, computerSelection){
    let player = playerSelection.toUpperCase();
    
    
    if (player == "ROCK"){
        if (computerSelection == "PAPER"){
            return "You lose!"
        } else if (computerSelection == "SCISSORS"){
            return "You win!"
        } else {
            return "It's a tie!"
        }
    } else if (player == "PAPER"){
        if (computerSelection == "ROCK"){
            return "You win!"
        } else if (computerSelection == "SCISSORS"){
            return "You lose!"
        } else {
            return "It's a tie!"
        }
    } else {
        if (computerSelection == "SCISSORS"){
            return "It's a tie!"
        } else if (computerSelection == "ROCK"){
            return "You lose!"
        } else {
            return "You win!"
        }
    }

 }
 let playerSelection;
 let computerSelection;
 


function game(){
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose your weapon. Rock , paper , scissors");
        computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection , computerSelection);
        if (roundResult == "You win!" ){
            playerScore = playerScore + 1
        } else if (roundResult == "You lose!"){
            computerScore = computerScore + 1
        }
    

      }

    if ( playerScore > computerScore){
        return ` You win with ${playerScore} out of 5`
    } else if (playerScore < computerScore){
        return `You lose with ${computerScore} out of 5`
    } else {
        return " It's a tie, try again to win!"
    }
}
console.log(game());
