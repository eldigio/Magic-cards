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

////////////////////// FUNCTIONS ////////////////////////////
const deckSum = () => {
  return deck.reduce((acc, currValue) => acc + currValue, 0);
};

const card = textContent => {
  const newNode = document.createElement('div');
  newNode.classList.add('card');
  newNode.textContent = textContent;
  cardContainer.appendChild(newNode);
};
const clearCardContainer = () => (cardContainer.innerHTML = '');
const createCards = (arr = deck) => {
  arr.forEach(value => {
    card(value);
  });
};

const hideBtns = () => {
  document.querySelectorAll('.btn').forEach(value => {
    if (value.classList[1] !== 'reset') value.style.display = 'none';
  });
};

const showBtns = () => {
  document.querySelectorAll('.btn').forEach(value => {
    if (value.classList[1] !== 'reset') value.style.display = 'block';
  });
};

const reset = () => {
  clearCardContainer();
  createCards();
  showBtns();
};

const double = () => {
  hideBtns();
  cardContainer.childNodes.forEach(value => (value.textContent *= 2));
};

const findOnly2 = () => {
  clearCardContainer();
  hideBtns();
  deck.forEach(value => {
    if (value === 2) {
      card(value);
    }
  });
};

const reverseOrder = () => {
  clearCardContainer();
  hideBtns();
  createCards([...deck].reverse());
};

const findCentral = () => {
  clearCardContainer();
  hideBtns();
  const middle = deck[Math.floor(deck.length / 2)];
  console.log(middle);
  deck.forEach((value, index) => {
    if (index === middle || index === middle + 1) {
      card(value);
    }
  });
};

const sumCards = () => {
  clearCardContainer();
  hideBtns();
  card(deckSum());
};

////////////////////// EVENT LISTENERS ////////////////////////////

// Raddoppia il valore
doubleNumber.addEventListener('click', double);

// Trova le carte centrali
findMiddle.addEventListener('click', findCentral);

// Mantieni i 2
find2.addEventListener('click', findOnly2);

// Riordina al contrario
reorderDeck.addEventListener('click', reverseOrder);

// Somma carte
sumDeck.addEventListener('click', sumCards);

// Reset
reset();
showBtns();
resetButton.addEventListener('click', reset);
