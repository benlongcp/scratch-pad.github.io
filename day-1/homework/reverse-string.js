// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //reverseString function takes a string as a parameter

  //we'll create an empty array to reverse into
  var strArray = []
  //now we'll iterate through the string with a loop
  for (var index = 0; index < input.length; index++){
      //we'll unshift the string index values into our array
      console.log(input[index]);
      strArray.unshift(input[index]);
  }
  //return the reversed array joined into a string
  console.log(strArray.join(""));
  return strArray.join("");
    
    // YOUR CODE GOES ABOVE HERE //
}

// console.log("reverseString output: " + reverseString("hello"));


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}