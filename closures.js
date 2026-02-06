function fun(){
    var i =10;
    return function inner(){
        console.log(i);
    }
}
fun()();