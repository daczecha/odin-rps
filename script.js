function Compare(cS, pS){//computerSelection, playerSelection
    if(cS === pS){
        console.log("Tie");
    } else if(
              (cS === "rock" &&  pS === "scissors")
              (cS === "scissors" &&  pS === "paper")
              (cS === "paper" &&  pS === "rock")
             ){
        console.log("Lose");       
    } else{
        console.log("Win");
    }
}


function ComputerPlay(){
    let rps = ["rock", "paper", "scissors"];
    return rps[RandInt(rps.length)];
}

function PlayerPlay(id){
    switch(id){
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
        default:
    }
}

function RandInt(range){
    return Math.floor(Math.random()*range);
}