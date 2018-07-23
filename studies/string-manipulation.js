/*
 * STRING MANIPULATION
 *
 * Comparison operators can be used on string values.
 * The concatenation operator (+) takes two string values and returns another
 * string that is the union of the two operand strands.
*/
var a = "Hello";
var b = "World!";
console.log(a + " " + b); // logs "Hello World!"

// += can also be used as shorthand

var message = "Welcome";
message += " to New Orleans!"; // logs "Welcome to New Orleans!"

// The above example is the same as doing:
var message = "Welcome";
message = message + " to New Orleans!"; // logs "Welcome to New Orleans!"

// There are also String Methods that can be used to manipulate strings.

//indexOf() 
// This method returns the first time a certain text shows up in a string.
//lastIndexOf()
/* This method returns the index of the last place a specified text shows up in 
 * a string.
*/

/* Both indexOf() and lastIndexOf() return a -1 if the specific text isn't found.
 * They can also take a 2nd parameter that would represent a starting poing in
 * the search.
*/

/* search()
 * The search() method searches a string for a specific value and returns the 
 * position of the match.
*/

/* Both the indexOf() and search() methods appear equal, but they're not.
 * The search() method cannot take in a starting point parameter like the 
 * indexOf() method. Also the indexOf() method cannot take powerful 
 * search values.
*/ 
// concat()
// The concat() method joins two or more strings.
// The concat() method can be used in place of a '+' to join strings.

// trim()
// The trim() method removes whitespace from both sides of a string.
