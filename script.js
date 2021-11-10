let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

function Compare(cS, pS,score){//computerSelection, playerSelection, maxScore
    if(cS === pS){
        console.log("Tie");
        console.log(`${playerScore} | ${computerScore}`);
    } else if(
              (cS === "rock" &&  pS === "scissors") ||
              (cS === "scissors" &&  pS === "paper") ||
              (cS === "paper" &&  pS === "rock")   
             ){

        computerScore++;
        if(computerScore<score){

            console.log("Lose");
            console.log(`${playerScore} | ${computerScore}`);

        }else{
            console.log("You lost :(");
            console.log(`${playerScore} | ${computerScore}`);
        }

    } else{
        playerScore++;
        if(playerScore <score){
            console.log("Win");
            console.log(`${playerScore} | ${computerScore}`);
        }else{
            console.log("You win!");
            console.log(`${playerScore} | ${computerScore}`);
        }
    }
}

function ComputerPlay(){
    let rps = ["rock", "paper", "scissors"];
    computerSelection = rps[RandInt(rps.length)];
}


function Game(id){
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
    Compare(computerSelection,playerSelection, 1);
}

function RandInt(range){
    return Math.floor(Math.random()*range);
}