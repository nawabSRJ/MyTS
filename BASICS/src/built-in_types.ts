// this file explores the built-in types in TypeScript
// JS Supports : 
// number, string, boolean, null, undefined, object

// TS Supports additionally : 
// any, unknown, never, enum, tuple 

// * Note : TS supports all built-in types of JS

let num:number = 10;
let course : string = 'typescript';
// let name: string = 'Srajan';  // ! 'name' cannot be a variable name in TS since its used somewhere in it's internal implementation  

// * Note the way we have annotated types above is NOT necessary since the TS compiler automatically knows that 
// ? pro tip : hover over to find out the type
let num2 = 20; 
let flag = true;
let something;  // * No initialization - 'any' type automatically assigned

let sales = 12_34_56_789;   // ? we can use underscore in between number digits for proper representation - this won't affect the number - like we use commas in natural notation : 12,100 INR can be 12_000
console.log(sales);


// ! where should we use any type?
// * Somewhere if we do NOT know what kind of value we are going to receive then it should be used with proper exception handling stuff like maybe if a function expects a value but NOT sure what type of value, then maybe
                // annotate 
function render(document:any){
    return document;
}

function show(text:string){
    console.log(`This is the ${text}`);
}