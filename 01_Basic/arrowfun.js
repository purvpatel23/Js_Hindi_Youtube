const user = {
name: "purv",
price: 999,
welcomemessage: function(){
     console.log(`${this.name} ,welcome to website`);
     console.log(this);
  }
}
user.welcomemessage()
user.name = "pam";
user.welcomemessage()

console.log(); //-----return {}
console.log(this); //----return undefined

function chai(){
    let username = "purv"
    console.log(this);

        
}
chai()

const chai = function (){
    let username = "purv"
    console.log(this.username);
    
}
chai()

const chai =  () =>{
let username = "purv"
console.log(this.username);

}
chai()
// never use this in function it is only use in object.

const addtwo = (num1 , num2) => {
   return num1 + num2
}  // arrow function 
console.log(addtwo(2,3)); //  //explicit function  because it is use a return.

// const addthree = (num1 , num2) => num1 + num2  //implicit function is use when we don't need to use a return in function.
// console.log(addthree(3,5));

// when i need return in object--------------------------------------------
const addfour = (num1 , num2) => ({username: "purv"})
console.log(addfour());
