/* 
 * LOOPS
 * Loops tell a block of code how many times to repeat itself.
 * 
 * "while" loops
 * A "while" loop runs while a specified condition is true & stops once that 
 * condition is no longer true.
 *
 * Example of a while loop:
*/
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++
}

/* "for" loops
 * A "for" loop runs for a specific number of times. They are declared with
 * 3 expressions seperated by a semicolon.
 * The three expressions declared in a "for" loop are the starting point, 
 * the condition statement and the final statement.
 * The starting point is executed one time before the loop starts. It is used to
 * set up the loop variable.
 * The condition statement is evaluated at the beginning of each loop iteration
 * and will continue as long as it evaluates to true.
 * If the condition starts off as false the loop will not execute.
 * The final statement is executed at the end of each loop iteration before
 * the condition statement is checked again. The final statement normally 
 * increases or decreases the loop count.
 *
 * Example of a for loop:
 */
var myArray = [];
for (var i = 0; i < 5; i++) {
    myArray.push(i);
}

/* To count backwards in a loop the 3 expressions would have to be formatted
 * different. An example of a loop going backwards:
*/
var myArray = [];
for (var i = 0; i > 0; i -= 1) {
    myArray.push(i);
}    
    
/* A common task in JavaScript is to go through the contents of an array. One 
 * way to do that is with a "for" loop. 
*/

/* The 'for...in' loops through the properties of an object. 
 * For each distinct property, JavaScript executes the specified statements. 
 * An example of a "for...in" statement:
*/

var person = {fname:"Erin", lname:"Denise", age:32}; 

var text = "";
var x;
for (x in person) {
    text += person[x] + " ";
}

// The block of code inside the loop will be executed once for each property.