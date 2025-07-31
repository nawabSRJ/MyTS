// fixed length array where each element can have a different type
// often used when working with a pair of values
// tuples are internally represented at plain JS arrays

let user : [number,string] = [1,'Srajan'];
console.log(user);
user.push('Hey there, I am imposter')
console.log(user);  // drawback of tuples in TS - this has to hopefully be fixed in future

// ? pro tip : even though we can create tuples with as many values we want like : 
let someTup : [number, string, boolean, undefined] = [10,'Hey man', true, undefined]
// ? but we should mostly use it where key:value kind of data structure is required
// ! try to avoid using too many values in a tuple (just a convention) 




