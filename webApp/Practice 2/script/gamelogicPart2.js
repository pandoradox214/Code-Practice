function clickaChoice(choice){
    const combinations = {
        Rock: 1/3,
        Paper: 2/3,
        Scissors: 3/3
    };
    var humanChoice;
    switch(choice){
        case "rock":
            humanChoice = combinations.Rock;
        break;
        case "paper":
            humanChoice = combinations.Paper;
        break;
        case "scissors":
            humanChoice = combinations.Scissors;
        break;
    }
    const ComputerChoice = Math.random();
    if (ComputerChoice < combinations.Rock){
        computerCalculatedChoice = combinations.Rock;
        console.log("Computer chose rock");
    }
    else if (ComputerChoice < combinations.Paper && ComputerChoice >= combinations.Rock){
        computerCalculatedChoice = combinations.Paper;
        console.log("Computer chose paper");
    }
    else if(ComputerChoice >= combinations.Paper){
        computerCalculatedChoice = combinations.Scissors;
        console.log("Computer chose scissors");
    }
    winState(humanChoice, computerCalculatedChoice);
}

function winState(humanChoice, computerCalculatedChoice){
    if(humanChoice == 1/3 && computerCalculatedChoice == 3/3){
        console.log("You win!");
    }
    else if(humanChoice == 2/3 && computerCalculatedChoice == 1/3){
        console.log("You win!");
    }
    else if(humanChoice == 3/3 && computerCalculatedChoice == 2/3){
        console.log("You win!");
    }
    else if(humanChoice == computerCalculatedChoice){
        console.log("It's a tie!");
    }
    else{
        console.log("You lose!");
    }
}