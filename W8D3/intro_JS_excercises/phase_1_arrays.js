/*

Monkey-patch the following methods to the Array class. Remember, we want to use prototype here.

Array#uniq - returns a new array containing each individual element of the original array only once (creating all unique elements)
the elements should be in the order in which they first appear in the original array
should not mutate the original array
([1,2,2,3,3,3].uniq() => [1,2,3])


Array#twoSum - returns an array of position pairs where the elements sum to zero
Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
should not mutate the original array
load phase_1_arrays.js
*/
let arr1 = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5]
let arr2 = [-1, 1, 4, 6, -6, 7, -4, -4, 5]
Array.prototype.uniq = function() {
    let newArray = [];

    this.forEach( (ele) => {
      if (!newArray.includes(ele)){
        newArray.push(ele)
      };   
    });

    return newArray;
}

Array.prototype.twoSum = function() { 
    let sumPairs = [];
    let i = 0;

    for(;i < this.length - 1; i++){ //watch this :D
        for(let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0){
                sumPairs.push([i, j])
            };
        }
    }

    return sumPairs;
}
Array.prototype.transpose = function() {
    let transposed = []
    let i = 0
    while (i < this.length){
        i++
        transposed.push([])
    }
    let k = 0
    for(; k < this.length; k++){
        for(let j = 0; j < this.length; j++){
            transposed[j].push(this[k][j])
        }
    }
    return transposed
}