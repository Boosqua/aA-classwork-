/*
Instructions
Again, monkey-patch the following methods to the Array class using swell new language we've been learning.

Array#myEach(callback) - receives a callback function and executes the callback for each element in the array
Note that JavaScript's forEach function has no return value (returns undefined)
Array#myMap(callback) - receives a callback function, returns a new array of the results of calling the callback function on each element of the array
should use myEach and a closure
Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives a callback function, and optional initial value, returns an accumulator by applying the callback function to each element and the result of the last invocation of the callback (or initial value if supplied)

initialValue is optional and should default to the first element of the array if not provided
examples:

// without initialValue
[1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}); // => 6

// with initialValue
[1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25); // => 31
should also use myEach

NB [initialValue] is the conventional way for documentation to express that the args between [ and ] are optional inputs. Your function definition will not include these square brackets.
*/

arr1 = [1, 2, 3, 4, 5]

Array.prototype.myEach = function(cb) {
    this.forEach(el => cb(el))

}

function callback(ele){
    console.log("num:" + ele)
}
function callback2(ele){
    return ele * 2;
}
function acc(accumulator, ele){
    return accumulator * ele
}

Array.prototype.myMap = function(cb) {
    let mapped = [];

    this.myEach(ele => mapped.push(cb(ele)));

    return mapped;
}

Array.prototype.myReduce = function(cb, acc){
    let i = 0
    if (acc === undefined) {
        acc = this[0]
        i++
    }
    this.slice(i).myEach(ele => acc = cb(acc, ele))
    return acc
}

arr1.myReduce(acc, -1)