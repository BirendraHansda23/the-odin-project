function getComputerChoice() {
  const arr = ["Rock", "Paper", "Scissor"];
  return arr[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  const upperHumanChoice = humanChoice.toUpperCase();
  const upperComputerChoice = computerChoice.toUpperCase();

  const winCond = {
    ROCK: "SCISSOR",
    PAPER: "ROCK",
    SCISSOR: "PAPER",
  };

  if (upperHumanChoice === upperComputerChoice) {
    decision.innerHTML = "<h3>It's a draw!</h3>";
  } else if (winCond[upperHumanChoice] === upperComputerChoice) {
    humanScore += 1;
    decision.innerHTML = `<h3>You win! ${upperHumanChoice} beats ${upperComputerChoice}</h3>`;
  } else {
    computerScore += 1;
    decision.innerHTML = `<h3>You lose! ${upperComputerChoice} beats ${upperHumanChoice}</h3>`;
  }
}

function playGame(humanChoice) {
  playRound(humanChoice, getComputerChoice());
  score.innerHTML = `${computerScore} : ${humanScore}`;

  if (computerScore === 5) {
    decision.innerHTML = `<h3>COM won! Better luck next time.</h3>`;
  }
  if (humanScore === 5) {
    decision.innerHTML = `<h3>Congrats! You won! </h3>`;
  }

  if (humanScore === 5 || computerScore === 5) {
    setTimeout(resetGame, 3000);
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  score.innerHTML = "0 : 0";
  decision.innerHTML = "<h3>New Game! Make your choice.<h3>";
}

var humanScore = 0;
var computerScore = 0;

const score = document.querySelector("#score");
const decision = document.querySelector("#decision");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const myChoice = event.target.id;
    playGame(myChoice);
  });
});
