/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "Dog";
animal["name"] = "Teddy";
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[noises.length] = "woof";
noises.push("pant");
noises.unshift("whimper");
noises[noises.length] = "slurp";
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
noises.push("bow wow");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Bracket notation & dot notation.
 *
 * 2. What are the different ways of accessing elements on arrays?
 * Bracket notation.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
    species: "Duck",
    name: "Jerome",
    noises: ['Quack', 'Honk', 'Sneeze', 'Woosh']
};
animals.push(duck);
console.log(animals);

var pig = {
    species: "Pig",
    name: "Pearl",
    noises: ["Oink", "Slurp", "Squeal"]
};
animals.push(pig);

var cat = {
    species: "Cat",
    name: "Domino",
    noises: ["Meow", "Purr"]
};
animals.push(cat);

console.log(animals);

pig["Friends"] = "Domino";

console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* I choose the data type array.
*/ 
var friends = [];

function getRandom(animals) {
  return Math.floor(Math.random() * Math.floor(animals.length));
}
console.log(getRandom(animals));

var randFriend = animals[getRandom(animals)].name;
friends.push(randFriend);
console.log(friends);


animals[getRandom(animals)].friends = friends;
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
