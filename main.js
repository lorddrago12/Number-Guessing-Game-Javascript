const randomNumber = Math.floor(Math.random() * 100) + 1;

prompt("Guess a number between 1 and 100");
let guess = parseInt(prompt("Guess a number between 1 and 100"));

while (guess !== randomNumber) {
    if (guess < randomNumber) {
        prompt("Too low, try again");
        guess = parseInt(prompt("Guess a number between 1 and 100"));
    } else if (guess > randomNumber) {
        prompt("Too high, try again");
        guess = parseInt(prompt("Guess a number between 1 and 100"));
    } else {
        prompt("You guessed the number!");
        break;
    }
}
