function sumES5() {
   let args = Array.prototype.slice.call(arguments);
   let total = 0;

   for( let i = 0; i < args.length; i++ ) {
      total += args[i];
   }

   return total;
}
// console.log( sum(1, 2, 3, 4) );
function sumES6(...args) {
   let total = 0;

   for (let i = 0; i < args.length; i++) {
      total += args[i];
   }

   return total;
}
// console.log( sumES6(1, 2, 3, 4) );

Function.prototype.myBind = function (instanceOfClass) {
   // debugger
   let args = Array.prototype.slice.call(arguments);
   // args = args.slice(1);
   return (...otherArgs) => {
      // debugger
      this.call(...args, ...otherArgs)
   };
};



// class Cat {
//    constructor(name) {
//       this.name = name;
//    }

//    says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//    }
// }

// class Dog {
//    constructor(name) {
//       this.name = name;
//    }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
// newSays = markov.says.myBind(pavlov, 'meow', 'kush');
// newSays('meow', 'kush')
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

Function.prototype.curry = function(n) {
   // let limit = 0;
   // let values = []
   // const that = this;
   // debugger
   // return function hold2(arg) {
   //    // debugger
   //    values.push(arg)
   //    limit++
   //    if ( n === limit ) {
   //       // debugger
   //       return that(...values)
   //    } else { 
   //       // debugger
   //       // console.log(this)
   //       return hold2;
   //    }
   // }
   
   let that = this;
   let count = 0;
   let values = [];
   const hold = function (num) {
      count++;
      values.push(num);

      if (count === n ) {
         return that(...values);
      } else {
         return hold;
      }
   }

   return hold;
};

function sumThree(num1, num2, num3) {
   return num1 + num2 + num3;
}

// sumThree(4, 20, 6); // == 30

// // you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1)

// // or more briefly:
// 

function curriedSum(n) {
   let numbers = [];
   let count = 0;

   return function nSumCurry(num) {
      numbers.push(num);
      count++;

      if ( count === n ) {
         return sumES6(...numbers);
      } else {
         return nSumCurry;
      }
   } 
};

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56
// function Counter() {
//    this._count = 0;
// }

// Counter.prototype.fire = function () {
//    this._count += 1;
//    return this._count;
// }

// let counter1 = new Counter();
// counter1.fire(); // 1
// counter1.fire(); // 2
// counter1._count // 2
// counter1._count = 0 // 0 (this works);