import readlineSync from 'readline-sync';

const GAME_ROUNDS = 3;
const store = {
  userName: null,
  getQuestionWithAnswer: null,
};

const askUser = () => {
  const { question, answer } = store.getQuestionWithAnswer();

  console.log('Question:', question);
  const input = readlineSync.question('Your answer: ');

  if (input === answer) {
    console.log('Correct!');

    return true;
  }
  console.log(`'${input}' is wrong answer ;(. Correct answer was '${answer}'.`);
  console.log(`Let's try again, ${store.userName}!`);

  return false;
};

const runGameTimes = (count) => {
  let result;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < count; i++) {
    result = askUser(store.getQuestionWithAnswer);
    if (!result) {
      return result;
    }
  }

  return result;
};

const createGame = (getQuestionWithAnswer, rules) => () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log('Hello,', name);

  store.userName = name;
  store.getQuestionWithAnswer = getQuestionWithAnswer;

  console.log(rules);
  const result = runGameTimes(GAME_ROUNDS);
  if (result) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default { runGameTimes, createGame };
