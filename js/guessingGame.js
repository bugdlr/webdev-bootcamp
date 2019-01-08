const secretNum = 4;

const guess = Number(prompt("Guess a number between 1-10"));

let check = function
if (guess === secretNum) {
  alert("Congrats! You guessed the secret number!")
} else if (guess > secretNum) {
  prompt("You guessed too high. Try again.")
} else {
  prompt("You guessed too low. Try again.")
}
