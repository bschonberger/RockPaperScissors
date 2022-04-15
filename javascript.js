function computerPlay () {
    const choices = ["Rock", "Paper","Scissors"]
    return choices[getRandomInt(3)]
    
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/* This Functions Returns a 0 if it is a tie, a 1 if the player wins, and a 2 if the computer wins. */
function playRound(playerSelection,computerSelection){

    console.log("Player Selection is: " + playerSelection)
    console.log("Computer Selection is: " + computerSelection)

    playerSelection = playerSelection.toLowerCase(playerSelection)

    if (playerSelection == "rock"){

        if (computerSelection == "Rock"){
            console.log("It's a Tie!")
            return(0)
            }
        if (computerSelection == "Paper"){
            console.log("Computer Wins!")
            return(2)
            }
        if (computerSelection == "Scissors"){
            console.log("Player Wins!")
            return(1)
            }
        }
    else if (playerSelection == "paper"){

        if (computerSelection == "Rock"){
            console.log("Player Wins!")
            return(1)
            }
        if (computerSelection == "Paper"){
            console.log("It's a Tie!")
            return(0)
            }
        if (computerSelection == "Scissors"){
            console.log("Computer Wins!")
            return(2)
            }
        }
    else if (playerSelection == "scissors"){

        if (computerSelection == "Rock"){
            console.log("Computer Wins!")
            return(2)
            }
        if (computerSelection == "Paper"){
            console.log("Player Wins!")
            return(1)
            }
        if (computerSelection == "Scissors"){
            console.log("It's a Tie!")
            return(0)
            }
        }
 
}
  
function game(playRound){
    let playerWins = 0;
    let computerWins = 0;

    while ((playerWins < 3) && (computerWins < 3)) {


        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = computerPlay();
        winner = playRound(playerSelection,computerSelection);

        if (winner==0){
            console.log("Player wins: " + playerWins)
            console.log("Computer Wins: " + computerWins)
            }
        if (winner==1){
            playerWins++;
            console.log("Player wins: " + playerWins)
            console.log("Computer Wins: " + computerWins)
            }
        if (winner==2){
            computerWins++;
            console.log("Player wins: " + playerWins)
            console.log("Computer Wins: " + computerWins)
            }
        }
    }  

game(playRound)
