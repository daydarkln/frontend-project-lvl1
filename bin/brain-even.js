#!/usr/bin/env node
import readlineSync from 'readline-sync';

import cli from '../src/cli.js';
import utils from '../src/utils/math.utils.js';
import config from '../src/config.js';

const { greating } = cli;
const {
  ERROR_MESSAGE_EVEN, ERROR_MESSAGE_ODD, ERROR_MESSAGE_INCORRECT, EVEN_ODD_RULES,
} = config;

// local consts
const EVEN = 'even';
const ODD = 'odd';

// Application store
const store = {
  userName: null,
};

// help utils
const isEvenWrongAnswer = (ask, answer) => utils.isEven(ask.question) && answer === 'no' && ask.answer === EVEN;
const isOddWrongAnswer = (ask, answer) => !utils.isEven(ask.question) && answer === 'yes' && ask.answer === ODD;
const isCorrectAnswer = (value) => ['yes', 'no'].includes(value);

const logError = (message) => {
  console.log(message);
  console.log("Let's try again,", store.userName);
};

const askIsEven = () => {
  const randomValue = utils.randomRange(0, 100);
  const ask = {
    question: randomValue,
    answer: utils.isEven(randomValue) ? EVEN : ODD,
  };

  console.log('Question:', ask.question);

  const answer = readlineSync.question('Your answer: ');

  if (isEvenWrongAnswer(ask, answer)) {
    logError(ERROR_MESSAGE_EVEN, store.userName);
    return false;
  }

  if (isOddWrongAnswer(ask, answer)) {
    logError(ERROR_MESSAGE_ODD, store.userName);
    return false;
  }

  if (!isCorrectAnswer(answer)) {
    logError(ERROR_MESSAGE_INCORRECT, store.userName);
    return false;
  }

  console.log('Correct!');
  return true;
};

const askIsEvenTimes = (count) => {
  let result;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < count; i++) {
    result = askIsEven();
    if (!result) {
      i = count + 1;
    }
  }
  return result;
};

// game
const checkEvenOdd = () => {
  greating();

  console.log(EVEN_ODD_RULES);
  const result = askIsEvenTimes(3);
  if (result) {
    console.log('Congratulations! You have answered correctly all the questions');
  }
};

checkEvenOdd();
