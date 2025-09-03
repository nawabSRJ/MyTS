// when more than one type of nature can be applied to an identifier

let numT:number | string; // ! Well logically this doesn't make sense

// * So let's look at a more proper, relatable example

type Draggable = {
    drag:()=> void;
}

type Resizeable = {
    resize:()=> void;
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
   // todo : Now, here we MUST implement the functions of the types inherited basically
    drag:()=>{},        // * remember comma 
    resize:()=>{}
}

