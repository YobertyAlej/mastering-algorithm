/**
 * Implement a function called countUniqueValues, which accepts
 * a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but will always
 * be sorted.
 *
 * countUniqueValues([1,1,1,1,1,2]) //2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,13]) //7
 * countUniqueValues([]) //0
 * countUniqueValues([-2,-2,-1,2,4]) //4
 *
 */

let countUniqueValues = function() {};

countUniqueValues = function(sortedArray) {
  // first iteration · @YobertyAlej
  // check if is an array
  if (!Array.isArray(sortedArray)) {
    return undefined;
  }
  // check if is not empty
  if (sortedArray.length === 0) {
    return 0;
  }
  // create 2 pointers
  let first = 0;
  let second = 0;
  // iterate over the array and
  while (sortedArray.length > second) {
    //[1, 1, 1, 1, 1, 2] //2
    // move the second pointer to the right
    second++;
    // if the values of the pointers don't match
    if (sortedArray[first] !== sortedArray[second]) {
      // move the first pointer one step to the right and place the value of the second there
      first++;
      sortedArray[first] = sortedArray[second];
    }
    console.log(first, second);
  }
  return first;
};

let result = null;
//result = countUniqueValues([1, 1, 1, 1, 1, 2]); //2
//result = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 13]); //7
//result = countUniqueValues([]); //0
result = countUniqueValues([-2, -2, -2, -1, 2, 4]); //4
console.log(result);
