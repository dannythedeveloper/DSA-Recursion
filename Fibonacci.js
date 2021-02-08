/* eslint-disable strict */

/* Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13. */

function fibonacciNumber(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return (fibonacciNumber(n - 1) + fibonacciNumber(n - 2));
}

console.log(fibonacciNumber(7)); // 13
console.log(fibonacciNumber(4)); // 3