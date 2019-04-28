/**
 * Swap a number in an array
 */

let swap = function(arr, idx1, idx2) {};

swap = function(arr, idx1, idx2) {
  // ES5
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

swap = (arr, idx1, idx2) => {
  // ES6
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

module.exports = swap;
