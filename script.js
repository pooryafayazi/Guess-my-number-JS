'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉🎊 Correct Number! 🎊🎉';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let x;
let scoure;

document.querySelector('.again').addEventListener('click', function () {
  //   x = Math.floor(Math.random() * 20) + 1;
  x = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  console.log(x);
});

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (guess == x) {
    console.log('GOOD.');
    document.querySelector('.message').textContent =
      '🎉🎊 Correct Number! 🎊🎉';
    document.querySelector('.number').textContent = x;
  } else {
    document.querySelector('.score').textContent -= 1;
    console.log('NOT.');
  }
  if (!guess) {
    document.querySelector('.message').textContent = ' No Number! ⛔';
  }
});
