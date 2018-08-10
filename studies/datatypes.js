/*
 * DATA TYPES
 *
 * 0. Data types is how different types of data are categorized in JavaScript. 
 * A type of value is a data type.
 * There are both simple (also known as primitive) and complex data types. 
 * Simple data types include: number,
 * string, boolean, NaN, undefined, and null. 
 * Complex data types include: object, array, and function.
*/

// 1. SIMPLE (OR PRIMATIVE)

/* Number - a numeric value
 * +Infinity - numeric value that represents positive infinity
 * -Infinity - numberic value that represents negative infinity
 * String - character data in single or double quotes
 * boolean - true/false
 * NaN - Not a Number
 * undefined - no value, uninitialized/undeclared
 * null - no value, nullified by a programmer
*/

/* These data types are simple because they are immutable, which means they do 
 * not hold, collect, or aggregate other values. 
 * Operations on simple values return new simple values, they do not change the 
 * original values.
 * Simple data types copy by value. When assigning or passing, simple data types 
 * are copied from one variable to the next.
*/

// EXAMPLE OF COPIED BY VALUE
var a = 1;
var b = a; // the value stored in "a" is now copied into "b"

// 2. COMPLEX 
/* 1. Object - a collection of key:value pairs.
 * The syntax for creating an object literal is curly {} brackets.
 * Commas seperate key:value pairs.
 * A key inside of an object is a string.
 *
 * EXAMPLE OF AN OBJECT
*/
var object = {
    "name": "Madison",
    "food": "gumbo"
};

// Dot or bracket notation are used to access the values from an object.

/*
 * 2. Array - a zero-indexed collection of values.
 * Commas are used in arrays to list different values.
 * An array can hold more than one value at a time.
 * The syntax for creating an array literal is square [] brackets.
 * Bracket notation is to access a particular item inside of an array.
 *
 * EXAMPLE OF AN ARRAY
*/
var array = [3, "Aidan", 45, true];

/*
 * 3. Function - performs actions on data & return them.
 * Functions are reusable blocks of code.
 * When JavaScript reaches a return statement, the function will stop executing.
 * Functions often compute a return value.
 * The return value is "returned" to the caller.
 * The number of arguments given to the Function should be the same as the 
 * number of parameters given at the Function declaration.
 *
 * EXAMPLE OF A FUNCTION
*/
function add(num1, num2) {  
    // (num1, num2) are the parameters, seperated by a comma
    return num1 + num2; 
    // the code to be executed
}

add(2, 4);   // the function being called, (2, 4) are the arguments

/* These data types are complex because they aggregate other vaules and 
 * therefore are of indefinite size.
 * Complex data types copy by reference.  When assigning or passing, complex 
 * data types are passed by refrence.
*/

// EXAMPLE OF COPIED BY REFRENCE
var a = {one: "bunny"};
var b = a;
/* The value stored in "b" is a refrence to the value stored in "a". 
 * Both "a" & "b" point to the same object.
*/ 
b.one = "bar";
console.log(a.one); //prints "bar"
/* Changing the value at "b" effects all refrences because the value is 
 *refrenced to the same object.
*/ 

