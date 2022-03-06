const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const isEven = (value) => value % 2 === 0;
const isPrime = (value) => {
  let start = 2;
  const limit = Math.sqrt(value);
  while (start <= limit) {
    if (value % start < 1) return false;
    start += 1;
  }
  return value > 1;
};

export default {
  randomRange,
  isEven,
  isPrime,
};
