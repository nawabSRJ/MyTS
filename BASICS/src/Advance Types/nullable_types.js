function greet(name) {
    if (name)
        return "Hello, ".concat(name.toUpperCase(), "!");
    else
        return 'Hello, Guest!';
}
console.log(greet('Srajan')); // Hello, Srajan!
console.log(greet(null)); // Hello, Guest!  
console.log(greet(undefined)); // Hello, Guest!
// ! Note :
// If we remove the union types, the function will throw an error if we pass null or undefined.
// This is because TypeScript expects a string, and null/undefined are not strings.
// * Nullable types are useful when we want to allow a variable to be explicitly set to null or undefined,
// which can be useful for representing optional values or when a value is not yet known.
// todo : You can try this by removing the union types and see the error in your IDE.
// * Reminder : .toUpperCase() is a method available on string types only, BUT JS will not pose any compile time error even if null is passed (refer : #2 in check.js )
