const gameOn = document.querySelector(".gameOn")
const wannaPlay = document.querySelector('.wannaPlay')

document.addEventListener('DOMContentLoaded', () => {
  const yes = document.querySelector(".yes");
  yes.addEventListener('click', () => {
    gameOn.style.display = "block"; 
    game();
    wannaPlay.style.display = "none";
   });

   const no = document.querySelector('.no');
   no.addEventListener('click', () => window.close())
});

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
      document.getElementById("who-won").innerHTML = roundResult;


      if (roundResult.startsWith("You Win")) {
        playerScore++;
      } else if (roundResult.startsWith("You Lose")) {
        computerScore++;
      }

      // console.log("Player Score: " + playerScore);
      // console.log("Computer Score: " + computerScore);

      document.getElementById("p-score").innerHTML = playerScore;
      document.getElementById("c-score").innerHTML = computerScore;

      if (playerScore === 5) {
        console.log("You Win!");
        document.getElementById("who-won").innerHTML = "You Win!"
        gameOn.style.display = "none";
        wannaPlay.style.display = "block";
        playerScore = 0;
        computerScore = 0;
      } else if (computerScore === 5) {
        console.log("You Lose!");
        document.getElementById("who-won").innerHTML = "You Lose!"
        gameOn.style.display = "none";
        wannaPlay.style.display = "block";
        playerScore = 0;
        computerScore = 0;
      }
    });
  });
}

