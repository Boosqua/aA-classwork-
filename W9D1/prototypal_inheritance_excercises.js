

Function.prototype.inherits = function (parentClass, childClass) {
   const Surrogate= function() {};
   debugger
   Surrogate.prototype = parentClass.prototype;
   childClass.prototype = new Surrogate();

   childClass.prototype.constructor = childClass;

   // childClass.prototype = Object.create(parentClass.prototype);
   // childClass.prototype.constructor = childClass;
}


function Dog(name) {

      this.name = name;
   

   this.woof = function() {
      console.log("woof");
   }
}

function Cat(color) {
   
      this.color = color;
  
}

Function.inherits(Dog, Cat);

console.log(Cat.prototype.__proto__ === Dog.prototype);
console.log(Cat.prototype);
console.log( Dog.prototype);
new Dog('blue').woof()
