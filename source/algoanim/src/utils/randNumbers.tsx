const randNumbers = (n: number, max: number) => {
  return new Array(n).fill(0).map(() => {
    return Math.floor(Math.random() * max);
  });
};

export default randNumbers;
