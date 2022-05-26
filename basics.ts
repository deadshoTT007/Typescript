//Primitives

let age: number;
age=21;

let username: string;
username="Manish"

let isMale:boolean;
isMale= true;

// More Complex data types

let hobbies: string[];
hobbies=['Table tennis','Listening Songs']

type Person={
    name:string,
    age:number | string,
    hobbies:string[]
}

let person:Person;

person={
    name:"Manish",
    age:21,
    hobbies:["Table tennis"]
}


let personList:Person[]

personList=[
    {
        name:"Manish",
        age:21,
        hobbies:["Table tennis"]
    },
    {
        name:"Manish",
        age:21,
        hobbies:["Table tennis"]
    },
    
]

// Type Inference

let course:string | number = "Type script";
course=2;
