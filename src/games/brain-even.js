import mathUtils from '../utils/math.utils.js';
import gameUtils from '../engine/index.js';

const { isEven, randomRange } = mathUtils;

const { createGame } = gameUtils;
const EVEN_ODD_RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionWithAnswer = () => {
  const question = randomRange(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

const brainEven = createGame(
  getQuestionWithAnswer,
  EVEN_ODD_RULES,
);

export default brainEven;
