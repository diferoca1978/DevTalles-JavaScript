// This is an auto invoque function also called module pattern desing.

const myModule = (() => {
  'use strict';

  let deck = [];
  const cardTypes = ['C', 'D', 'H', 'S'];
  const specialCards = ['A', 'J', 'Q', 'K'];
  let message = '';

  // counter points

  let playersPoints = [];

  // HTML references

  const btnNew = document.querySelector('#new');
  const btnAsk = document.querySelector('#ask');
  const btnStop = document.querySelector('#stop');
  const showPoints = document.querySelectorAll('span');
  const showCards = document.querySelectorAll('.divLetters');

  // Function to initialize the game.

  const startGame = (numPlayers = 2) => {
    deck = createDeck();

    playersPoints = [];
    for (let i = 0; i < numPlayers; i++) {
      playersPoints.push(0);
    }

    showPoints.forEach((elem) => (elem.innerText = 0));
    showCards.forEach((elem) => (elem.innerHTML = ''));

    btnAsk.disabled = false;
    btnStop.disabled = false;
  };

  // Function to create a deck of cards already shuffled

  const createDeck = () => {
    deck = [];

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
    return _.shuffle(deck); //this method is providing to underscore.js library
  };

  // Function to take one card of deck

  const getcard = () => {
    if (deck.length === 0) {
      throw (message = 'There are not more cards');
    }
    return deck.pop();
  };

  // To take the value of one card

  const cardValue = (card) => {
    const val = card.substring(0, card.length - 1);

    return isNaN(val) ? (val === 'A' ? 11 : 10) : val * 1; // The last code (val * 1) is transforming the substring value to number value.
  };

  // To accumulate points

  const accumulatePoints = (card, turn) => {
    playersPoints[turn] += cardValue(card);
    showPoints[turn].innerText = playersPoints[turn];
    return playersPoints[turn];
  };

  // Create card

  const createCard = (card, turn) => {
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('card');

    showCards[turn].append(imgCard);
  };

  // Stablish winner

  const determineWinner = () => {
    const [minimunPoints, pcPoints] = playersPoints;

    setTimeout(() => {
      if (minimunPoints === pcPoints) {
        alert('Draw please start a new game');
      } else if (minimunPoints > 21) {
        alert('PC win 🚀');
      } else if (pcPoints > 21) {
        alert('Player win 🏆');
      } else {
        alert('Pc win 🚀');
      }
    }, 100);
  };

  // Computer turn logic

  const pcTurn = (minimunPoints) => {
    let pcPoints = 0;
    do {
      const card = getcard();
      pcPoints = accumulatePoints(card, playersPoints.length - 1);

      createCard(card, playersPoints.length - 1);
    } while (pcPoints < minimunPoints && minimunPoints <= 21);

    determineWinner();
  };

  // events of DOM

  btnAsk.addEventListener('click', () => {
    const card = getcard();

    const userPoints = accumulatePoints(card, 0);

    createCard(card, 0);

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
    pcTurn(playersPoints[0]);
  });

  btnNew.addEventListener('click', () => {
    startGame();
  });

  // Through this return we can do public whatever we want seen outside
  return {
    newGame: startGame,
  };
})();
