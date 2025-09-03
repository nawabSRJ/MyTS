// #1
function calculate(param1, param2) {
    return param1 + param2;    
}

console.log(calculate(10,20,30)); // completely fine, NO Error, not even at runtime

// #2
function greet(name){
    console.log(name.toUpperCase());
}
greet('Srajan');
greet(null);    // completely fine only at compile time, ERROR at runtime    
greet(undefined);   // completely fine only at compile time, ERROR at runtime