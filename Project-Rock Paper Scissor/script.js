function getComputerChoice() {
  const arr = ["Rock", "Paper", "Scissor"];
  return arr[Math.floor(Math.random() * 3)];
}

function getMyChoice() {
  let myChoice;
  while (true) {
    myChoice = prompt("Enter your choice (Rock, Paper, Scissor):").trim();
    if (["rock", "paper", "scissor"].includes(myChoice.toLowerCase())) break;
    alert("Invalid choice! Please enter Rock, Paper, or Scissor.");
  }
  return myChoice;
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const upperHumanChoice = humanChoice.toUpperCase();
  const upperComputerChoice = computerChoice.toUpperCase();
  console.log(upperHumanChoice);
  console.log(upperComputerChoice);

  const winCond = {
    ROCK: "SCISSOR",
    PAPER: "ROCK",
    SCISSOR: "PAPER",
  };

  if (upperHumanChoice === upperComputerChoice) {
    console.log("It's a draw!");
  } else if (winCond[upperHumanChoice] === upperComputerChoice) {
    humanScore += 1;
    console.log(`You win! ${upperHumanChoice} beats ${upperComputerChoice}`);
  } else {
    computerScore += 1;
    console.log(`You lose! ${upperComputerChoice} beats ${upperHumanChoice}`);
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    playRound(getMyChoice(), getComputerChoice());
    console.log(`${humanScore}:${computerScore}`);
  }

  console.log(`Final score: YOU ${humanScore}:${computerScore} COM`);
}
