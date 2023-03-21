function getComputerChoice () {
        let  choices = ["rock", "paper", "scissors"];
        const pcChoice = Math.floor(Math.random() * choices.length);
       return choices[pcChoice];
}
function playRound (player, computer){
    player = player .toLowerCase();
    if (player==="rock" && computer ==="rock"){
        return "it is a draw";
    } else if (player==="rock" && computer ==="paper"){
          return "player lost";
    } else if (player==="rock" && computer==="scissors"){
        return "player won";
    } else if (player ==="paper" && computer ==="rock"){
        return "player won";
    } else if (player ==="paper" && computer ==="paper"){
        return "it is a draw";
    } else if (player=== "paper" && computer === "scissors"){
        return "player lost";
    }else if (player ==="scissors" && computer ==="rock"){
        return "player lost"; 
    } else if (player ==="scissors" && computer ==="paper"){
        return "player won";
    } else if (player ==="scissors" && computer ==="scissors"){
        return "it is a draw";
    }
}
function game(){
    let scoreWin=0;
    let scoreLose = 0;
    let scoreDraw=0;
    for (let i=0;  i<5;  i++){
       let  playerChoice = prompt("Rock, Paper, Scissors shoot!!!!!");
       let computerChoice= getComputerChoice();
       let roundResult = playRound(playerChoice,  computerChoice);
       console.log(roundResult);
       if (roundResult=== "player won"){
        scoreWin= scoreWin+1;
       } else if (roundResult==="player lost"){
        scoreLose= scoreLose+1;
       } else if (roundResult==="it is a draw"){
        scoreDraw= scoreDraw+1;
       }
    }
    if (scoreWin>2){
        console.log("you won the game");
    } else if (scoreLose>2){
        console.log("you lost the game!!!");
    } else {
        console.log("it is a draw");
    }
}
game();