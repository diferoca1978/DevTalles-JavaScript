/*
 * 2C of clubs
 * 2D of diamonds
 * 2H of hearts
 * 2S of spades
 */

let deck = [];
const cardTypes = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];
let message = '';

// counter points

let userPoints = 0,
  pcPoints = 0;

// HTML references

const btnNew = document.querySelector('#new');
const btnAsk = document.querySelector('#ask');
const btnStop = document.querySelector('#stop');
const showPoints = document.querySelectorAll('span');
const ShowImgUserCard = document.querySelector('#Player-Cards');
const ShowImgPcCard = document.querySelector('#Pc-Cards');

// Function to create a deck of cards already shuffled

const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (const cardType of cardTypes) {
      deck.push(i + cardType);
    }
  }
  for (const cardType of cardTypes) {
    for (const spc of specialCards) {
      deck.push(spc + cardType);
    }
  }

  deck = _.shuffle(deck); //this method is providing to underscore.js library
  console.log(deck);
  return deck;
};

createDeck();

// Function to take one card of deck

const getcard = () => {
  if (deck.length === 0) {
    throw (message = 'There are not more cards');
  }

  let card = deck.pop();

  return card;
};

// To take the value of one card

const cardValue = (card) => {
  const val = card.substring(0, card.length - 1);

  return isNaN(val) ? (val === 'A' ? 11 : 10) : val * 1; // The last code (val * 1) is transforming the substring value to number value.
};

// Computer turn logic

const pcTurn = (minimunPoints) => {
  do {
    const card = getcard();
    pcPoints += cardValue(card);
    showPoints[1].innerText = pcPoints;

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('card');

    ShowImgPcCard.append(imgCard);

    if (minimunPoints > 21) {
    } else if (minimunPoints === pcPoints) {
      console.warn('Draw start new game');
      break;
    }
  } while (pcPoints < minimunPoints && minimunPoints <= 21);
};

// events of DOM

btnAsk.addEventListener('click', () => {
  const card = getcard();
  userPoints += cardValue(card);
  showPoints[0].innerText = userPoints;

  const imgCard = document.createElement('img');
  imgCard.src = `assets/cartas/${card}.png`;
  imgCard.classList.add('card');

  ShowImgUserCard.append(imgCard);

  if (userPoints > 21) {
    console.warn('You lose 😒');
    btnAsk.disabled = true;
    btnStop.disabled = true;
    pcTurn(userPoints);
  } else if (userPoints === 21) {
    console.warn('21, awesome!!');
    btnAsk.disabled = true;
    btnStop.disabled = true;
    pcTurn(userPoints);
  }
});

btnStop.addEventListener('click', () => {
  btnAsk.disabled = true;
  btnStop.disabled = true;
  pcTurn(userPoints);

  if (pcPoints > userPoints && pcPoints <= 21) {
    console.warn('Pc Win 🥳');
  } else if (pcPoints > 21) {
    console.warn('You Win 🥳');
  }
});

btnNew.addEventListener('click', () => {
  deck = [];
  deck = createDeck();
  (userPoints = 0),
    (pcPoints = 0),
    (showPoints[0].innerText = 0),
    (showPoints[1].innerText = 0),
    (ShowImgPcCard.innerHTML = '');
  ShowImgUserCard.innerHTML = '';

  btnAsk.disabled = false;
  btnStop.disabled = false;
});
