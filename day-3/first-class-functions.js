// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

/*

I: base case that is probably a number
O: funciton that checks if a parameter is greater than the base case.
C
E

*/

function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return a function that takes one parameter value
    return function(value){
        //function returns a boolean value depending on the comparison
        return value > base;
    }
   
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //return a function that takes on parameter value
    return function(value){
        //function checks if input value is less than the base case and returns a boolean value
        return value < base;
    }
   
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */

//creates a function that takes one character as a parameter
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //returns a function that takes a string as its parameter
    return function(string){
        //returns  a boolean value that checks if the lowercased first character of the string matches the lowercased startsWith parameter
        return string[0].toLowerCase() === startsWith.toLowerCase();
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
//creates a function that takes a single character as a parameter
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //returns a funciton that takes a string as a parameter
    return function(string){
        //return a boolean value that checks if the lowercased last character of the string matches the lowercased endsWith parameter
        return string[string.length -1].toLowerCase() === endsWith.toLowerCase();
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    //create boolean placeholder 
    var neuStrings = [];
    //loop through our input string array to access each string to perform the modify function on
    for (var index = 0; index < strings.length; index ++){
        //for each iterated string, perform the modify method and push the result to the neuStrings array
        neuStrings.push(modify(strings[index]));
    }

    //return our array of modified strings
    return neuStrings;


    
    // YOUR CODE ABOVE HERE //
}





/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */



function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    /*
    I - takes an array of strings and a test function
    O - outputs a boolean value as to whether or not the strings all pass the test funciton
    C
    E

    */

    //loops through the array strings
    for (var i = 0; i < strings.length - 1; i++){
        //if, for each iterated string with the test method on it, one resolves to be false, return false
        if (test(strings[i]) === false){
            return false;
        }
    } 
    //if we've made it through our array with no false values, then we return true
    return true


    //allStringsPass(['ben', 'long'], function(string){ return string[0] === 'b'}])
    
    
    // YOUR CODE ABOVE HERE //
}


















// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}