const readline = require('readline-sync');
const CARDS_SHAPE = ['Heart', 'Diamond', 'Club', 'Spade'];
const TWENTYONE = 21;
const SEVENTEEN = 17;
const HDCSA_VALUES = 10;
const ACE_VALUE_ONE = 1;
const CARDS_VALUE = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10',
  'Ace', 'Jack', 'Queen', 'King'];
const VALUE_INDEX = 1;
const VALID_STAY_HIT = ['s', 'h', 'stay', 'hit'];
const VALID_YES_OR_NO = ['y', 'n', 'yes', 'no'];


function prompt (msg) {
  console.log(`=> ${msg}`);
}


function initializingCards() {
  let array = [];
  for (let shapeIndex = 0; shapeIndex < CARDS_SHAPE.length; shapeIndex++) {
    for (let valueIndex = 0; valueIndex < CARDS_VALUE.length; valueIndex++) {
      array.push([CARDS_SHAPE[shapeIndex], CARDS_VALUE[valueIndex]]);
    }
  }
  return array;
}


function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function dealingCards(deck, array) {
  addingCard(deck, array);
  removingFromDeck(deck);
}

function addingCard(deck, array) {
  array.push(deck[0]);
}

function removingFromDeck(deck) {
  deck.shift();
}

function displayCards(name, array) {
  prompt(`${name} has:`);
  console.log(array);
  prompt(`A total of: ${calculatingCards(array)}`);
}

function getUserAnswer(msg, errorMsg, validArray) {
  prompt(msg);
  let output = readline.question().toLowerCase();

  while (!validArray.includes(output)) {
    prompt(errorMsg);
    output = readline.question().toLowerCase();
  }
  return output;
}


function isBusted(array) {
  return calculatingCards(array) > TWENTYONE;
}

function nextStep(msg) {
  prompt(msg);
  readline.question();
}

function biggerThanSeventeen(array) {
  return calculatingCards(array) >= SEVENTEEN;
}

function detectWinner(playerNumber, dealerNumber) {
  if ((TWENTYONE - playerNumber) < (TWENTYONE - dealerNumber)) {
    return 'player';
  } else if (((TWENTYONE - playerNumber) > (TWENTYONE - dealerNumber))) {
    return 'dealer';
  } else {
    return null;
  }
}

function displayWinner(playerNumber, dealerNumber) {
  if (detectWinner(playerNumber, dealerNumber)) {
    prompt(`The winner is ${detectWinner(playerNumber, dealerNumber)}`);
  } else {
    prompt('It is a tie!');
  }
}

function decidingAceValue(arr, total) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index][VALUE_INDEX] === 'Ace') {
      if (total + HDCSA_VALUES < TWENTYONE) {
        return HDCSA_VALUES;
      } else {
        return ACE_VALUE_ONE;
      }
    } else {
      return 0;
    }
  }
}

function calculatingCards(arr) {
  let total = 0;
  for (let index = 0; index < arr.length; index++) {
    if (!isNaN(Number(arr[index][VALUE_INDEX]))) {
      total += Number(arr[index][VALUE_INDEX]);
    }

    if (isNaN(Number(arr[index][VALUE_INDEX])) &&
      arr[index][VALUE_INDEX] !== 'Ace') {
      total += HDCSA_VALUES;
    }

    if (arr[index][VALUE_INDEX] === 'Ace') {
      continue;
    }
  }
  console.log(decidingAceValue(arr, total))


  return (total + decidingAceValue(arr, total));
}


function keepPlaying(answer) {
  return !!((answer === 'y' || answer === 'yes'));
}

while (true) {

  console.clear();

  while (true) {

    prompt('WELCOME TO 21!');

    let mainDeck = initializingCards();
    shuffle(mainDeck);

    let playerCards = [];
    let dealerCards = [];

    // first deal to player
    dealingCards(mainDeck, playerCards);
    displayCards('player', playerCards);
    nextStep('type anything to move next');

    // first deal to dealer
    dealingCards(mainDeck, dealerCards);
    displayCards('dealer', dealerCards);
    nextStep('Type anything to move next');

    // second deal to player
    dealingCards(mainDeck, playerCards);
    displayCards('player', playerCards);

    // second deal to dealer
    dealingCards(mainDeck, dealerCards);


    while (true) { //player turn
      let userAnswer =
      getUserAnswer('(H)it or (S)tay?',
        'Invalid, enter "h" or "s")',
        VALID_STAY_HIT);
      if (userAnswer === 'stay' || userAnswer === 's') {
        break;
      } else {
        dealingCards(mainDeck, playerCards);
        displayCards('player', playerCards);
      }
      if (isBusted(playerCards)) break;
    }

    if (isBusted(playerCards)) {
      prompt('Player busted! Dealer won!');
      break;
    }

    while (true) { //dealer turn

      displayCards('dealer', dealerCards);
      nextStep('Type anything to move next');

      if (biggerThanSeventeen(dealerCards) || isBusted(dealerCards)) break;

      dealingCards(mainDeck, dealerCards);
    }

    if (isBusted(dealerCards)) {
      prompt('Dealer busted! Player Won!');
      break;
    }

    detectWinner(calculatingCards(playerCards), calculatingCards(dealerCards));

    displayWinner(calculatingCards(playerCards), calculatingCards(dealerCards));
    break;

  }

  keepPlaying(getUserAnswer('Do you want to play more?',
    'Invalid, choose "y" or "n"',
    VALID_YES_OR_NO));
}