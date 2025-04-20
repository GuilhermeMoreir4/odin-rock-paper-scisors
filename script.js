var playerScore = 0;
var computerScore = 0;

//just in case we need a diferent rule in the future
function playerWon(){
    playerScore++;
}

function computerWon(){
    computerScore++;
}


function playerChoice(){
 return prompt("Chose: Rock, Paper or Scisor").toLowerCase();
}

function computerChoice(){
    const choose = ["rock", "paper","scisor"];
    return choose[parseInt(Math.random() * 3)];
}

function rockCase(computerInput){
    if(computerInput == "paper"){
        computerWon();
        console.log("You lose! \n Paper beat's Rock!");
    }else{
        playerWon();
        console.log("Youv'e won! \n Rock beat's Scisors.");
    }
}


function paperCase(computerInput){
    if(computerInput == "scisor"){
        computerWon();
        console.log("You lose! \n Scisor beat's Paper!");
    }else{
        playerWon();
        console.log("Youv'e won! \n Paper beat's Rock.");
    }
}

function scisorCase(computerInput){
    if(computerInput == "rock"){
        computerWon();
        console.log("You lose! \n Rock beat's Scisor!");
    }else{
        playerWon();
        console.log("Youv'e won! \n Scisor beat's Paper.");
    }
}

function playRound(userInput, computerInput){   
     if(userInput === computerInput){
        console.log("Youv'e draw.");
     }else{
        switch(userInput){
            case "rock":
                rockCase(computerInput);
                break;
            case "paper":
                paperCase(computerInput);
                break;
            case "scisor":
                scisorCase(computerInput);
                break;
        }
     }
}


function gameLoop(){
    let rounds = 0;
    

    while(rounds < 5){
        const userInput = playerChoice();
        const computerInput =computerChoice();
        playRound(userInput, computerInput);
        rounds ++;
    }

    if(playerScore > computerScore){
        console.log("Youv'e won the game!");
    }else if(playerScore == computerScore){
        console.log("A solid draw!");
    }else{
        console.log("The computer is smater tahn you i guess.");
    }

    console.log("Computer make: " + computerScore + "\nYou made: " + playerScore);
}

gameLoop();