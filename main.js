function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function playRound(userInput) {
  const userChoice = userInput.trim().toLowerCase();
  const computerChoice = getComputerChoice();

  const winCon = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // checks if the given choice matches the respective win condition and returns
  if (userChoice === computerChoice) {
    return `Tie! Both chose ${userChoice}.`;
  } else if (winCon[userChoice] === computerChoice) {
    return `You win, ${userChoice} beats ${computerChoice}!`;
  } else if (winCon[computerChoice] === userChoice) {
    return `You lose, ${computerChoice} beats ${userChoice}!`;
  }
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  const scoreContainer = document.querySelector(".score");
  const buttons = document.querySelectorAll("button");
  const scoreText = document.createElement("div");
  const scoreBoard = document.createElement("div");
  scoreContainer.append(scoreText, scoreBoard);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const response = playRound(button.textContent);
      scoreText.textContent = response;
      console.log(response);

      if (response.startsWith("Tie")) {
        roundsPlayed++;
      } else if (response.startsWith("You win")) {
        roundsPlayed++;
        userScore++;
      } else if (response.startsWith("You lose")) {
        roundsPlayed++;
        computerScore++;
      }

      if (roundsPlayed === 5) {
        scoreBoard.textContent = `Game over! The final score is You: ${userScore} vs Computer: ${computerScore}`;
        buttons.forEach((button) => (button.disabled = true));
      }
    });
  });
}

playGame();
