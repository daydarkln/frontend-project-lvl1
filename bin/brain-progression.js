import readlineSync from 'readline-sync';

import gameUtils from '../src/utils/game.utils.js';
import mathUtils from '../src/utils/math.utils.js';
import config from '../src/config.js';

const { createGame } = gameUtils;
const { randomRange } = mathUtils;
const { GAME_ROUNDS, PROGRESSION_RULES } = config;

const store = {
  userName: null,
};

const logError = (message) => {
  console.log(message);
  console.log("Let's try again,", store.userName);
};

// eslint-disable-next-line max-len
const arithmeticProgression = (first, step, length) => Array.from({ length }, (_, index) => (index + step) * first);

const getQuestionWithAnswer = () => {
  const length = randomRange(5, 10);
  const progression = arithmeticProgression(randomRange(1, 5), randomRange(1, 5), length);

  const questionPosition = randomRange(1, length - 1);
  const answer = progression.splice(questionPosition, 1, '..');
  const question = progression.join(', ');

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
  if (Number(input) === Number(answer)) {
    return true;
  }
  logError(`'${input}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

createGame({
  gameLogic: askGcd,
  rules: PROGRESSION_RULES,
  rounds: GAME_ROUNDS,
});
