'use strict';

document.addEventListener('DOMContentLoaded', () => {

   const board = document.querySelector('#board');
   const colors = ['#FF0000', '#FF1493', '#FFFF00', '#FF00FF', '#8A2BE2', '#00FF00'];
   const squaresNumber = 500;

   for (let i = 0; i < squaresNumber; i++) {
       const square = document.createElement('div');
       square.classList.add('square');

       square.addEventListener('mouseover', () => {
           setColor(square);
       });

       square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

       board.append(square);
   }


   function setColor(element) {
    const color = getRandomColor();   
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`; 
   }

   
   function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`; 
   }


   //случайный выбор цвета
   function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
   }



});