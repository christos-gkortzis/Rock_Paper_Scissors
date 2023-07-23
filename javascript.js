
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

 let choice = getComputerChoice();
 console.log(choice);


