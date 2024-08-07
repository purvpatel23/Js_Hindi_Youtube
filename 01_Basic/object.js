// singleton 
// when we create a single const is a single type of object 

// object literals 
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

user.greeting = function(){
    console.log("purv");
    
}
console.log(user.greeting());
