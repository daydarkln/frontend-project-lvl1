import readlineSync from 'readline-sync';

import cli from '../cli.js';

const store = {
  userName: null,
};

const logError = (message) => {
  console.log(message);
  console.log("Let's try again,", store.userName);
};

const { greating } = cli;

const ask = (getQuestionWithAnswer) => {
  const { question, answer } = getQuestionWithAnswer();
  console.log('Question:', question);
  const input = readlineSync.question('Your answer: ');
  if (input === answer) {
    console.log('Correct!');
    return true;
  }
  logError(`'${input}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

const runGameTimes = (getQuestionWithAnswer, count) => {
  let result;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < count; i++) {
    result = ask(getQuestionWithAnswer);
    if (!result) {
      return result;
    }
  }
  return result;
};

const createGame = ({ getQuestionWithAnswer, rules, rounds }) => () => {
  const name = greating();
  store.userName = name;

  console.log(rules);
  const result = runGameTimes(getQuestionWithAnswer, rounds);
  if (result) {
    console.log('Congratulations! You have answered correctly all the questions');
  }
};

export default { runGameTimes, createGame };
