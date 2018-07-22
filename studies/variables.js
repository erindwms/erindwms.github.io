/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type. Variables are powerful because they allow us to utilize the computer's memory.
 * Variables are called so because once created, we can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and assignment.
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. assignment //
myName = 'Erin';
console.log(myName); // prints => Erin

// 3. re-assignment //
myName = 'Denise';
console.log(myName); // prints => Denise

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. hoisting
/* Variables are hoisted to the top of their function scope, or global scope, if they are declared outside of a function.
 * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope.
 */
 
// 5. let
/* The keyword used to declare a block scoped variable is let.
 * Lets are scoped to "if" statements, loops, or functions.
 * Lets are not hoisted to the top of the block of code in which they are declared.
 */
// Example:
let x = 1;
if (x === 1) {
    let x = 2;
    
    console.log(x); // 2 will print to the console since the x = 2 is limited in scope to the block in which it was defined.
}

console.log(x); // 1 will print to the console since x = 1 is in the global scope
// 6. const
/* Const is the keyword to declare a constant.
 * Constants must be assigned at declaration & cannot be re-assigned.
 * Constants are block scope. That means they are scoped to "if" statements, loops, or fucntions.
 * They are not hoisted to the top of the block of code in which they are declared.
 * Use const if the value of the variable isn't expected to change throughout an application.
 * The const declaration created a read-only refrence to a value. Thus the variable identifier cannot be reassigned.
 */
// Example:
const c = 1; 
{ 
  const c = 2;
}  

console.log(c); // logs 1 since the const variable "c" has already been declared uniquely within the global scope.

// Variables can only directly contain primitive values, such as numbers, strings, boolean, null & undefined types.
// Read more about data types in the "data types" section of this page.