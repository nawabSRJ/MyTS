"use strict";
let computer = Math.floor(Math.random() * 10);
function checkGuess() {
    const input = document.getElementById('guess');
    const result = document.getElementById('result');
    const userGuess = Number(input.value);
    if (userGuess === computer) {
        result.textContent = 'Correct!';
    }
    else {
        result.textContent = 'Try again!';
    }
}
window.checkGuess = checkGuess;
//# sourceMappingURL=guess_game.js.map