/**
 * 1) In what order will the numbers 1-4 be logged to the
 * console when the code below is executed? Why?
 */

(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();

// Solution:
// 1,4,3,2 - js will run line by line top to bottom
// therefore 1 and 4 will print as soon as they are reached
// setTimeout will make the printing of 2 and 3 async,
    // but 3 will print before 2 because the timer is shorter
// our final order in printing is then: 1,4,3,2

// ---------------------

/**
 * 2)
 * Write a function that takes an array and returns a new array that
 * removes repeated elements from the array and filters out numbers and sorts in alphabetical order.
 * console log the response
 */

// assuming to take in a new array for usage
function uniqueAndSorted(arr) {

    // holds unique values
    const new_arr = [];

    for(const i of arr) {
        // if this is a new entry
        if( !new_arr.includes(i) ) {
            // add to array
            new_arr.push(i);
        }
    }

    // filter out numbers
    const filtered_arr = new_arr.filter( x => typeof x !== "number" );

    // sort alphabetical
    filtered_arr.sort();

    console.log( filtered_arr );
    return; // void
}

const test = [2,3,4,5,'d','c','b','a','a','a','b','b','c'];
console.log( "sorted and filtered array: ");
uniqueAndSorted(test);

/**
 * 3)
 * Write a function that takes a string and returns "true" if it is a palindrome and "false" if it is not.
 * A palindrome is a word that is spelled the same way forwards and backwards.
 * Try to write two different solutions, one with array methods and one with a for loop
 * Input can have cap
 */

function palindrome(str) {
    // unsure of how to write this with strictly array functions, but I'm sure there's an easy way
    // the only solutions coming to mind are low level abstractions with loops, i.e.

    // compare each position for equivalence to it's corresponding piece ( naturally/intuitively )
    // interuptions are the exception to the rule

    // first remove capitalization
    str = str.toLowerCase();

    // then search from beginning to middle
    for(let i = 0; i < str.length / 2; i++) {
        // compare the position at the distance traveled, to the same distance traveled from the opposite end
        // basically walking from the ends to meet in the middle
        if(str[i] !== str[( str.length - 1 - i )]) { return false; }
    }

    // if the entire word can be parsed and no issues are found, then we must have a palindrome
    return true;
}

// for testing ouptut
console.log( "palindrome: ", palindrome("Racecar") );

/**
 * 4)
 * Write a function that takes two strings and returns "true" if the words are an anagram and "false" if they are not.
 * An anagram is a word formed by rearranging the letters of another, such as "cinema", formed from "iceman".
 */

function anagram(str1,str2) {
    // the only true comparison between anagrams is the fact that they have all the same characters
    // this includes type and quantity, they are special because of their lack of order
    // following this logic, any order the characters are written in would still be a valid representation of
    // the original anagram because we are searching for alternate combinations
    // this holds true even if the current assembly is not technically a word

    // therefore we can sort each word and directly compare the results, this narrows the possibilities of the input
    // which allows for a blanket comparison that will hold all possible solutions

    // first split string into an array, then sort the array, and join the string back together
    const compare1 = str1.split("").sort().join("");
    const compare2 = str2.split("").sort().join("");

    // the resulting strings will be equal if they are anagrams of each other
    return compare1 === compare2 ? true : false;
}

// for testing ouptut
console.log( "anagram: ", anagram("cinema","iceman") )
