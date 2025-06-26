function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function getUserChoice() {
  return prompt("Enter 'rock', 'paper' or 'scissors'");
}

function playRound() {
  const userChoice = getUserChoice();
  const userChoiceClean = userChoice.trim().toLowerCase();
  const computerChoice = getComputerChoice();

  const winCon = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (userChoiceClean === computerChoice) {
    // tie
    return `Tie! Both chose ${userChoiceClean}.`;
  } else if (winCon[userChoiceClean] === computerChoice) {
    // user wins
    return `You win, ${userChoiceClean} beats ${computerChoice}!`;
  } else if (winCon[computerChoice] === userChoiceClean) {
    // computer wins
    return `You lose, ${computerChoice} beats ${userChoiceClean}!`;
  } else {
    // invalid input (e.g. user typed "roc")
    return `Invalid input "${userChoice}", try again.`;
  }
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  while (roundsPlayed < 5) {
    const response = playRound();
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
  }

  console.log(
    `The final score is You: ${userScore} vs Computer: ${computerScore}`,
  );
  alert(`The final score is You: ${userScore} vs Computer: ${computerScore}`);
}

playGame();
