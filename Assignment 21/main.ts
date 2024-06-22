// // Question 21

// import { log } from "console"

// let student ={
//     name :"Shabana",
//     rollnumber : 23,
//     grades:[89 ,90 ,75]   
// }
// console.log(student);

//  interface person{
//     name:string;
//     age:number;
//     city:string;
// }

// let person1:person={
//     name:"Ali",
//     age:30,
//     city:"Landon"
// }
// let person2:person={
//     name:"Shoaib",
//     age:33,
//     city:"lahore"
// }

// console.log(person2.name);

let objectContainingItems :{[key:string]: any } = {
    "laptop":{
        name:"laptop",
        price:"25000",
        description:"high prformence laptop with fast proccessor "
    },
    "mouse":{
        name:"mouse",
        price:"1000",
        description:"high performance laptop with fast proccessor"
    },
    "keyboard":{
        name:"keyboard",
        price:"5000",
        description:"high performance laptop with fast proccessor"
    },
}
console.log(objectContainingItems);


