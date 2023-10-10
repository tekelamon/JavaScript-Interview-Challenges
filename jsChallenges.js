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

/**
 * 2)
 * Write a function that takes an array and returns a new array that
 * removes repeated elements from the array and filters out numbers and sorts in alphabetical order.
 * console log the response
 */

/**
 * 3)
 * Write a function that takes a string and returns "true" if it is a palindrome and "false" if it is not.
 * A palindrome is a word that is spelled the same way forwards and backwards.
 * Try to write two different solutions, one with array methods and one with a for loop
 * Input can have cap
 */

/**
 * 4)
 * Write a function that takes two strings and returns "true" if the words are an anagram and "false" if they are not.
 * An anagram is a word formed by rearranging the letters of another, such as "cinema", formed from "iceman".
 */
