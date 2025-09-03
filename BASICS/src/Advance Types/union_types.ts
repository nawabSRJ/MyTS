// '|' is called as a UNION type - what we saw when returning multipe types of values in a function , then the return type is automatically assigned a union of both the types
// we can use it EXPLICITLY as well

function kgToLb(weight : number | string) : number{
    // Narrowing
    if(typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLb(10));
console.log(kgToLb('10Kg'));