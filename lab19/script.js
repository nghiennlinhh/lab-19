'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13 ;
document.querySelector('.score').textContent = 20 ;

document.querySelector('.guess').value = 23 ;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
 const guess = Number(document.querySelector('.guess').value);
 console.log(guess, typeof guess);

//  when player no iuput
 if (!guess) {
  document.querySelector('.message').textContent = '❌ No number';

// When player wins
 }else if(guess === secretNumber) {
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.querySelector('.number').textContent = secretNumber;


  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('input').style.backgroundColor = '#60b347';

  document.querySelector('.number').style.width = '140px';

  if( score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  // When guess is too hight
 }else if(guess > secretNumber) {
  if(score > 1) {
  document.querySelector('.message').textContent = '📈 Too hight!';
  score -- ;
  document.querySelector('.score').textContent = score;
  }else {
    document.querySelector('.message').textContent = 'You lost the Game!';
    document.querySelector('.score').textContent = 0;
  }

   // When guess is too low
 }else if(guess < secretNumber) {
  if(score > 1) {
  document.querySelector('.message').textContent = '📉 Too low!';
  score -- ;
  document.querySelector('.score').textContent = score;
  }else {
    document.querySelector('.message').textContent = 'You lost the Game!';
    document.querySelector('.score').textContent = 0;
  }
 }
});
document.querySelector('.again').addEventListener('click', function() {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '130px';
  
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('input').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '' ;
});