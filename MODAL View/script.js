'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//to select all the buttons as an array
console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++)
  console.log(
    btnOpenModal[i].addEventListener('click', function () {
      console.log('Button clicked ');
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    })
  );
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}); //cross button
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}); //click on overlay

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
