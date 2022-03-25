import gameUtils from '../engine/index.js';
import mathUtils from '../utils/math.utils.js';

const { createGame } = gameUtils;
const { randomRange } = mathUtils;
const PROGRESSION_RULES = 'What number is missing in the progression?';

// eslint-disable-next-line max-len
const arithmeticProgression = (first, step, length) => Array.from({ length }, (_, index) => (index + step) * first);

const getQuestionWithAnswer = () => {
  const length = randomRange(6, 10);
  const progression = arithmeticProgression(randomRange(1, 5), randomRange(1, 5), length);

  const questionPosition = randomRange(1, length - 1);
  const answer = String(progression.splice(questionPosition, 1, '..'));
  const question = progression.join(' ');

  return {
    question,
    answer,
  };
};

const brainProgression = createGame(
  getQuestionWithAnswer,
  PROGRESSION_RULES,
);

export default brainProgression;
