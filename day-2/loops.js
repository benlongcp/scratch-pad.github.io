// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

//creates a funciton printArrayValues that takes an array as a parameter
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //iterates through the input array with a for loop
  for (var i = 0; i < array.length; i++){
    //prints the current value at the array index to the console.
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

//creates a function that takes an array as a parameter
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //iterate backwards through the loop
  for (var i = array.length - 1; i >= 0; i--){
    //print the value at the array index to the console
    console.log(array[i]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

//creates a function getObjectKeys that takes an object as its parameter
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //create an array to store the keys
  var keyArr = [];
  //iterate through the object with a for in loop
  for (var key in object){
    //pushes the current key value to our keyArr
    keyArr.push(key);
  }
  //returns our keyArr
  return keyArr;
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

//creates a function printOjectKeys that takes an object at its parameter
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //iterate throug the object with a for in loop
  for (var key in object){
    //print the current key to the console
    console.log(key);
  }  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

//creates a function getObjectValues that takes an object at its parameter
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //create an empty array to return later
  var valArr = [];
  //iterate through our input object
  for (var key in object){
    //accesses  the value in the object using the current key and pushes this value to the array
    valArr.push(object[key]);

  }
  
  //returns array populated with object values
  return valArr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

//creates an array that takes an object parameter
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //iterate through the object using a for in loop
  for (var key in object){
    //access the value in the object using the current iterated key and print to the console
    console.log(object[key]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

//create a function that takes an object as a parameter
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //create a counting variable set to 0
  var count = 0;
  //iterate through the object to count its key-value pairs
  for (var key in object){
    //for each key in the object we'll increment the count
    count ++;
  }
  
  //return our counting variable
  return count;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

//creates a funciton that takes an object parameter
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //create an empty array to store the inverted values
  var valueArray = [];
  //iterate through the object
  for (var key in object){
    //unshift the object values into our array (reversing them in the process)
    valueArray.unshift(object[key])
  }
  //make a for loop to iterate through the array and print the values to the console.
  for (var i = 0; i < valueArray.length; i++){
    console.log(valueArray[i]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}