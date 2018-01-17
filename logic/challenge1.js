
/*
  CHALLENGE #1: Logic Tests

  If you find yourself struggling with some of these questions come back to them
  after you've worked on the Frontend or Backend challenges you were assigned.
  It's okay if you don't finish all of these, just get as far as you can.

  You may use any ES6+ features you like (or none at all), as long as the `test-runner.html`
  file in this folder runs successfully in the latest stable version of Chrome, Firefox or Edge.

  All functions should be tested. A simple test file (`test-runner.html`) has been provided that pulls
  the Jasmine framework (https://jasmine.github.io/2.8/introduction) from a CDN. The tests can be run by
  opening the `test-runner.html` file in a browser. Tests can be written inline like in the example
  below for the `add` function.

  If you prefer, you can set up any other test framework you are familiar with, as long as you provide
  instructions on how to run your tests.
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
  2. Find Minimum Value:
  Write a function that accepts an array of numbers and returns the number with the lowest value.
*/

function findMinimumValue (numbers) {

}








/*
  3. Remove Dupes:
  Write a function that takes an array and returns the distinct values only.
*/

function findDistinctValues (nonDistinct) {

}








/*
  4. Fizz Buzz:
  Write a function that logs the numbers from 1 to 100 to the console.
  For multiples of three print "Fizz" instead of the number.
  For multiples of five print "Buzz".
  For numbers which are multiples of both three and five print "FizzBuzz".
*/

function doFizzBuzz () {

}








/*
  5. Temperatures to English:
  Write a function that accepts a temperature from 0 - 112.
  Match the temperature ranges to these words.
    * 0-17  | Frostbite Warning
    * 18-32 | Freezing
    * 33-45 | Very Cold
    * 46-64 | Cold
    * 65-75 | Pleaseant
    * 76-85 | Hot
    * 86-99 | Very Hot
    * 100+  | Heat Wave
  Return the matching English phrase that describes the temperature.
*/

function temperatureFeelsLike (temperature) {

}








/*
  6. Truncate a string:
  Write a function that only accepts strings for the first argument and numbers for the second argument.
  Based on the number passed in, return that many characters of the string, starting from the first character.
  Append 3 periods to the end of the returned string.
  Return an empty string if the first argument is empty or not a string.
  Return the original string if the second argument is not a number or no second argument is passed in.
*/

function truncateAString (str, num) {

}








/*
  7. URL Validation
  Write a function that accepts a string and returns a boolean.
  Here are examples of valid and invalid strings.

  These should pass:
    'http://example.com'
    'http://example.org'
    'https://www.example.com'
    'http://www.example.net'
    'https://example.com'

  These should fail:
    'example.com'
    'www.example.com'
    'www.example'
    'ftp://example.com'
    'The quick brown fox'
*/

function validateURL (url) {

}








/*
  8. Exception Handling
  Write a function that takes in a string and tries to parse it using the global `JSON.parse(...)` method. Return the
  parsed object if the parsing succeeds, otherwise return `null`.
*/

function handleBadJSON (jsonString) {

}








/*
  9. Sorting Objects
  Write a function that takes in an array of objects as the first argument and a string as the second.
  Return the array of objects sorted in ascending order by the field name denoted by the string argument.
  You can assume that all objects in the array will have the field name that was passed in the string argument.

  Example:
  let unsorted = [{name: 'Tim', age: 32}, {name: 'Linda', age: 31}, {name: 'Dorothy', age:33}]
  let sorted = sortObjects(unsorted, 'age')
  console.log(sorted) // [{name: 'Linda', age: 31}, {name: 'Tim', age: 32}, {name: 'Dorothy', age:33}]
*/

function sortObjects (users, sortBy) {

}








/*
  10. Make a new Neighbor:

  Fill in the object constructor with the following methods below:

  getFirstName();            // should return "Fred"
  getLastName();             // should return "Rogers"
  getFullName();             // should return "Fred Rogers"
  setFirstName(first);
  setLastName(last);
  setFullName(firstAndLast);

  You can assume that only strings will be passed in, and that the "firstAndLast" argument will only ever
  contain one space and will always contain a first and last name in that order.
*/

let Neighbor = function (firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return '';
  };
  return firstAndLast;
};

let mrRogers = new Neighbor('Fred Rogers');
mrRogers.getFullName();








