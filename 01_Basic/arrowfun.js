// const user = {
//  name: "purv",
//  price: 999,

//   welcomemessage: function(){
//      console.log(`${this.name} ,welcome to website`);
//      console.log(this);
     
//   }

// }
// user.welcomemessage()
// user.name = "pam";
// user.welcomemessage()

// console.log();

// console.log(this);

// function chai(){
//     let username = "purv"
//     console.log(this);

        
// }
// chai()

// const chai = function (){
//     let username = "purv"
//     console.log(this.username);
    
// }
// chai()

// const chai =  () =>{
// let username = "purv"
// console.log(this.username);

// }
// chai()
// never use this in function it is only use in object.

const addtwo = (num1 , num2) => {
   return num1 + num2

}  // arrow function 


console.log(addtwo(2,3));


const addthree = (num1 , num2) => num1 + num2  //implesit function 

console.log(addthree(3,5));

 