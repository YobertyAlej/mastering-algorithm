/**
 * Write a function which takes in a string and returns
 * counts of each character in the string
 *
 * Strategy:
 *
 * · Start with simple examples
 * · Progress to more complex examples
 * · Explore examples with Empty Inputs
 * · Explore examples with Invalid Inputs
 */

/**
 * Concrete examples
 * charCount("aaaa"); // {a: 4}
 * charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}
 * charCount("my phone number is 0747965"); // ?? Should spaces be account?, how about the numbers?
 * charCount("Hello Hi"); // ?? Does the uppercasing matter?
 * charCount(); // ?? What should be the return output?
 * charCount(""); // ?? What should be the return output?
 * charCount(" "); // ?? What should be the return output?
 * charCount(undefined); // ?? What should be the return output?
 * charCount(null); // ?? What should be the return output?
 * charCount([]); // ?? What should be the return output?
 * charCount({}); // ?? What should be the return output?
 *
 */

let charCount = function() {};

charCount = function(str) {
  //first iteration
  //do something
  //return an object with keys that are alphanumeric characters in the string; values should be the count for those characters
};

charCount = function(str) {
  //second iteration · @YobertyAlej's approach (Observations: You didn't take account for details, such as the sanity of the inputs)
  //make the object that will be return
  let characters = {};
  //loop over the str characters and
  let len = str.length;
  for (let i = 0; i < len; i++) {
    //  check if character exist as key in the object to be return
    if (!characters.hasOwnProperty(str[i].toLowerCase())) {
      characters[i] = 0;
    }
    //  increment the value of the key
    characters[i]++;
  }
  //return the object
  return characters;
};
charCount = function(str) {
  //Third iteration · @YobertyAlej's approach with attention to details.
  //check if the input is valid value (It's a string and it's not empty), if is not a valid input, return false
  if (typeof str !== "string" || str.length === 0) {
    return false;
  }
  //if is a valid input
  //make the object that will be return
  let characters = {};
  //loop over the input characters and
  let len = str.length;
  for (let i = 0; i < len; i++) {
    //  check if the char is a number/letter AND check if the lowercased character exist as key in the object to be return
    if (str[i].match(/[a-zA-Z0-9]/)) {
      if (!characters.hasOwnProperty(str[i].toLowerCase())) {
        characters[str[i].toLowerCase()] = 0;
      }
      //  increment the value of the key
      characters[str[i].toLowerCase()]++;
    }
  }
  //return the object
  return characters;
};

let result = null;
result = charCount("aaaa"); // {a: 4}
result = charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}
result = charCount("my phone number is 0747965"); // ?? Should spaces be account?, how about the numbers?
result = charCount(undefined); // ?? What should be the return output?

console.log(result);
