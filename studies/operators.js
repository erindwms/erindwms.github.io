/* 0. OPERATORS
 * 
 * Operators act on our data.
 * They assign a value, compare data, and are included in arithmetic operations.
 * Opeartors are classified by what they do and how many operatands they require.
 *
 * Operands are the values the operators act on.
 *
 * Unary operators only work with one value.
 * Binary operators only work with two values.
 * Ternary operators only work with three values.
*/

/* 1. ARITHMETIC OPERATORS
 * Order of operations apply with arithmetic operators.
 * They are binary operators because they work with two operands.
*/

// EXAMPLES OF ARITHMETIC OPERATORS

// + addition
console.log(2 + 7); // logs 9
// - subtraction
console.log(3 - 2); // logs 1
// * multiplication
console.log(3 * 2); // logs 6
// / division
console.log(6 / 3); // logs 2
// % mondulo (remainder of division)
console.log(4 % 3); // logs 1
 

/* 2. COMPARISON OPERATORS
 * Compares 2 operands and return a boolean value, true or false.
*/ 

// EXAMPLES OF COMPARISON OPERATORS
// < less than
console.log(3 < 6); // logs true
// > greater than
console.log(6 > 3); // logs true
// >= greater than or equal to
console.log(3 >= 2); // logs true
// <= less than or equal to
console.log(4 <= 2); // logs false
// === strict comparison (takes into account value and type)
console.log(2 === 2); // logs true
// == non - strict comparison
console.log("6" == 6); // logs true

/* 3. LOGICAL OPERATORS
 * Logical operators are typically used with boolean values. When they are, they
 * return a boolean value. 
*/

// EXAMPLES OF LOGICAL OPERATORS
// && is the "and" operator, both conditions must resolve to be true
console.log(1 < 2 && 1 > 0); // logs true

// || is the "or" operator, one of the other must resolve to be true
console.log(2 < 2 || 1 > 0); // logs true
console.log(4 === 4 || 3 < 2); // logs true

// ! is the "bang" operator, it flips the truthiness of a value
console.log(!true); // logs false
console.log(!false); // logs true

/* 4. UNARY OPERATORS
 * Only operator that works with one operand.
*/ 

/* The "typeof" operator returns a string indicating the type of the unevaluated
 * operand entered.
*/ 
console.log(typeof "music"); // logs "string"

// The "negation" operator takes its operand and negates it (makes it negative).
var x = 3;
x = -x; // x = -3
// The "negation" operator can also conver non-numbers into a number.
var x = "4";
x = -x; // x = -4

/* CONDITIONAL (TERNARY) OPERATOR
 * Only JavaScript operator to use 3 operands. The ternary operator takes place 
 * of an "if" statement. 
*/

function getFree(isMember) {
    return (isMember ? "$2.00" : "$10.00"); 
    // if a member, return $2.00, else $10.00
}
console.log(getFree(true)); // logs $2.00

/* 5. ASSIGNMENT OPERATORS
 * Assigns a value to the left operand based on the value of the right operand.
*/

// EXAMPLES OF ASSIGNMENT OPERATORS
// = assigns value to a variable
var b = 10;
// += additional assignment
var b = 10;
console.log(b += 5); // logs 15
// -= subtraction assignment
console.log(b -= 5); // logs 5
// *= multiplication assignment
console.log(b *= 5); // logs 50
// /= division assignment
console.log(b /= 2);  // logs 5
// %= renainder assignment 
console.log(b %= 4); // logs 2

