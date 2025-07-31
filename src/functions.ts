// the way we write in JS, can also be followed here, BUT the very motive of TS in that case fails. Follow, best TS practices as listed here 
// Hover on the function name to acknowledge the comments written

// * normal :       

function  Func1(params:number) {
    let x = params;
    console.log(x);
    return '0'; // Notice we returned a string,  
}
// In TS, the return of the function will automatically be set to the value that is being returned.
// Let's try with multiple return statements : 

function Func2(param:number) {
    if(param % 2 === 0){
        return 'even';  // till this line it says 'even' | undefined, instead of string as i expected - Probably because the return statement is in a block and it is expecting a return statement outside the block
    }    
    return 0;  // here any type of return is not shown, instead the exact values being returned are shown - 0 | 'even'
    // commenting the first return statement will make the return type to number
}

// * Best Practice : To EXPLICITLY specify return type as done in statically typed langs

function calculateTax(income: number, taxYear:number) : number {
    if(taxYear > 2022){
        return income * 1.2;
    }
    return income * 1.3; // returning any other type of value here will shown compile time error
}

// calculateTax(10_000, 2022); // if we pass more args then it will result in compile time error BUT, passing more args in function call than the parameters accepted by a function is valid in JS (refer : #1 in check.js)

// * Using optional parameters 
                                    // use '?' to declare as optional parameter 
function calculateTax2(income:number, taxYear?: number) {
    // but later in the code we need to take like this so that it has a fall back and undefined values don't reach the code
    if((taxYear || 2022) < 2022){
        return income;
    }    
    return income * 1.2;
}

// calculateTax2(10_000);  // less args


// * Using Default values in parameters
                                    // can also set default without type annotation
function calculateTax3(income:number, taxYear = 2022) {
    if(taxYear < 2022){
        return income * 1.2;
    }    
    console.log(typeof taxYear);  // number
    return income*1.3;
}
calculateTax3(15_000); // ! Note : if we give args here for the default value parameter that will override the default value in the function signature

