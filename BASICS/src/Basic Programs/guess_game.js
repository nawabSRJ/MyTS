// todo : make a number guessing game in TypeScript
// ? task - random function chooses a number and keeps it a secret and then the user has to guess that, return the number of chances user took to guess the number
var computer = Math.floor(Math.random() * 10);
function checkGuess() {
    var input = document.getElementById('guess');
    var result = document.getElementById('result');
    var userGuess = Number(input.value);
    console.log(userGuess);
    if (userGuess === computer) {
        result.textContent = 'Correct!';
    }
    else {
        result.textContent = 'Try again!';
    }
}
// Make checkGuess available globally
window.checkGuess = checkGuess;
