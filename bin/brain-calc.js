#!/usr/bin/env node
import readlineSync from 'readline-sync';

import gameUtils from '../src/utils/game.utils.js';
import mathUtils from '../src/utils/math.utils.js';
import config from '../src/config.js';

const { GAME_ROUNDS, CALC_RULES } = config;
const { createGame } = gameUtils;
const { randomRange } = mathUtils;

const store = {
  userName: null,
};

const logError = (message) => {
  console.log(message);
  console.log("Let's try again,", store.userName);
};

const getQuestionWithAnswer = () => {
  const operators = {
    plus: {
      operator: '+',
      operatorFn: (a, b) => a + b,
    },
    minus: {
      operator: '-',
      operatorFn: (a, b) => a - b,
    },
    times: {
      operator: '*',
      operatorFn: (a, b) => a * b,
    },
  };

  const args = [randomRange(0, 10), randomRange(0, 10)];

  const { operator, operatorFn } = Object.values(operators)[randomRange(0, 2)];
  const question = args.join(` ${operator} `);
  const answer = operatorFn(...args);

  return {
    question,
    answer,
  };
};

const askCalc = (name) => () => {
  store.userName = name;
  const { question, answer } = getQuestionWithAnswer();
  console.log('Question:', question);
  const input = readlineSync.question('Your answer: ');
  if (Number(input) === answer) {
    return true;
  }
  logError(`'${input}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

createGame({
  gameLogic: askCalc,
  rules: CALC_RULES,
  rounds: GAME_ROUNDS,
});
