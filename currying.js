//Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions that each take a single argument. This allows for partial application of functions, making it easier to create new functions by fixing some of the arguments.

//Example of currying:
function add(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(3)); // Output: 8
console.log(add5(10)); // Output: 15

// Generalized currying function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Example usage of the curry function
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // Output: 24
console.log(curriedMultiply(2, 3)(4)); // Output: 24
console.log(curriedMultiply(2)(3, 4)); // Output: 24    