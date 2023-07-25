
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
    console.log(player)
    if (player == "ROCK"){
        if (computerSelection == "PAPER"){
            return "You lose! Paper beats rock"
        } else if (computerSelection == "SCISSORS"){
            return "You win rock beats scissors!"
        } else {
            return "It's a tie!"
        }
    } else if (player == PAPER){
        if (computerSelection == "ROCK"){
            return "You win! Paper beats rock"
        } else if (computerSelection == "SCISSORS"){
            return "You lose scissors beats paper!"
        } else {
            return "It's a tie!"
        }
    } else {
        if (computerSelection == "SCISSORS"){
            return "It's a tie!"
        } else if (computerSelection == "ROCK"){
            return "You lose rock beats scissors!"
        } else {
            return "You win! Scissors beats papper"
        }
    }

 }
 const playerSelection = "rock";
 const computerSelection = getComputerChoice();
 console.log(computerSelection)
 console.log(playRound(playerSelection, computerSelection));


