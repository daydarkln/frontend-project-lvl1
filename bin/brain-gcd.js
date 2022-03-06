#!/usr/bin/env node
import gameUtils from '../src/utils/game.utils.js';
import mathUtils from '../src/utils/math.utils.js';
import config from '../src/config.js';

const { createGame } = gameUtils;
const { randomRange } = mathUtils;
const { GAME_ROUNDS, GCD_RULES } = config;

const getQuestionWithAnswer = () => {
  const [a, b] = [randomRange(0, 10), randomRange(0, 10)];

  const question = `${a} ${b}`;
  const answer = a % b;

  return {
    question,
    answer,
  };
};

createGame({
  getQuestionWithAnswer,
  rules: GCD_RULES,
  rounds: GAME_ROUNDS,
});
