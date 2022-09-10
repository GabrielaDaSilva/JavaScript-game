/* Step 1: Computer's choice. 
We will use Math.random() and Math.floor() to get the computer to randomly choose rock/paper/scissors. 
we are telling the computer to choose randomly between the three options.*/
function computerPlay() {
  let computerOptions = ["rock", "paper", "scissors"];
  let randomSelection = Math.floor(Math.random() * computerOptions.length)
  return computerOptions[randomSelection];
}
//One Round
function playRound(playerSelection, computerSelection) {
  let determineWinner;
  let winnerMessage;
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        winnerMessage = "It's a tie, well played!";
      } else if (computerSelection === "paper") {
        winnerMessage = "You lose, try again!";
        determineWinner = "computer";
      } else if (computerSelection === "scissors") {
        winnerMessage = "Congratulations, you win!";
        determineWinner = "player"
      }
      break
    case "paper":
      if (computerSelection === "paper") {
        winnerMessage = "It's a tie, well played!";
      } else if (computerSelection === "scissors") {
        winnerMessage = "You lose, try again!";
        determineWinner = "computer";
      } else if (computerSelection === "rock") {
        winnerMessage = "Congratulations, you win!";
        determineWinner = "player";
      }
      break
    case "scissors":
      if (computerSelection === "scissors") {
        winnerMessage = "It's a tie, well played!";
      } else if (computerSelection === "rock") {
        winnerMessage = "You lose, try again!";
        determineWinner = "computer";
      } else if (computerSelection === "paper") {
        winnerMessage = "Congratulations, you win!";
        determineWinner = "player";
      }
      break;
    default:
      winnerMessage = "Please type a valid option; rock/paper/scisors"
  }
  return [determineWinner, winnerMessage];
}
//Game Play
function gamePlay() {
  let playerScore = 0;
  let computerScore = 0;
  let resultMessage;
  for (let i = 0; i < 5; i++) {
    //linking to buttons in a node list and adding click event listeners
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    
    rockButton.addEventListener("click", () => {
      alert(playerSelection = "you chose rock");
      alert(computerSelection = `Computer chose ${computerPlay()}`);
      alert(determineWinner);
    });
    paperButton.addEventListener("click", () => {
      alert(playerSelection = "you chose rock");
      alert(computerSelection = `Computer chose ${computerPlay()}`);
      alert(determineWinner);
    });
    scissorsButton.addEventListener("click", () => {
      alert(playerSelection = "you chose rock");
      alert(computerSelection = `Computer chose ${computerPlay()}`);
      alert(determineWinner);
    });
    let roundResult = playRound(formattedPlayerChoice, computerPlay());
    console.log(roundResult[1]);
    if (roundResult[0] === "player") {
      playerScore += 1;
    } else if (roundResult[0] === "computer") {
      computerScore += 1;
    }
  }
}
if (playerScore > computerScore) {
  resultMessage = `Congratulations, you win! Player Score: ${playerScore} Computer Score:" ${computerScore}`;
} else if (playerScore < computerScore) {
  resultMessage = `The computer won this round. Try again! Player Score:${playerScore} Computer Score:${computerScore}`;
} else {
  resultMessage = "The game was a tie. Well played!"
}
console.log(resultMessage);
gamePlay();
