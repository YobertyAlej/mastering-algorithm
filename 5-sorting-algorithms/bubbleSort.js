"use strict";

const expect = require("expect");
const chalk = require("chalk");
const handleFatalError = require("../utils/handleFatalError");
const swap = require("./swap");

/**
 * Bubble Sort Implementation using recursion
 * bubbleSort([37,45,29,8,12,88,-3])
 */

const bubbleSort = arr => {
  // largest bubbles to the end of the array
  // by swapping

  // base
  if (arr.length === 1) {
    return arr;
  }

  let swapCounter = 0;
  // loop through the elements of the arr
  for (let i = 0; i < arr.length - 1; i++) {
    // compare two paired elements

    if (arr[i] > arr[i + 1]) {
      // if the left is bigger swap it
      swap(arr, i, i + 1);
      swapCounter++;
      // the element already swaped gets sliced from the array
    }
  }

  // edge case
  if (swapCounter === 0) {
    return arr;
  }
  // the remaining array gets recursively recalled
  // the swaped elements gets concated at the end

  // recursive
  return bubbleSort(arr.slice(0, -1)).concat(arr[arr.length - 1]);
};

try {
  let input = [37, 45, 29, 8, 12, 88, -3];
  let output = [-3, 8, 12, 29, 37, 45, 88];
  expect(bubbleSort(input)).toEqual(output);
} catch (e) {
  return handleFatalError(e);
}

console.log(`${chalk.green("All test has passed!")}`);
