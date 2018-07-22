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
