import readlineSync from 'readline-sync';

import gameUtils from '../src/utils/game.utils.js';
import mathUtils from '../src/utils/math.utils.js';
import config from '../src/config.js';

const { createGame } = gameUtils;
const { randomRange } = mathUtils;
const { GAME_ROUNDS, GCD_RULES } = config;

const store = {
  userName: null,
};

const logError = (message) => {
  console.log(message);
  console.log("Let's try again,", store.userName);
};

const getQuestionWithAnswer = () => {
  const [a, b] = [randomRange(0, 10), randomRange(0, 10)];

  const question = `${a} ${b}`;
  const answer = a % b;

  return {
    question,
    answer,
  };
};

const askGcd = (name) => () => {
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
  gameLogic: askGcd,
  rules: GCD_RULES,
  rounds: GAME_ROUNDS,
});
