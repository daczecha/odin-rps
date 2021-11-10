let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

let roundCounter = 1;

const computerPick = document.getElementById("computer-pick");
const footer = document.getElementById("footer");

const modal = document.getElementById("modal");
const gameOverDark = document.getElementById("game-over-dark");

function Compare(cS, pS){//computerSelection, playerSelection, maxScore

    if(cS === pS){
        footer.innerText = "TIE!";
    } else if(
              (cS === "rock" &&  pS === "scissors") ||
              (cS === "scissors" &&  pS === "paper") ||
              (cS === "paper" &&  pS === "rock")   
             ){

        computerScore++;
        document.getElementById(`computer-score-${computerScore}`).classList.remove("far");
        document.getElementById(`computer-score-${computerScore}`).classList.add("fas");
        footer.innerText = "YOU LOSE!";

    } else{
        playerScore++;
        document.getElementById(`player-score-${playerScore}`).classList.remove("far");
        document.getElementById(`player-score-${playerScore}`).classList.add("fas");
        footer.innerText = "YOU WIN!";
    }
    setTimeout(() => {
        computerPick.src = "img/questionmark.png";
        computerPick.classList.add("questionmark");
        footer.innerText = "";
        document.getElementById("round").innerText = "ROUND " + ++roundCounter;
    }, 2000);
}

function ComputerPlay(){
    let rps = ["rock", "paper", "scissors"];
    computerSelection = rps[RandInt(rps.length)];
    computerPick.classList.remove("questionmark");
    setTimeout(() => {
        computerPick.src = `img/${computerSelection}.png`;
    }, 500);
}


function Game(id){
    if(playerScore < 3 && computerScore < 3){ 
        switch(id){
            case "rock":
                playerSelection = "rock";
                break;
            case "paper":
                playerSelection = "paper";
                break;
            case "scissors":
                playerSelection = "scissors";
                break;
            default:
        }
        ComputerPlay();
            Compare(computerSelection,playerSelection)  
        
        if(computerScore>=3){
            modal.style.display = "flex";
            gameOverDark.style.display  = "block";
            document.getElementById("message").innerText = "YOU LOSE!";
            document.getElementById("message").style.color = "#c23616";
        }
        if(playerScore>=3){
            modal.style.display = "flex";
            gameOverDark.style.display  = "block";
            document.getElementById("message").innerText = "YOU WIN!";
            document.getElementById("message").style.color = "#44bd32";
        }
    }
}

function Restart(){
    location.reload();
}

function RandInt(range){
    return Math.floor(Math.random()*range);
}