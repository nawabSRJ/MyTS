// to limit the values that we can assign to some identifier/variable

let n1:number = 10;
n1 = 20;    // re-assigned
console.log(n1);


let q : 50 = 50; // Now we can only assign 50, variable becomes 'type 50'
// q = 51; // ! ERROR - we cannot re-assign

// * We can pair it with UNION type
let q2 :50 | 100 | 150 = 50;
q2 = 100; // * No issues here since it is allowed
q2 = 150; // ? we can create as many unions we want


// * Making things more structure : 
type Metric = 'cm' | 'inch';
let unit : Metric = 'cm';
unit = 'inch';  // *        We can re-assign strings also
// unit = 'pound'  // ! ERROR as expected

// ? Pro Tip : Really good for creating the logic for the 'OR' kind of situations, good for fallbacks also


// example : 
type PORT = 8080 | 'process.env.PORT';
let portNum :PORT = 8080;   // making sure port doesn't run on any other number