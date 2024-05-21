// #!/usr/bin/env node

'use strict';

const { reverse } = require("lodash");

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */


//creates a function "length" that takes a single stringular parameter 
function length(string) {
    // YOUR CODE BELOW HERE //
    //return the length property of the input parameter
    console.log(string.length);
    return string.length;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
I - takes a string as input
O - returns a string as output
C - n/a
E - n/a
*/

//creates a function toLowerCase that takes an input string
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //return the string with lowercase characters using toLowerCase method
    console.log(string.toLowerCase());
    return string.toLowerCase();




    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

//creates a function that takes a string as a parameter
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //returns the output of the toUpperCase method on the string parameter
    console.log(string.toUpperCase());
    return string.toUpperCase();



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

//creates a function toDashCase that takes a string as its input
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //creates a variable splitz and assigns it to the value of the string split into an array at the spaces
    
    var splitz = string.split(" ");
    console.log("splitz", splitz);
    //return the rejoined array with dashes
    //and apparently it needs to be lower case?
    console.log(splitz.join("-"));
    return splitz.join("-").toLowerCase();




    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    //if the lowercaser version of the char is equal to the lowercased 0th index of the string, returns true
    console.log(char, string[0])
    if (char.toLowerCase() === string[0].toLowerCase()){
        return true;
    //else returns false.
    } else{
        return false;
    }
}//and don't forget the last curly bracket
console.log(beginsWith('Glockenspiels', 'g'))
    

    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //if the lowercase version of the char is equal to the lowercased last index of the string, returns true
    if (char.toLowerCase() === string[string.length - 1].toLowerCase()){
        return true;
    } else {
        return false;
    }
    //effectively identical to beginsWith, but switching the index from 0th to the length of the string minus one.




    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
//creates a function that takes two string argruments
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //returns concatenated stringOne and stringTwo with the + operator
    return stringOne + stringTwo;



    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //the above has stored the strings in an array
    //now we'll return these adjoined strings separated by "" (nothing)
    return args.join("");



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //if the length of stringOne is greater than the length of stringTwo, return stingOne
    if (stringOne.length > stringTwo.length){
        return stringOne;
        //if the length of stringTwo is greater than the length of sstringOne, return stringTwo
    } else if (stringTwo.length > stringOne.length){
        return stringTwo;
        //if the lengths are equal, return "equal"
    } else {
        return 'equal';
    }
}

console.log(longest("bob", "janice"))


    // YOUR CODE ABOVE HERE //


/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
//create a function taking two string parameters
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //if stringOne is higher alphabetically, return 1
    if (stringOne < stringTwo){
        return 1;
    //if stringTwo is higher alphabetically, return -1
    } else if (stringOne > stringTwo){
        return -1;
    //if they're the same return 0
    } else{
        return 0;
    }

    // YOUR CODE ABOVE HERE //
}

console.log("sortAscending Result: ", sortAscending("az", "aa"));



/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
//creates a fucntion that takes two strings as parameters
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //if stringOne is lower alphabetically, return -1
    if (stringOne < stringTwo){
        return -1;
    } else if (stringOne > stringTwo){
        //if stringOne is higher alphabetically, return 1
        return 1;
    } else {//if stringOne and stringTwo are equal, returns 0
        return 0;
    }

    // YOUR CODE ABOVE HERE //
}


//reverseString function takes a string as a parameter
function reverseString(string){
    //we'll create an empty array to reverse into
    strArray = []
    //now we'll iterate through the string with a loop
    for (var index = 0; index < string.length; index++){
        //we'll unshift the string index values into our array
        console.log(string[index]);
        strArray.unshift(string[index]);
    }
    //return the reversed array joined into a string
    return strArray.join("");
}

console.log("reverseString output: " + reverseString("hello"));

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}