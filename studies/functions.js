/* FUNCTIONS
 * 
 * A function is a complex data type. 
 * A function is also a reusable piece of code.
 * The cool thing about functions is that they can be a value within 
 * another function. 
 *
 * A function performs an action and returns the result of that action.
 *
 * Function syntax:
*/
function functionName (parameter1, parameter2) {
    return; // code to be executed within the curly braces
}

/* The above exampe is the keyword "function" then the name of the function, 
 * it's parameters within the parenthesis, and the return statement.
 *
 * A function should have the same amount of arguments as it does parameters
 * when it's called. A function is called like so:
*/

functionName();

/* A function's arguments are the values received by the function when it is 
 * called/executed/invoked (all three words mean the same thing).
 * Output depends only on the arguments that are input to a function.
 * Once JavaScript reaches a return statement the function will stop.
 * Functions often compute a return value.
 * The return value is "returned" back to the caller.
*/ 

/* CLOSURES
 * A closure is a function (outer function) that contains another function (inner
 * function). The inner function has access to the outer function's parameters
 * and variables, but the outer function does not have the same access.
*/

/* Closure scope chain:
 * access to it's own scope (variables defined between it's {})
 * access to the outer functions variables
 * access to the global variables
*/

// Example:

function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
function makeFullName() { // this function has access to showName's variables
    return nameIntro + firstName + lastName;
        
    }
    return makeFullName();
}
showName("Erin", "Williams"); //Your name is Erin Williams

/* Closure rules:
 *
 * Closures have access to the outer function's variables even after the outer
 * function returns.
 * Closures store refrences to the outer function's variables, they do not 
 * store the actual value.
 * Since closures have access to the updated values of the outer function's 
 * variables they can lead to bugs when the outer function's variables change
 * during a "for" loop.
*/

/* HIGHER ORDER FUNCTIONS
 * 
 * A higher order function is a function that uses another function as a 
 * parameter.
 * A function that can return a function is also a higher order function.
*/

/* .filter is a method on the array object that takes another function as an 
 * argument & uses that function to filter the array.
 * .map is another higher order function that goes through an array.
 * Using .map to return a subset of an object is a common usage pattern.
*/

/* ARROW FUNCTIONS
 * 
 * Arrow functions is basically an update of E5 that is used in E6, the syntax
 * looks like this:
*/

var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(element => {
  return element.length;
}); 
    
