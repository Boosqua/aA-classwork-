function  range(start, end) {
    if (start === end){ // base case
        return [end]; 
    }

    return [start].concat(range(start + 1, end));
}

console.log(range(1, 10))
function sumRec(arr) {
    if (arr.length === 1){
        return arr[0]
    } else if (arr.length === 0 ) {
        return 0
    }
    return arr[0] + sumRec(arr.slice(1));
}
// console.log(sumRec([]));

function exponent(base, exp) {
    if (exp === 1){
        return base;
    } else if (exp === 0) {
        return 1;
    } else if (exp < 0) {
        return 1.0 /( base * exponent(base, -1 * exp - 1));
    }
    return base * exponent(base, exp - 1);
}
function exponentForFun(base, exp) {
    if (exp < 0) { //basecases
        return 1 /(exponentForFun(base, -1 * exp));
    } else if (exp === 0) {
        return 1;
    }

    
    if (exp % 2 === 0){
        return exponentForFun(base, exp / 2) ** 2;
    } else {
        return base * (exponentForFun(base, (exp - 1) / 2) ** 2);
    }
}
console.log(exponent(2, 3));
console.log(exponent(2, 0));
console.log(exponent(2, -2));
console.log(exponent(2, 1));
console.log('------------')
console.log(exponentForFun(2, 3));
console.log(exponentForFun(2, 0));
console.log(exponentForFun(2, -2));
console.log(exponentForFun(2, 1));

function fib(n) {
    if (n < 2) {
        return n === 1 ? 1 : 0;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(0), fib(1), fib(2), fib(3), fib(4), fib(5), fib(6));

function deepDup(arr) {
    if (!Array.isArray(arr)){
        return [arr];
    }
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (Array.isArray(ele)) {
            res = [].concat(res, deepDup(ele))
        } else {
            res.push(ele);
        }
    }

    return res;
}

