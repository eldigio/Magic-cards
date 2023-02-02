'use-strict';

////////////////////// DATA ////////////////////////////
const deck = [1, 3, 2, 5, 3, 9, 2, 8];

////////////////////// SELECTORS ////////////////////////////
const cardContainer = document.querySelector('.card_container');
const magicButtons = document.querySelector('.magic_buttons');
const doubleNumber = document.querySelector('.double_number');
const findMiddle = document.querySelector('.find_middle');
const find2 = document.querySelector('.find_2');
const reorderDeck = document.querySelector('.reorder_deck');
const sumDeck = document.querySelector('.sum_deck');
const resetButton = document.querySelector('.reset');
// cardContainer.firstChild.innerHTML = '';

////////////////////// FUNCTIONS ////////////////////////////

const reset = () => {
  deck.forEach(value => {
    const newNode = document.createElement('div');
    newNode.classList.add('card');
    newNode.textContent = value;
    cardContainer.appendChild(newNode);
  });
};

const double = () => {
  const value = cardContainer.childNodes.forEach(value => value.textContent);
  console.log(value);
};

////////////////////// EVENT LISTENERS ////////////////////////////

// Raddoppia il valore
doubleNumber.addEventListener('click', double);

// Trova le carte centrali

// Mantieni i 2

// Riordina al contrario

// Somma carte

// Reset
reset();
