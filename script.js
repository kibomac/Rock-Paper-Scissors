const choices = ["rock", "paper", "scissors"];
const playerChoiceDisplay = document.getElementById("player-choice").querySelector("span");
const computerChoiceDisplay = document.getElementById("computer-choice").querySelector("span");
const winnerDisplay = document.getElementById("winner").querySelector("span");
const darkModeToggle = document.getElementById("darkModeToggle");

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, result);
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(player, computer) {
  if (player === computer) {
    return "It's a draw!";
  }
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  }
  return "You lose!";
}

function updateUI(player, computer, result) {
  playerChoiceDisplay.textContent = player;
  computerChoiceDisplay.textContent = computer;
  winnerDisplay.textContent = result;

  if (result === "You win!") {
    winnerDisplay.style.color = "#4caf50";
  } else if (result === "You lose!") {
    winnerDisplay.style.color = "#f44336";
  } else {
    winnerDisplay.style.color = "#ffc107";
  }
}

// Dark Mode Toggle
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Preserve dark mode preference using local storage
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
    }
  });
