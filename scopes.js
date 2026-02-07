//var is function scoped. while let and const are blocked scoped

function a() {
  if (true) {
    var x = 10; //if changed to let/const it will give reference issue
  }
  console.log(x);
}
a(); //prints 10

//so it prints 3 3 3 not 0 1 2 as the value at the time of execution
// is already increased to 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//to fix this we can use let instead of var as it is block scoped and will create a new scope for each iteration of the loop
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//alternatively we can use an IIFE to create a new scope for each iteration of the loop
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}
//note that all the execution will happen after 1 second
//IIFE is an Immediately Invoked Function Expression, it is a function that is executed immediately after it is defined. It is used to create a new scope and avoid polluting the global scope. It can also be used to create a closure and maintain state.

//Hoisting
// var is hoisted to the top of its scope and initialized with undefined,
//while let and const are hoisted but not initialized. This means that if you try to access a variable declared with var before it is declared, it will return undefined, while if you try to access a variable declared with let or const before it is declared, it will throw a ReferenceError.