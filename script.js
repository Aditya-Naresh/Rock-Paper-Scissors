function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    
    if (playerSelection === "rock" && computerSelection === "Paper" ||
        playerSelection === "paper" && computerSelection === "Scissors" ||
        playerSelection === "scissors" && computerSelection === "Rock") {
      result = "You Lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "rock" && computerSelection === "Scissors" ||
               playerSelection === "paper" && computerSelection === "Rock" ||
               playerSelection === "scissors" && computerSelection === "Paper") {
      result = "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
      result = "It's a tie!";
    }
    
    return result;
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose Rock, Paper or Scissors: ");
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
      
      if (roundResult.startsWith("You Win")) {
        playerScore++;
      } else if (roundResult.startsWith("You Lose")) {
        computerScore++;
      }
    }
    
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    
    if (playerScore > computerScore) {
      console.log("You Win!");
    } else if (playerScore < computerScore) {
      console.log("You Lose!");
    } else {
      console.log("It's a tie!");
    }
  }
  