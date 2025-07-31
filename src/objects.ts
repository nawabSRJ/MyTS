// objects are basically immutable in TS, unlike JS
let employee = {
    id:1
};

// employee.name = 'Srajan'; // ! ERROR - prop name dose NOT exist

// so basically we cannot add new elements

// we can also add a function to the objects
let employeeUser: {
    id: number,
    name: string,
    // name : params:type => return type
    retire:(date:Date) => void
} = { id: 1, name: 'Srajan',
    retire:(date:Date)=>{
        console.log(date);
    }
 }
//  it is important to define the function after declaration in the types of the object

// ! Problems with current 'employeeUser' object :
// verbose code
// inconsistent if another shape is needed for the objects - resulting in duplication as well

// * Note - This problem can be solved by the 'type aliases' refer that file in the Advance Types folder
