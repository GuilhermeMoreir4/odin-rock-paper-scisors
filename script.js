var playerScore = 0;
var computerScore = 0;
const pointsToWin = 5;

//just in case we need a diferent rule in the future
function playerWon(){
    playerScore++;
}

function computerWon(){
    computerScore++;
}

function computerChoice(){
    const choose = ["rock", "paper","scisor"];
    return choose[parseInt(Math.random() * 3)];
}

function rockCase(computerInput){
    if(computerInput == "paper"){
        computerWon();
        showRound("You lose! \n Paper beat's Rock!");
    }else{
        playerWon();
        showRound("Youv'e won! \n Rock beat's Scisors.");
    }
}


function paperCase(computerInput){
    if(computerInput == "scisor"){
        computerWon();
        showRound("You lose! \n Scisor beat's Paper!");
    }else{
        playerWon();
        showRound("Youv'e won! \n Paper beat's Rock.");
    }
}

function scisorCase(computerInput){
    if(computerInput == "rock"){
        computerWon();
        showRound("You lose! \n Rock beat's Scisor!");
    }else{
        playerWon();
        showRound("Youv'e won! \n Scisor beat's Paper.");
    }
}

function playRound(userInput, computerInput){   
     if(userInput === computerInput){
        showRound("Youv'e draw.");
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


function isGameFinish(){
    if(playerScore >= pointsToWin || computerScore >= pointsToWin){
        return true;
    }
    return false;
}

function showComemoration(){
    
    const fireworks = document.querySelector("#fireworks");
    const firework1 = document.createElement("div");
    const firework2 = document.createElement("div");
    const firework3 = document.createElement("div");

    firework1.classList = "firework";
    firework2.classList = "firework";
    firework3.classList = "firework";

    fireworks.appendChild(firework1);
    fireworks.appendChild(firework2);
    fireworks.appendChild(firework3);
}

function showWhoWins(){
    if(playerScore > computerScore){
        showRound("Youv'e won the game!");
        showComemoration();
    }else if(playerScore == computerScore){
        showRound("A solid draw!");
    }else{
        showRound("The computer is smater tahn you i guess.");
    }
}

function clearContent(div){
    while(div.firstChild){
        div.removeChild(div.firstChild);
    } 
}

function showRound(message){
    const answerContainer = document.querySelector("#answer-container");
    
    clearContent(answerContainer);

    const h2 = document.createElement("h2");
    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p");
    const paragraph3 = document.createElement("p");
    
    h2.textContent = "Infos";
    paragraph1.textContent = message;
    paragraph2.textContent = "Player score: " + playerScore;
    paragraph3.textContent = "Computer score: " + computerScore;

    answerContainer.appendChild(h2);
    answerContainer.appendChild(paragraph1);
    answerContainer.appendChild(paragraph2);
    answerContainer.appendChild(paragraph3);
}


function handleEvents(){
    const btns = document.querySelectorAll("button");
    
    btns.forEach(button => {
        button.addEventListener("click",(e) => {
                if(isGameFinish()){
                    showWhoWins();
                }else{
                    const computer = computerChoice();
                    playRound(button.id,computer);
                    if(isGameFinish()) {showWhoWins()};
                }
        });
    });
}


function gameLoop(){
    handleEvents();
}

gameLoop();