//call, apply and bind are methods that allow you to change the context of a function, which is the value of the this keyword inside the function.

//call and apply are used to invoke a function immediately, while bind returns a new function that can be invoked later.

//call and apply are similar, but they differ in how they pass arguments to the function. call takes arguments as a comma-separated list, while apply takes arguments as an array.

//Example of call:
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const person = { name: 'Alice' };
greet.call(person); // Output: Hello, my name is Alice

//Example of apply:
function sum(a, b) {
  return a + b;
}

const numbers = [1, 2];
console.log(sum.apply(null, numbers)); // Output: 3

//Example of bind:
const boundGreet = greet.bind(person);
boundGreet(); // Output: Hello, my name is Alice    

//Another example of bind:
function fun () {
    console.log(this.x);
}
const obj = { x: 10 };
const obj2 = { x: 20 };
const boundFun = fun.bind(obj);
boundFun(); // Output: 10
const boundFun2 = fun.bind(obj2);
boundFun2(); // Output: 20 

boundFun.call(obj2); // Output: 10, call does not change the context of the function, it will still refer to obj
boundFun.apply(obj2); // Output: 10, apply does not change the context of the function, it will still refer to obj  