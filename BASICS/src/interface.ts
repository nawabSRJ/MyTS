// interfaces in typescript
// todo : interface vs types in TS, refer official docs of typescript for better clarity on this topic


interface MyWorker {
    readonly wId:number
    name:string,
    email:string,
    googleId?:number,   // optional attribute
    calculateSal: ()=> number, // method with return type

    // calculateSal2():number, // you can also write like this, 

    getCoupon(couponName:string, value:number):number   // ! practice this way if you want to use args in your function 
    // ! Arrow func way will NOT work and throw in args case
}

const srj:MyWorker = {
    wId:122,
    name:'Srajan',
    email:'s@s.com',
    calculateSal: ()=>{
        return 20;
    },
    // No issue if args omitted, look at other examples below
    getCoupon:()=>{
        return 10;
    }
}

const srj2:MyWorker = {
    wId:123,
    name:'Srajan',
    email:'s@s.com',
    calculateSal: ()=>{
        return 20;
    },
    getCoupon:(couponName:"sdjko", value:10)=>{
        console.log(couponName, value)
        return 10;
    }
}

// adding new attributes to the interface, this doesn't have to be done necessarily at the first instance of declaring an interface, we can do this later on as well, like :

// re-opening of interface
interface MyWorker{ 
    newAtr?:string, // keeping optional to avoid ERRORS
    // newAtr2:string,  
}
// ! But, this newAtr if NOT optional then must be defined in all the variables of type MyWorker, even if they are created earlier to this updation, to see this in action, uncomment 'newAtr2', you will get error in srj and srj2 variables


// * Inheritance using Interface

interface Admin extends MyWorker {
    // you may add new values or may NOT
    role:"admin" | "manager" | "boss",
}

const newSrj :Admin = {
    wId:126,
    role:"manager",
    name:'Srajan',
    email:'s@s.com',
    calculateSal: ()=>{
        return 20;
    },
    getCoupon:(couponName:"sdjko", value:10)=>{
        console.log(couponName, value)
        return 10;
    }
}