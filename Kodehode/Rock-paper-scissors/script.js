const randomArr = ["Rock", "Paper", "Scissors"];
console.log(randomArr);

function play(playerInput) {
  const computerInput = randomArr[Math.floor(Math.random() * randomArr.length)];

  console.log(`Player choose: ${playerInput}`);
  console.log(`Computer choose: ${computerInput}`);

  const winner = determenWinner(computerInput, playerInput);

  const winnerElement = document.getElementById("winner");
  winnerElement.textContent = winner;

  const computerOutput = document.getElementById("computerPick");
  computerOutput.textContent = `Computer played ${computerInput}`
}

function determenWinner(playerInput, computerInput) {
  if (playerInput === computerInput) {
    return "It's a tie";
  } else if (
    (playerInput === "Rock" && computerInput === "Scissors") ||
    (playerInput === "Paper" && computerInput === "Rock") ||
    (playerInput === "Scissors" && computerInput === "Paper")
  ) {
    return "You Lose!";
  } else {
    return "You Win!";
  }
}
