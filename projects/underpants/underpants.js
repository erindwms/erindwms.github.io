// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
// parameters are anything
_.identity = function(anything)  {
    // when the function is called return anything unchanged
    return anything;
};

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
// parameters are anything (any data type)
_.typeOf = function(anything) {
    // if anything is an array
    if (Array.isArray(anything)) {
        // return the string array
        return "array";
    }
    // if anything equals null
    if (anything === null) {
        //return null
        return "null";
    }
    // if anything is any other data type
    else {
        // return a string stating what data type anything is
        return typeof anything;
    }
    
};

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function (array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    if (!number || Number.isNaN(number)) {
        return array[0];
    }
    else {
        return array.slice(0, number);
    }
};

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = (array, number) => {
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    if (!number || Number.isNaN(number)) {
        return array[array.length - 1];
    }
    if (number > array.length) {
        return array;
    }
    else {
        return array.slice(array.length - number, array.length);
    }
    
 
    
};

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = (collection, action) => {
    // check if collection is an array
    // if collection is an array
    if (Array.isArray(collection)) {
        // loop through array
        for (var i = 0; i < collection.length; i++) {
            //perform action on each element, index, collection
            action(collection[i], i, collection);
        }
    }    
    // check if collection is an object
    // if collection is an object
    else if (typeof collection === "object") {
        //loop through object
        for (var key in collection) {
            //perform action on value, key, collection
            action(collection[key], key, collection);
        }
    }    
};

/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = (array, value) => {
  for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
          return i;
        }
      }
  return -1;
 };


/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
 

_.filter = (array, action) => {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      if (action(array[i], i, array)) {
          newArray.push(array[i]);
      }
        
    }
    
        return newArray;
    };    


/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
// is given an array and function
_.reject = (array, action) => {
   // the new array equals _.filter going over my given array and my new function that passes the arguments
   // element, index, and array
   var newArray = _.filter(array, function (element, index, array) {
    // if action on my element, index, and array are equal to false    
        if (action(element, index, array) === false) {
            // return true; i want those elements
            return true;
            //else return false; i dont want those elements
        } else {
            return false;
        }
    });
    // return my newArray to have the elements I want in my new Array
    return newArray;

};

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = (array, action) => {
    var newArray = [[],[]];
    for (var i = 0; i < array.length; i++) {
       if (action(array[i], i, array)) {
          newArray[0].push(array[i]);
    }
    else if (!action(array[i], i, array)) {
            newArray[1].push(array[i]);
    }
    }
    return newArray;
};    
    

/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = (array) => {
    var newArray = [];
    _.each(array, function(i){
       if (_.indexOf(newArray, i) === -1) {
           newArray.push(i);
       }
    });
    return newArray;
   
};
    
        
    


/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = (collection, action) => {
    var newArray = [];
if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
        newArray.push(action(collection[i], i, collection));
       }   
      } else if (typeof collection === "object") {
            for (var key in collection)
              newArray.push(action(collection[key], key, collection));
    }
        
      return newArray;
        
    
};

/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = (collection, property) => {
    return _.map(collection, (value, position, collection) => {
        return value[property];
      });
  
};

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = (array, value) => {
    return _.indexOf(array, value) === -1 ? false : true;    
     };   
        
    
    



/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = (collection, action) => {
var x;
  //if function isn't provided, return true if every element is truthy
  //otherwise return false
    if (!action) {
        //use a function to loop over the collection to check if object or array
        x = _.map(collection, function(element, index, collection) {
            if (!element) {
                return false;
            }
                    return true;
      });
   
    } else {
    //if function is provided, call function for every element in the collection
        x = _.map(collection, function(element, index, collection) {
            return action(element, index, collection);
     });
     
   }
    //loop through x array if any one of the elements are false
     if (_.contains(x, false)) {
    //return false
        return false;
    }
    //if every element is true, return true
        return true;
};

/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

//a collection and a function is given
_.some = (collection, action) => {
    var y;
    //if a function isn't provided return true if at least one element is truthy
    //otherwise return false
    if (!action) {
        y = _.map(collection, function(element, index, array){
            if (!element) {
                return false;
            }
                //other wise return false
                return true;
        });
    } else {
        // if function is provided call function for every element in the collection
       y = _.map(collection, function(element, index, array) {
            return action(element, index, array);
        });
    }
    //loop through the y array and if any of the elements are true
    if (_.contains (y, true)) {
        //return true
        return true;
    }
        //return false
        return false;
    
};

/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = (array, action, seed) => {
    
}

/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = () => {
    
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
