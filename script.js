function ComputerPlay(){
    let rps = ["rock", "paper", "scissors"];
    return rps[RandInt(rps.length)];
}

function RandInt(range){
    return Math.floor(Math.random()*range);
}