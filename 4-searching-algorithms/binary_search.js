"use strict";

/**
 * Write a Binary Search Function using pure recursion
 */

const expect = require("expect");
const chalk = require("chalk");

const binarySearch = function(sorted, value, index = 0) {
  // find the middle point
  let middle = Math.floor(sorted.length / 2);

  // recursive case
  if (sorted[middle] > value) {
    // if the current value at the current middle pointer is bigger than the value to be found
    // return recursively with the left part of the array
    return binarySearch(sorted.slice(0, middle), value, index);
  } else if (sorted[middle] < value) {
    // if is less return with the right side of it and the reminded index moved to the right
    return binarySearch(
      sorted.slice(middle + 1, sorted.length),
      value,
      index + middle + 1
    );
  } else if (sorted[middle] !== value) {
    // edge case
    return -1;
  } else {
    //base case
    return index + middle;
  }
};

const handleFatalError = function(e) {
  console.log(`${chalk.red("[fatal error]")}`);
  console.log(e.message);
};

try {
  expect(binarySearch([1, 10, 15, 17, 20, 45], 10)).toBe(1);
  expect(binarySearch([1, 10, 15, 17, 20, 45], 45)).toBe(5);
} catch (e) {
  handleFatalError(e);
  return;
}

console.log(`${chalk.green("All tests have passed")}`);
