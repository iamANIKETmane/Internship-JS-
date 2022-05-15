'use strict';
//DOM document object model is a structured representation of the html and css files
//structred in a form tree
//document is the is a special object that gives entry to the DOM
/*
document.querySelector('.message').textContent = 'Begin Guessing!🎉..'; //Dom manupilatuion
document.querySelector('.guess').value = 23;
*/
//
//
//*handling click events *//
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  //const guess=document.querySelector(.'guesss').value;
  //the input we get from usser is in string
  const guess = Number(document.querySelector('.guess').value); //as we have to check with random numbers

  // console.log(guess);
  //
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  //when player wins
  else if (guess === secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'correct number';
      document.querrySelector('body').style.backgroundColor = '#60b347'; //change in css style
    }
  }
  //when guess is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'number too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!! ';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'number too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!! ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
