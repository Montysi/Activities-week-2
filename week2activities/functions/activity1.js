// const factorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(33));

// ---------------------------------------------------------------

const factorial = (n) => {
  return n <= 1 ? 1 : n * factorial(n - 1);
};

console.log(factorial(33));
