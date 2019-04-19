/**
 * Write a function called maxSubarraySum which accepts an array of
 * integers and a number called n. The function should calculate the
 * maximum sum of n consecutive elements in the array.
 *
 * maxSubarraySum([1,2,5,2,8,1,5], 2) //10
 * maxSubarraySum([1,2,5,2,8,1,5], 4) //17
 * maxSubarraySum([4,2,1,6], 1) //6
 * maxSubarraySum([4,2,1,6,2], 4) //13
 * maxSubarraySum([], 4) //null
 */

let maxSubarraySum = function() {};

maxSubarraySum = function(arr, n) {
  //check if is an array and it's not empty
  if (!Array.isArray(arr) && arr.length === 0) {
    return null;
  }
  //create a variable called max, which will store the maximum sum
  let max = 0;
  //create a variable called temp, for comparision purposes
  let temp = 0;
  //loop over the beginning until we reach the n and
  for (let i = 0; i < n; i++) {
    //sum the numbers in order to create our first max "window"
    max += arr[i];
  }
  temp = max;
  //in a separate operation, loop over the rest of the array and
  for (let i = n; i < arr.length; i++) {
    //substract the very first number at the beginning of our window and add the next number at the end of our window and sotre it in the temp
    temp = temp - arr[i - n] + arr[i];
    //store the largest number
    max = Math.max(temp, max);
    console.log(temp, max);
  }
  //return the maximum sum stored
  return max;
};

let result = null;
//result = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); //10
result = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); //17
//result = maxSubarraySum([4, 2, 1, 6, 2], 4); //13
console.log(result);
