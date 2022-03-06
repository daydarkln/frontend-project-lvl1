#!/usr/bin/env node
import gameUtils from '../src/utils/game.utils.js';
import mathUtils from '../src/utils/math.utils.js';
import config from '../src/config.js';

const { createGame } = gameUtils;
const { randomRange, isPrime } = mathUtils;
const { GAME_ROUNDS, PRIME_RULES } = config;

const getQuestionWithAnswer = () => {
  const question = randomRange(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

createGame({
  getQuestionWithAnswer,
  rules: PRIME_RULES,
  rounds: GAME_ROUNDS,
});
