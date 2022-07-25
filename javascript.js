
let playerScore = 0
let computerScore = 0
let roundWinner = ''
Rock.addEventListener('click', () => handleClick('Rock'))
Paper.addEventListener('click', () => handleClick('Paper'))
Scissors.addEventListener('click', () => handleClick('Scissors'))

function handleClick(playerSelection) {

    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
  }

function computerPlay () {
    const choices = ["Rock", "Paper","Scissors"];
    return choices[getRandomInt(3)];
    
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/* This Functions Returns a 0 if it is a tie, a 1 if the player wins, and a 2 if the computer wins. */
function playRound(playerSelection,computerSelection){
 
    if (playerSelection == "Rock"){

        if (computerSelection == "Rock"){
            roundWinner = "Tie";
            }
        if (computerSelection == "Paper"){
            computerScore++;
            roundWinner = "Computer";
            }
        if (computerSelection == "Scissors"){
            playerScore++;
            roundWinner = "Player";
            }
        }
    else if (playerSelection == "Paper"){

        if (computerSelection == "Rock"){
            playerScore++;
            roundWinner = "Player";
            }
        if (computerSelection == "Paper"){
            roundWinner = "Tie";
            }
        if (computerSelection == "Scissors"){
            computerScore++;
            roundWinner = "Computer";
            }
        }
    else if (playerSelection == "Scissors"){

        if (computerSelection == "Rock"){
            computerScore++;
            roundWinner = "Computer";
            }
        if (computerSelection == "Paper"){
            playerScore++;
            roundWinner = "Player";
            }
        if (computerSelection == "Scissors"){
            roundWinner = "Tie";
            }
        }
        
        updateScore(roundWinner,playerScore,computerScore);
        updateReplay(playerSelection,computerSelection);
 
}
function updateScore(roundWinner,playerScore,computerScore){

    const container = document.querySelector('#winner');
    const container2 = document.querySelector('#score');
    if (roundWinner == "Player"){
        container.innerHTML = "Player wins this round.";
        container2.innerHTML = "Score: Player " + playerScore + " Computer " + computerScore
    }
    if (roundWinner == "Computer"){
        container.innerHTML = "Computer wins this round.";
        container2.innerHTML = "Score: Player " + playerScore + " Computer " + computerScore
    }    
    if (roundWinner == "Tie"){
        container.innerHTML = "Tie.";
        container2.innerHTML = "Score: Player " + playerScore + " Computer " + computerScore
    } 
    
    if ((playerScore == 3) || (computerScore == 3)){
        let winner;
        if (playerScore == 3){
            console.log("You Won!");
            winner = "Player";
        }
        else{
            console.log("You Lost...")
            winner = "Computer";
        }
        container.innerHTML = "";
        container2.innerHTML = "Score: ";
        endGame(winner);
    }
}

function updateReplay(playerSelection,computerSelection){
    const playerIcon = document.querySelector('#playerIcon')
    const computerIcon = document.querySelector('#computerIcon')

    if (playerSelection == "Rock"){
        playerIcon.src = "./images/rock.png";
    } 
    if (playerSelection == "Paper"){
        playerIcon.src = "./images/paper.png";
    }   
    if (playerSelection == "Scissors"){
        playerIcon.src = "./images/scissors.png";
    }  
    if (computerSelection == "Rock"){
        computerIcon.src = "./images/rock.png";
    }  
    if (computerSelection == "Paper"){
        computerIcon.src = "./images/paper.png";
    }  
    if (computerSelection == "Scissors"){
        computerIcon.src = "./images/scissors.png";
    }  

}

function endGame(winner){

    let modal = document.getElementById("myModal");
    let gameWinner = document.querySelector("p");
    if (winner == "Player"){
        gameWinner.innerHTML = "You Won!";
    }
    else {
        gameWinner.innerHTML = "You Lost...";
    }

    let span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        computerScore = 0;
        playerScore = 0;
        playerIcon.src = "./images/question.png";
        computerIcon.src = "./images/question.png";



}

}
  




