const readline = require("readline");

const reader = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

// function addTwoNumbersAsync(callback) { // HW Example
//    reader.question("Enter #1: ", function (numString1) {
//       reader.question("Enter #2: ", function (numString2) {
//          const num1 = parseInt(numString1);
//          const num2 = parseInt(numString2);
//          callback(num1 + num2);
//       });
//    });
// }

function printTotalSum(sum) {
   console.log(`total sum: ${sum}`)
   reader.close();
}

function addNumbers(sum, numsLeft, completionCallback) {
   if ( numsLeft === 0 ) {
      return completionCallback(sum);
   }
   console.log(`Choices Left = ${numsLeft}, Current Sum = ${sum}`)

   input = reader.question("Enter number:", function(numString) {
      input = parseInt(numString);
      sum += input
      numsLeft--
      return addNumbers(sum, numsLeft, completionCallback)
   });
}

addNumbers(0, 5, printTotalSum)