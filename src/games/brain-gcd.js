import gameUtils from '../utils/game.utils.js';
import mathUtils from '../utils/math.utils.js';
import config from '../config.js';

const { createGame } = gameUtils;
const { randomRange } = mathUtils;
const { GAME_ROUNDS, GCD_RULES } = config;

const getGcd = (first, second) => {
  let a = first;
  let b = second;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const getQuestionWithAnswer = () => {
  const [a, b] = [randomRange(1, 100), randomRange(1, 100)];

  const question = `${a} ${b}`;
  const answer = String(getGcd(a, b));

  return {
    question,
    answer,
  };
};

const brainGcd = createGame({
  getQuestionWithAnswer,
  rules: GCD_RULES,
  rounds: GAME_ROUNDS,
});

export default brainGcd;
