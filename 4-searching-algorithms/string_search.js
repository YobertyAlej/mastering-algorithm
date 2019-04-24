"use strict";

/**
 * Count the number of times a smaller string appears in a longer string
 */

const expect = require("expect");
const chalk = require("chalk");

let countSmallerString = (bigger, smaller) => {};

countSmallerString = (bigger, smaller) => {
  // Naive version · substring

  let counter = 0;
  let left = 0;
  let right = smaller.length;

  while (right <= bigger.length) {
    let sub = bigger.substring(left, right);
    if (smaller === sub) {
      counter++;
    }
    left++;
    right++;
  }
  return counter;
};

countSmallerString = (bigger, smaller) => {
  // Naive version · substr

  let counter = 0;
  let left = 0;

  while (left + smaller.length <= bigger.length) {
    let sub = bigger.substr(left, smaller.length);
    if (smaller === sub) {
      counter++;
    }
    left++;
  }
  return counter;
};

expect(countSmallerString("hi my friend", "i")).toBe(2);
expect(countSmallerString("hi my friend", "my")).toBe(1);
expect(countSmallerString("wowomgzomg", "omg")).toBe(2);
expect(countSmallerString("wowomgzomg", "omga")).toBe(0);

console.log(`${chalk.green("All tests have passed")}`);
