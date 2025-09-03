// enums allow us to define set of named constants. They make it easy to create a set of distinct cases.

// They can be numeric of string based


// ! problem - To set the constants for the different T-Shirt sizes

// * Without enums : 
const small = 1;
const medium = 2;
const large = 3;

// * With enums : 

enum Size { Small, Medium, Large }
// * If i do NOT specify the values it will automatically begin from 0 for the first element of the enum and then go on with increment of 1

// * if lets say i set a numeric value to x for the first element in enum, then every next value IF NOT EXPLICITLY specified will have a value of increment of 1
enum SizeWithValues { Small = 5, Medium, Large } // Small = 5, here medium = 6, large = 7 will be automatically assigned

// * if in a tuple, we assign a string value for the first element then we EXPLICITLY have to specify values for all the other elements as well

// enum NAMES {first = 'Srajan',second}  // un-comment to see error on second element
// ! we must specify the values for each in case of string elements

// accessing / setting values from enums
let mySize:Size = Size.Medium;
console.log(`Accessing size with values : ${SizeWithValues}`);
console.log(`Accessing Large size with values : ${SizeWithValues.Large}`);

// ? Pro Tip : using 'const' keyword while declaring the enums will generate a more optimized JS code for it

const enum Optimal {first = 1, second} // writing only this will NOT create a corresponding enum or constant, you need to perform some action on the elements 
console.log(Optimal.first); // action performed - only creates a console statement for the constant value




