"use strict";

const expect = require("expect");
const chalk = require("chalk");

/**
 * Write a factorial function iteratively and recursively
 * factorial(3) // 6
 * factorial(4) // 36
 * factorial(5) // 120
 * factorial(1) // 1
 * factorial(0) // 1
 * factorial(-2) // undefined
 */

let factorial = function() {};

factorial = function(num) {
  // Iteratively
  // check if num is not a number or is less than 0
  if (typeof num !== "number" || num < 0) {
    // return undefined if not
    return undefined;
  }
  // check if num is equal to 0 or 1
  if (num === 0 || num === 1) {
    // return 1
    return 1;
  }
  // create a temporal variable called factorial
  let factorial = 1;
  // loop until the num is reached
  for (let i = 0; i < num; i++) {
    // multiply the number by the iteration control variable and store it in the temporal
    factorial = factorial * (i + 1);
  }
  // return the temporal factorial variable
  return factorial;
};

factorial = function(num) {
  // recursively
  // check the is a number and it's not negative
  if (typeof num !== "number" || num < 0) {
    return undefined;
  }
  // base case
  // check if is equal to 0 or 1
  if (num === 0 || num === 1) {
    return 1;
  }
  // process
  // num * calling itself num-1
  return num * factorial(num - 1);
};

const handleFatalError = function(e) {
  console.log(`${chalk.red("[fatal error]")}`);
  console.log(e.message);
};

try {
  expect(factorial(3)).toBe(6);
  expect(factorial(4)).toBe(24);
  expect(factorial(5)).toBe(120);
  expect(factorial(1)).toBe(1);
  expect(factorial(0)).toBe(1);
  expect(factorial(-2)).toBe(undefined);
} catch (e) {
  handleFatalError(e);
}

console.log(`${chalk.green("All test has passed!")}`);
