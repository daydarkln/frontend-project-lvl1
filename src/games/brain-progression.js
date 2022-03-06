import gameUtils from '../utils/game.utils.js';
import mathUtils from '../utils/math.utils.js';
import config from '../config.js';

const { createGame } = gameUtils;
const { randomRange } = mathUtils;
const { GAME_ROUNDS, PROGRESSION_RULES } = config;

// eslint-disable-next-line max-len
const arithmeticProgression = (first, step, length) => Array.from({ length }, (_, index) => (index + step) * first);

const getQuestionWithAnswer = () => {
  const length = randomRange(6, 10);
  const progression = arithmeticProgression(randomRange(1, 5), randomRange(1, 5), length);

  const questionPosition = randomRange(1, length - 1);
  const answer = String(progression.splice(questionPosition, 1, '..'));
  const question = progression.join(', ');

  return {
    question,
    answer,
  };
};

const brainProgression = createGame({
  getQuestionWithAnswer,
  rules: PROGRESSION_RULES,
  rounds: GAME_ROUNDS,
});

export default brainProgression;
