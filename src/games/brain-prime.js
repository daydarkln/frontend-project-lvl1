import gameUtils from '../engine/index.js';
import mathUtils from '../utils/math.utils.js';

const { createGame } = gameUtils;
const { randomRange, isPrime } = mathUtils;
const PRIME_RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionWithAnswer = () => {
  const question = randomRange(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

const brainPrime = createGame(
  getQuestionWithAnswer,
  PRIME_RULES,
);

export default brainPrime;
