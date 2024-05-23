// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //returns a boolean value using the Array.isArray method
    return Array.isArray(value);


    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //if value is not an array and not null, and and not a date object, but is still and object
    if (Array.isArray(value) === false && value !== null && Object.prototype.toString.call(value) !== "[object Date]" && typeof value === 'object'){
        // console.log('is an object')
        //return true
        return true;
    } else {
        //otherwise return false
        return false;
    }

    
    // YOUR CODE ABOVE HERE //
}
// var today = new Date;
// // var nul = null;
// // console.log(isObject(nul));
// console.log(isObject(today));


/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //if value is  not null, and and not a date object, but is still an object
    if (value !== null && Object.prototype.toString.call(value) !== "[object Date]" && typeof value === 'object'){
        // console.log('is an object')
        //return true
        return true;
    } else {
        //otherwise return false
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 


function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //if it's null, return null
    if (value === null){
        return 'null';
    //if it's a date, return date
    } else if (value instanceof Date){
        return 'date';
    //if it's an array, return array
    } else if (Array.isArray(value) === true){
        return 'array'
    //if it's anything else, return the typeof property
    } else {
        console.log(typeof value);
        return typeof value;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}