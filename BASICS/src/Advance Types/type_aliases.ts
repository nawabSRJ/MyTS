type Employee = {
    readonly id : number,
    name:string,
    retire:(date:Date) => void    
}
// we can add as many fields above



// here is the duplicate of the object from the object.ts
let employeeUser2:Employee = { id: 1, name: 'Srajan',
    retire:(date:Date)=>{
        console.log(date);
    }
}


// todo : Mixing and Matching types

type CardNumber = {
    cardNum:number,
}

type CardExpiry = {
    cardExp:Date,
}

type CardDetails = CardNumber & CardExpiry & {
    cardNewAtr:string, // some string attribute
}

// * Note : we can create a type by merging two or more types using the '&' symbol, also note that above at last we have created a type only but in a hacky way, which is NOT advised, proper separate defining is good, the way we did above with the last type is more like anonymous type where there is no separate name for it like the other 2.


// makes it more readable

/* 
Advantages of using type aliases in TypeScript:

Reusability:
You can define a type once and reuse it for multiple variables, parameters, or return types.

Readability:
Type aliases give meaningful names to complex types, making your code easier to understand.

Maintainability:
If you need to change the structure, you only update the type alias in one place.

Avoids Duplication:
Prevents repeating the same type definitions in multiple places.

Supports Complex Types:
Type aliases can represent unions, intersections, and other advanced type constructs.

Works with Objects, Primitives, and Functions:
You can alias not just objects, but also primitive types, function signatures, and more.
*/