
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers_powered = numbers.map((number) =>
  number % 2 == 0 ? number ** 3 : number
);

console.log(numbers_powered);
