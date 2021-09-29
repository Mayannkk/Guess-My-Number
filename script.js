'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //if u don't give any value
  if (!guess) {
    document.querySelector('.message').textContent = `🚫 No Input..!!`;

    //if you choose the right number.
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🏆 You won..!!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '33rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //if your choose the wrong number.(Refactoring)
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? `📈 too high..(try again)`
          : `📉 too low..(try again)`;
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = `😭 You lost..!!`;
    }
  }

  // if your value is greater than secretNumber.
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(
  //       '.message'
  //     ).textContent = `📈 too high..(try again)`;
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = `😭 You lost..!!`;
  //   }

  //   //if value is smaller than secretNumber.
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(
  //       '.message'
  //     ).textContent = `📉 too low..(try again)`;
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = `😭 You lost..!!`;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
