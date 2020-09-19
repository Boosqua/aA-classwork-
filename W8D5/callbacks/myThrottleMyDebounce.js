
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

// test = test.myThrottle(2000)
// test()
// test()
// class Neuron {
//    fire() {
//       console.log("Firing!");
//    }
// }

// const neuron = new Neuron();


// neuron.fire = neuron.fire.myThrottle(500);
// neuron.fire()
// neuron.fire()
// const interval = setInterval(() => {
//    neuron.fire();
// }, 10);
/*****************************************************************************/
Function.prototype.myDebounce = function(int){
   let currentTimeout = 0;
   return () => {
      clearTimeout(currentTimeout)
      currentTimeout = global.setTimeout( this, int)
   }
}
class SearchBar {
   constructor() {
      this.query = "";

      this.type = this.type.bind(this);
      this.search = this.search.bind(this);
   }

   type(letter) {
      this.query += letter;
      this.search();
   }

   search() {
      console.log(`searching for ${this.query}`);
   }
}

const searchBar = new SearchBar();

const queryForHelloWorld = () => {
   searchBar.type("h");
   searchBar.type("e");
   searchBar.type("l");
   searchBar.type("l");
   searchBar.type("o");
   searchBar.type(" ");
   searchBar.type("w");
   searchBar.type("o");
   searchBar.type("r");
   searchBar.type("l");
   searchBar.type("d");
};
searchBar.search = searchBar.search.myDebounce(500)
queryForHelloWorld();