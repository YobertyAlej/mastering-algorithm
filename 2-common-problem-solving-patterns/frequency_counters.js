/**
 * Write a function called same, which accepts two arrays.
 *
 * The function should return true if every value in the array has
 * its corresponding value squared in the second array. The frequency
 * of values must be the same.
 */

/**
 * Concrete examples:
 *
 * same([1,2,3], [4,1,9]) //true
 * same([1,2,3], [1,9]) //false
 * same([1,2,3], [4,4,1]) //false (must be same frequency)
 */

let same = function() {};

same = function(arr1, arr2) {
  //check if the lengths differ, for fast short circuit
  if (arr1.length !== arr2.length) {
    return false;
  }

  //check if the values are both valid arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  //init the two frequency counters
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //loop over both arrays separately in order to count the frequency of their values
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  //loop over the first array and
  for (let key in frequencyCounter1) {
    //check if the squared key exist in the second array
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    //check if the values (their frequency) match
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  //return true if they checks get passed
  return true;
};

/**
 * Write a function to determine if the second string is an anagram of the first
 *
 * An Anagram is a word, phrase, or name formed by rearranging the letters of
 * another, such as cinema is an anagram of iceman
 */

/**
 * validAnagram('', '') //true
 * validAnagram('aaz', 'zza') //false
 * validAnagram('anagram', 'nagaram') //true
 * validAnagram('rat', 'car') //false
 * validAnagram('textwithtime', 'timewithtext') //false
 */

let validAnagram = function() {};

validAnagram = function(str1, str2) {
  //check if the inputs are valid strings, return false if not
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return false;
  }
  //check if the lenghts differ, return false if not
  if (str1.length !== str2.length) {
    return false;
  }
  //create the frequencyCounters
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  let char = null;
  //loop separately over both of the strings and
  for (char of str1) {
    //check if a letter already exist in the frequency counter
    //count the frequency of the letters
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (char of str2) {
    //check if a letter already exist in the frequency counter
    //count the frequency of the letters
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  //loop over the first frequencyCounter and
  for (let key in frequencyCounter1) {
    //check if the keys exist in second frequency counter
    if (!key in frequencyCounter2) {
      return false;
    }
    //check if the values matches in the second frequency counter
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
};

let result = null;
//result = validAnagram("", ""); //true
//result = validAnagram("aaz", "zza"); //false
//result = validAnagram("anagram", "nagaram"); //true
//result = validAnagram("rat", "car"); //false
result = validAnagram("textwithtime", "timewithtext"); //false

console.log(result);
