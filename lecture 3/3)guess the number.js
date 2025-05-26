//guess the number game
let gameNum = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
let guess = prompt("Guess the number between 1 and 10:");
count = 0;
while (guess != gameNum) {
  if (guess < gameNum) {
    console.log("Too low! Try again.");
  } else if (guess > gameNum) {
    console.log("Too high! Try again.");
  }
  guess = prompt("Guess the number between 1 and 10:");
  count++;
}
console.log("Congratulations!  " + gameNum + " in " + count + " attempts.");
// End of the game
