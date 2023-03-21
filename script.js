function getComputerChoice () {
        let  choices = ["rock", "paper", "scissors"];
        const pcChoice = Math.floor(Math.random() * choices.length);
       return choices[pcChoice];
}
function playRound (player, computer){
    player = player .toLowerCase();
}