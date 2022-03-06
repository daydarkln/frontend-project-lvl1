import gameUtils from '../utils/game.utils.js';
import mathUtils from '../utils/math.utils.js';
import config from '../config.js';

const { createGame } = gameUtils;
const { randomRange } = mathUtils;
const { GAME_ROUNDS, GCD_RULES } = config;

const getQuestionWithAnswer = () => {
  const [a, b] = [randomRange(0, 10), randomRange(0, 10)];

  const question = `${a} ${b}`;
  const answer = String(a % b);

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
