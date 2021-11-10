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