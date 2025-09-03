
// todo : make a number guessing game in TypeScript
// ? task - random function chooses a number and keeps it a secret and then the user has to guess that, return the number of chances user took to guess the number


let computer = Math.floor(Math.random() * 10);

function checkGuess() {
  const input = document.getElementById('guess') as HTMLInputElement;
  const result = document.getElementById('result')!;
  const userGuess = Number(input.value);
  console.log(userGuess);
  if (userGuess === computer) {
    result.textContent = 'Correct!';
  } else {
    result.textContent = 'Try again!';
  }
}

// Make checkGuess available globally
(window as any).checkGuess = checkGuess;

