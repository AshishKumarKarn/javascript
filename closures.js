// A closure is created when an inner function captures variables
// from its outer lexical scope. Even after the outer function
//has finished executing, those variables remain accessible to
//the inner function. The is commonly used for data privacy,
//maintaining state and function factories.

function fun() {
  var i = 10;
  return function inner() {
    console.log(i);
  };
}
fun()();
