import gameUtils from '../engine/index.js';
import mathUtils from '../utils/math.utils.js';

const CALC_RULES = 'What is the result of the expression?';
const { createGame } = gameUtils;
const { randomRange } = mathUtils;

const getQuestionWithAnswer = () => {
  const operators = {
    plus: {
      operator: '+',
      operatorFn: (a, b) => a + b,
    },
    minus: {
      operator: '-',
      operatorFn: (a, b) => a - b,
    },
    times: {
      operator: '*',
      operatorFn: (a, b) => a * b,
    },
  };

  const args = [randomRange(0, 10), randomRange(0, 10)];

  const { operator, operatorFn } = Object.values(operators)[randomRange(0, 2)];
  const question = args.join(` ${operator} `);
  const answer = String(operatorFn(...args));

  return {
    question,
    answer,
  };
};

const brainCalc = createGame(
  getQuestionWithAnswer,
  CALC_RULES,
);

export default brainCalc;
