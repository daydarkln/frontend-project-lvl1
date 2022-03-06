import mathUtils from '../utils/math.utils.js';
import config from '../config.js';
import gameUtils from '../utils/game.utils.js';

const { isEven, randomRange } = mathUtils;

const { createGame } = gameUtils;
const {
  EVEN_ODD_RULES, GAME_ROUNDS,
} = config;

const getQuestionWithAnswer = () => {
  const question = randomRange(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

const brainEven = createGame({
  getQuestionWithAnswer,
  rules: EVEN_ODD_RULES,
  rounds: GAME_ROUNDS,
});

export default brainEven;
