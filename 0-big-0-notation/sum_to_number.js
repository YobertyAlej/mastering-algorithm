/**
 * Write a function that calculates the sum of all numbers
 * from 1 up to (and including) n
 *
 */

// Fisrt implementation by @YobertyAlej
const sum = function(n) {
  // O(n)
  let accumulator = 0;

  for (let i = 1; i <= n; i++) {
    accumulator += i;
  }
  return accumulator;
};

const sumByInstructor = function(n) {
  // O(1)
  return (n * (n + 1)) / 2;
};

console.log(sum(100)); // This one is slower
console.log(sumByInstructor(100)); // This one is faster

/**
 * First one runs slower
 * Second one runs faster,
 *
 * But, it's time a good measurement metric?
 *
 * If we count the number of simple operations in each
 * algorithms we found a CONSTANT number for measuring
 *
 * The first algorithm will get us around 5n + 2 operations
 * The second algorithm will get us exactly 3 operations
 *
 * Thus, the second algorithm performs better.
 */
