/**
 * Write a recursive function that takes a number and countdowns to 0
 *
 * countdown(2); //2,1,All Done!
 * countdown(10); //10,9,8,7,6,5,4,3,2,1,All Done!
 * countdown(false); //null
 * countdown([]); //null
 * countdown(-1); //null
 * countdown(); //null
 */

let countdown = function() {};

countdown = function(num) {
  //YobertyAlej's Approach
  //check the input is a number and it's major to 0, otherwise return null
  if (typeof num !== "number" || num < 0) {
    return null;
  }
  //define our base case (when the number it's equal to 0), print "All Done!" and return;
  if (num === 0) {
    console.log("All Done!");
    return;
  }
  //print the number
  console.log(`${num}, `);
  //call recursively the countdown function using the num reduced by 1
  countdown(num - 1);
};

let result = null;
//result = countdown(2); //2,1,All Done!
result = countdown(10); //10,9,8,7,6,5,4,3,2,1,All Done!
//result = countdown(false); //null
//result = countdown([]); //null
//result = countdown(-1); //null
//result = countdown(); //null

console.log(result);
