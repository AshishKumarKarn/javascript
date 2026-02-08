// Prototypal Inheritance in JavaScript
// In JavaScript, objects can inherit properties and methods from other objects through a mechanism called prototypal inheritance. Each object has an internal property called [[Prototype]], which can point to another object. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null).

function Animal() {}
Animal.prototype.speak = function () {
  console.log("Some sound");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  console.log("Woof");
};

const d = new Dog();
d.speak(); // inherited via prototype chain
d.bark();
