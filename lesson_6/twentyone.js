const readline = require('readline-sync');
const CARDS_SHAPE = ['Heart', 'Diamond', 'Club', 'Spade'];
const MAX_NUMBER = 21;
const DEALER_MIN = 17;
const HDCS_VALUES = 10;
const ACE_VALUE_ELEVEN = 11;
const ACE_VALUE_ONE = 1;
const WINNING_SCORE = 5;
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


function dealInitialHands(deck, player, dealer) {
  // first deal to player
  dealingCards(deck, player);
  displayHand('player', player);
  nextStep('Hit enter to move next');

  // first deal to dealer
  dealingCards(deck, dealer);
  displayHand('dealer', dealer);
  nextStep('Hit enter to move next');

  // second deal to player
  dealingCards(deck, player);
  displayHand('player', player);

  // second deal to dealer
  dealingCards(deck, dealer);

}

function playerTurn(deck, player) {

  while (true) { //player turn
    let userAnswer =
      getUserAnswer('(H)it or (S)tay?',
        'Invalid, enter "h" or "s")',
        VALID_STAY_HIT);
    if (userAnswer === 'stay' || userAnswer === 's') {
      break;
    } else {
      dealingCards(deck, player);
      displayHand('player', player);
    }
    if (isBusted(player) ||
            calculatingCards(player) === MAX_NUMBER) break;
  }
}

function dealerTurn(deck, dealer) {
  while (true) { //dealer turn

    if (biggerThanDealerMin(dealer) || isBusted(dealer)) break;
    nextStep('Hit enter to move next');
    dealingCards(deck, dealer);
    displayHand('dealer', dealer);

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

function displayHand(name, hand) {
  prompt(`${name} has:`);
  console.log(hand);
  prompt(`A total of: ${calculatingCards(hand)}`);
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
  return calculatingCards(array) > MAX_NUMBER;
}

function nextStep(msg) {
  prompt(msg);
  readline.question();
}

function biggerThanDealerMin(array) {
  return calculatingCards(array) >= DEALER_MIN;
}

function detectWinner(playerNumber, dealerNumber) {
  if ((MAX_NUMBER - playerNumber) < (MAX_NUMBER - dealerNumber)) {
    return 'player';
  } else if (((MAX_NUMBER - playerNumber) > (MAX_NUMBER - dealerNumber))) {
    return 'dealer';
  } else {
    return null;
  }
}

function displayWinner(whoWon) {
  if (whoWon) {
    prompt(`The winner is ${whoWon}`);
  } else {
    prompt('It is a tie!');
  }
}

function decidingAceValue(arr, total) {
  let aceValTotal = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index][VALUE_INDEX] === 'Ace') {
      if (total + ACE_VALUE_ELEVEN < MAX_NUMBER) {
        aceValTotal += ACE_VALUE_ELEVEN;
      } else {
        aceValTotal += ACE_VALUE_ONE;
      }

    }
  }
  return aceValTotal;
}

function calculatingCards(arr) {
  let total = 0;

  for (let index = 0; index < arr.length; index++) {
    if (!isNaN(Number(arr[index][VALUE_INDEX]))) {
      total += Number(arr[index][VALUE_INDEX]);
    }
    if (isNaN(Number(arr[index][VALUE_INDEX])) &&
      arr[index][VALUE_INDEX] !== 'Ace') {
      total += HDCS_VALUES;
    }
    if (arr[index][VALUE_INDEX] === 'Ace') {
      continue;
    }
  }

  total += decidingAceValue(arr, total);
  return total;
}


function updateScore(winner, score) {
  score[winner]++;
}


function displayScore(score) {
  console.log(score);
}

function whoIsGrandWinner(score) {
  return Object.keys(score).find(key => score[key] === WINNING_SCORE);
}

function isWonMatch(score) {
  return !!whoIsGrandWinner(score);
}

function displayGrandWinner(score) {
  if (whoIsGrandWinner(score)) {
    console.log(`The Grand Winner is: ${whoIsGrandWinner(score)}!!`);
  }
}


function isDone(answer) {
  return !((answer === 'y' || answer === 'yes'));
}


while (true) {

  nextStep(`WELCOME TO ${MAX_NUMBER}! who reaches ${WINNING_SCORE} points first will be The Grand Winner! Hit enter to move next.`);


  let scoreBoard = {
    dealer: 0,
    player: 0
  };

  while (true) {

    console.clear();

    while (true) {

      let mainDeck = initializingCards();
      shuffle(mainDeck);

      let playerCards = [];
      let dealerCards = [];

      dealInitialHands(mainDeck, playerCards, dealerCards);

      playerTurn(mainDeck, playerCards);

      if (isBusted(playerCards)) {
        prompt('Player busted! Dealer won!');
        updateScore('dealer', scoreBoard);
        break;
      }

      displayHand('dealer', dealerCards); //showing delears two cards


      dealerTurn(mainDeck, dealerCards);

      if (isBusted(dealerCards)) {
        prompt('Dealer busted! Player Won!');
        updateScore('player', scoreBoard);
        break;
      }

      //nobody busted. now need to compare
      let winner =
      detectWinner(calculatingCards(playerCards),
        calculatingCards(dealerCards));

      displayWinner(winner);

      if (winner) {
        updateScore(winner, scoreBoard);
      }

      break;

    }

    displayScore(scoreBoard);

    displayGrandWinner(scoreBoard);

    nextStep('Please check the score. Hit enter to move next');

    if (isWonMatch(scoreBoard)) break;


  }

  let playAgainAnswer = getUserAnswer('Do you want to play more?',
    'Invalid, choose "y" or "n"',
    VALID_YES_OR_NO);

  if (isDone(playAgainAnswer)) break;
}