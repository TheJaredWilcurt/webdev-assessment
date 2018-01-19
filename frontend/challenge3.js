
/*
  CHALLENGE #3: Logic Tests

  It's okay if you don't finish all of these, just get as far as you can.
  You may use an ES6+ features or none at all.
  You should avoid looking up answers outside of refernecing MDN.


  REGARDING WRITING TESTS FOR CHALLENGE #3:

  The following is in regards to testing. Writing tests is optional. Only read this section if you
  will be writing tests for your functions.

  A simple test file (`challenge3-tests.html`) has been provided that pulls the Jasmine framework
  (https://jasmine.github.io/2.8/introduction) from a CDN. The test can be ran by opening the
  `challenge3-tests.html` file in a browser. Tests can be written in this js file like the example
  below (for the `add` function).

  You may use any ES6+ features you like (or none at all). However, if you write tests using the
  supplied `challenge3-tests.html` or a similar browser-based test runner, ensure your tests can be
  ran in the latest version of at least one major browser. If you use a different test framework
  you must provide instructions on how to run your tests.
*/


/*
  Sample Jasmine test
*/

function add (num1, num2) {
  // Uncomment the next line to make the test pass
  // return num1 + num2;
}

describe('add', () =>  {
  it('should correctly add two numbers', () => {
    expect(add(1, 3)).toEqual(4);
  });
});








/*
  1. Reverse a String:
  Write a function that accepts a string and returns the string reversed.
*/

function reverseAString (forwardString) {

}








/*
  2. Remove Dupes:
  Write a function that takes an array and returns the distinct values only.
*/

function findDistinctValues (nonDistinct) {

}








/*
  3. Truncate a string:
  Write a function that only accepts strings for the first argument and numbers for the second argument.
  Based on the number passed in, return that many characters of the string, starting from the first character.
  Append 3 periods to the end of the returned string.
  Return an empty string if the first argument is empty or not a string.
  Return the original string if the second argument is not a number or no second argument is passed in.
*/

function truncateAString (str, num) {

}








/*
  4. Sorting Objects
  Write a function that takes in an array of objects as the first argument and a string as the second.
  Return the array of objects sorted in ascending order by the field name denoted by the string argument.
  You can assume that all objects in the array will have the field name that was passed in the string argument.

  Example:
  let unsorted = [
    { name: 'Tim', age: 32 },
    { name: 'Linda', age: 31 },
    { name: 'Dorothy', age: 33 }
  ];
  let sorted = sortObjects(unsorted, 'age');
  console.log(sorted); // [{name: 'Linda', age: 31}, {name: 'Tim', age: 32}, {name: 'Dorothy', age:33}]
*/

function sortObjects (users, sortBy) {

}








