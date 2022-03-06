import readlineSync from 'readline-sync';

import gameUtils from '../src/utils/game.utils.js';
import mathUtils from '../src/utils/math.utils.js';
import config from '../src/config.js';

const { createGame } = gameUtils;
const { randomRange, isPrime } = mathUtils;
const { GAME_ROUNDS, PRIME_RULES } = config;

const store = {
  userName: null,
};

const logError = (message) => {
  console.log(message);
  console.log("Let's try again,", store.userName);
};

const getQuestionWithAnswer = () => {
  const question = randomRange(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

const askPrime = (name) => () => {
  store.userName = name;
  const { question, answer } = getQuestionWithAnswer();
  console.log('Question:', question);
  const input = readlineSync.question('Your answer: ');
  if (input === answer) {
    return true;
  }
  logError(`'${input}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

createGame({
  gameLogic: askPrime,
  rules: PRIME_RULES,
  rounds: GAME_ROUNDS,
});
