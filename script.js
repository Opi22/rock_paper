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

