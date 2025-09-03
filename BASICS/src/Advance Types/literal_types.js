// to limit the values that we can assign to some identifier/variable
var n1 = 10;
n1 = 20; // re-assigned
console.log(n1);
var q = 50; // Now we can only assign 50, variable becomes 'type 50'
// q = 51; // ! ERROR - we cannot re-assign
// * We can pair it with UNION type
var q2 = 50;
q2 = 100; // * No issues here since it is allowed
q2 = 150; // ? we can create as many unions we want
var unit = 'cm';
unit = 'inch'; // *        We can re-assign strings also
var portNum = 8080; // making sure port doesn't run on any other number
