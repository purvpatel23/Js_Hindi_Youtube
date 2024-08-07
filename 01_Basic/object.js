// singleton 
// when we create a single const is a single type of object 

// object literals ---------------------------------------------------------------------
// const user = {
    
// }

// or second type 

// Object.create()


const mysym = Symbol("key1")


const user = {
    name :"purv",
    [mysym]: "key01",
    age: 10,
    location: "surat",
    email:"p@gmail.com",
    lastday: ["monday","tuesday"]
}

// console.log(user.name);
// second type to declare
// console.log(user["name"]); // use for access object item
// console.log(user[mysym]);//declare symbol using [mysym]
// user.email = "patel@gmail.com"
// Object.freeze(user)//freeze for change
// user.email = "purv@gmail.com"
// console.log(user);

// function------------------------------------------------------

// user.greeting = function(){
//     console.log("purv");
    
// }
// console.log(user.greeting());

//---------------------------------------------------------------

const tinderuser = new Object()
tinderuser.id = "123abc"
tinderuser.name = "purv"
tinderuser.isloggin = false
// console.log(tinderuser);

// const regularuser = {
//     email : "purv@gmail.com",
//     fullname:{
//       username:{
//        firstname: "purv",
//        lastname:"patel"
//     }
//   }
// }
// console.log(regularuser.fullname.username);

// ---------------------combine object using assign method-------------------//
 
const obj1 = { 1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}

// const obj3 =Object.assign( {} , obj1, obj2) // using {} all object go in {}.

// const obj3 = {...obj1,...obj2} //sprade all objects 
// console.log(obj3);

// const users = [
//     {
//         id: 1,
//         email: "p@gmail.com"
//     },
//     {
//         id: 2,
//         email: "q@gmail.com"
//     },
//     {
//         id: 3,
//         email: "r@gmail.com"
//     },
// ]
// // it's call array objects 


// users[1].email //access all items in objects 
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isloggin'));

// this all method use for  in objects