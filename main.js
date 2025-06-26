function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function getUserChoice() {
  return prompt("Enter 'rock', 'paper' or 'scissors'");
}

function playRound() {
  const userChoice = getUserChoice().trim().toLowerCase();
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    return "tie";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "lose";
    }
    return "win";
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "lose";
    }
    return "win";
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "lose";
    }
    return "win";
  } else {
    return "invalid";
  }
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;
  let i = 0;

  while (i < 5) {
    let response = playRound();
    if (response === "tie") {
      console.log("Tie!");
      i++;
    } else if (response === "win") {
      console.log("You win this round!");
      i++;
      userScore++;
    } else if (response === "lose") {
      console.log("You lose this round!");
      i++;
      computerScore++;
    } else if (response === "invalid") {
      console.log("Invalid input, try again");
    }
    // console.log(userScore);
    // console.log(computerScore);
  }

  console.log(
    `The final score is you: ${userScore} vs computer: ${computerScore}`,
  );
}

playGame();
