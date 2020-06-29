let choice = "something";
let computerChoice = "somethingElse";

function displayWinner(choice, computerChoice) {
  // `choice` and `computerChoice` variables are NO LONGER accessible here because parameters shadowed them
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
  
  