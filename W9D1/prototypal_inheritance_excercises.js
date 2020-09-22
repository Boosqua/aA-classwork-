

Function.prototype.inherits = function (parentClass, childClass) {
   const Surrogate= function() {};

   Surrogate.prototype = parentClass.prototype;
   childClass.prototype = new Surrogate();

   childClass.prototype.constructor = childClass;

   // childClass.prototype = Object.create(parentClass.prototype);
   // childClass.prototype.constructor = childClass;
}


class Dog {
   constructor(name) {
      this.name = name;
   }

   woof() {
      console.log("woof");
   }
}

class Cat {
   constructor(color) {
      this.color = color;
   }
}

Function.inherits(Dog, Cat);

console.log(Cat.prototype.__proto__ === Dog.prototype);

