"use strict";

const expect = require("expect");
const chalk = require("chalk");
const swap = require("./swap");

/**
 * Selection Sort Implementation using recursion
 * selectionSort([37,45,29,8,12,88,-3])
 */

const selectionSort = arr => {
  // minimum value in the array gets selected and shifted to the beginning

  // base
  if (arr.length === 1) {
    return arr;
  }

  // store the position/index of the smallest element in the array
  let smallestIdx = 0;
  // loop through the arr
  for (let i = 0; i < arr.length; i++) {
    // compare the minimum to the next element
    // if is smallest, store the index
    if (arr[i] < arr[smallestIdx]) {
      smallestIdx = i;
    }
  }
  // swap the element in the first index to the smallest element index
  swap(arr, 0, smallestIdx);

  // recursively call the function without the first element (the smallest)
  // and concat at the end that element
  return [arr[0], ...selectionSort(arr.slice(1))];
};

const handleFatalError = function(e) {
  console.log(`${chalk.red("[fatal error]")}`);
  console.log(e.message);
};

try {
  let input = [37, 45, 29, 8, 12, 88, -3];
  let output = [-3, 8, 12, 29, 37, 45, 88];
  expect(selectionSort(input)).toEqual(output);
} catch (e) {
  return handleFatalError(e);
}

console.log(`${chalk.green("All test has passed!")}`);
