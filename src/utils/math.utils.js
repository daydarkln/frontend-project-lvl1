const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const isEven = (value) => value % 2 === 0;

export default {
  randomRange,
  isEven,
};
