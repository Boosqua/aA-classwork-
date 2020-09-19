const readline = require("readline");

const reader = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
   // Prompt user to tell us whether el1 > el2; pass true back to the
   // callback if true; else false.  
   reader.question(`Is ${el1} greater than ${el2}?\n`, function(yesNo) {
      if (yesNo === "yes" ) {
         callback(true);
      } else {
         callback(false);
      };
   })
}

// askIfGreaterThan(1, 2, askIfGreaterThan)
// Once you're done testing askIfGreaterThan with dummy arguments, write this.


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
   // Do an "async loop":
   // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
   //    know whether any swap was made.
   if (i === arr.length - 1) {
      outerBubbleSortLoop(madeAnySwaps)
   } else {
      askIfGreaterThan(arr[i], arr[i + 1], function(boolean){
         if(boolean) { madeAnySwaps = true;
            let hold = arr[i];        // So we don't lose it
            arr[i] = arr[i + 1];    // Make the second one the first one
            arr[i + 1] = hold;
         }
         i = i + 1
         return innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
      })
   }
   // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i + 
   //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
   //    continue the inner loop. You'll want to increment i for the
   //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
   function outerBubbleSortLoop(madeAnySwaps) {
      if(madeAnySwaps) {
         return innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
      } else {
         sortCompletionCallback(arr);
      }
      // Begin an inner loop if you made any swaps. Otherwise, call
      // `sortCompletionCallback`.
      
   }
   outerBubbleSortLoop(true)
   // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
   console.log("Sorted array: " + JSON.stringify(arr));
   reader.close();
});