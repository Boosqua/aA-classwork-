
// tooSoon = false;
// interval = 5000;
Function.prototype.myThrottle = function(int) {
   let tooSoon = false;
   return () => {
      if(tooSoon === true){
         // console.log("too fast")
      } else {
         tooSoon = true
         global.setTimeout(function() {
         tooSoon = false
         // console.log("hit")
         
         }, int );
         this()
      }
   }
}
function test() {
   console.log("test")
}

test = test.myThrottle(2000)
test()
test()
class Neuron {
   fire() {
      console.log("Firing!");
   }
}

const neuron = new Neuron();
// // When we create a new Neuron,
// // we can call #fire as frequently as we want

// // The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//    neuron.fire();
// }, 10);

// // You can use clearInterval to stop the firing:
// // clearInterval(interval);

// // Using Function#myThrottle, we should be able to throttle
// // the #fire function of our neuron so that it can only fire
// // once every 500ms:

neuron.fire = neuron.fire.myThrottle(500);
neuron.fire()
neuron.fire()
const interval = setInterval(() => {
   neuron.fire();
}, 10);
