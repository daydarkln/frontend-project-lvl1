import gameUtils from '../engine/index.js';
import mathUtils from '../utils/math.utils.js';

const { createGame } = gameUtils;
const { randomRange } = mathUtils;
const GCD_RULES = 'Find the greatest common divisor of given numbers.';

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

const brainGcd = createGame(
  getQuestionWithAnswer,
  GCD_RULES,
);

export default brainGcd;
