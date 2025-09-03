// readonly keyword and optional operator 

// * readonly keyword used to restrict the manipulation (or UPDATION) of a field and make it only readable entity 
// ? example : _id attribute in mongo db database, so let's try to imitate that here

type User = {
    readonly _id : string,
    name:string,
    age:number
};

// ! Note that until you fill in all the fields of the User type inside of the myUser variable, it will show red squiggle or ERROR, once all values are filled, ERROR will be removed

let myUser:User = {
    _id:'12345', // this is NOT manipulation, it's INITIALIZATION
    name:'Srajan',
    age:20
}

myUser.name = 'Adi'; // * Allowed
// myUser._id = '123';  // ! NOT Allowed, since readonly property

// * Optional operator or feature, is there to make an attribute of an object optional to initialize, as i mentioned above, NOT initializing all the values of a variable refering to a type or object will throw ERROR, but optional attributes are free from this and NOT compulsory to initialize

// ? examples : some website could have both premium and freemium model, the user with the free model will not have his card details or bank details on the app BUT the premium model user would have that, in the DB, there could be one single schema or model for the user so making the card details attribute optional seems right here

type Client = {
    readonly _id : string,
    name:string,
    age:number,
    cardDetail?:string, // placing a '?' after the attribute name will make it optional
}

let myClient:Client = {
    _id:'12345',
    name:'Srajan',
    age:20,
    // no problem if the cardDetail is NOT initialized
}

let myClient2:Client = {
    _id:'12345',
    name:'Srajan',
    age:20,
    cardDetail:'123434654654654', // No problem here as well
}