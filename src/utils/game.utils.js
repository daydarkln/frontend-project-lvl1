import cli from '../cli.js';

const { greating } = cli;

const runGameTimes = (callback, count) => {
  let result;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < count; i++) {
    result = callback();
    if (!result) {
      return result;
    }
  }
  return result;
};

const createGame = ({ gameLogic, rules, rounds }) => {
  const name = greating();

  console.log(rules);
  const result = runGameTimes(gameLogic(name), rounds);
  if (result) {
    console.log('Congratulations! You have answered correctly all the questions');
  }
};

export default { runGameTimes, createGame };
