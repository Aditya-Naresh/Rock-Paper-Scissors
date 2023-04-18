function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  let result;

  if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {
    result = "You Lose! " + computerSelection + " beats " + playerSelection;
  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
    result = "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    result = "It's a tie!";
  }

  return result;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', event => {
      const playerSelection = event.target.id; // get the id of the clicked button
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);

      if (roundResult.startsWith("You Win")) {
        playerScore++;
      } else if (roundResult.startsWith("You Lose")) {
        computerScore++;
      }

      console.log("Player Score: " + playerScore);
      console.log("Computer Score: " + computerScore);

      if (playerScore === 5) {
        console.log("You Win!");
        playerScore = 0;
        computerScore = 0;
      } else if (computerScore === 5) {
        console.log("You Lose!");
        playerScore = 0;
        computerScore = 0;
      }
    });
  });
}


