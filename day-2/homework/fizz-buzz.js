// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/


//creates a function fizzBuzz that takes no parameters
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //iterate through 100 indices 
    for (var i = 1; i <= 100; i++){
        //if index i is divisible by both 3 and 5, print FizzBuzz
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        //if index is divisible by only 3, print Fizz
        } else if (i % 3 === 0){
            console.log("Fizz");
            //if index is divisible by only 5 print Buzz
        } else if (i % 5 === 0){
            console.log ("Buzz")
            //otherwise print the index
        } else {
            console.log(i);
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}