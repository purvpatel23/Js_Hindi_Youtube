// function saymyname(){
//     console.log("H");
//     console.log("T");
//     console.log("E");
//     console.log("S");
// }

// saymyname() use for declare function 

// function addtwonumber(number1 , number2){
// //   let result = number1 + number2
// //   return result
// return number1+number2
  
// }

// const result = addtwonumber(3,5)
// console.log(result);

//  function loginuser(Username = "pam"){
//     if(!Username)
//     {
//         console.log("please Enter the value of username");
//         return
//     }
//     return `${Username} just logged in`
// }
// console.log(loginuser())


function calculatecartprice(val1, ...num1){
    return num1
   }
   console.log(calculatecartprice(200,400,500))
   

const user = {
   username: "purv",
   price: 133
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)

// second way-----------------------------------

handleobject({
    username : "purvpatel",
    price: 199
 }) 

 const myarray = [200 , 400 , 100 , 600]

 function returnsecondvalue(getarray){
    return getarray[1]
 }

//  console.log(returnsecondvalue(myarray)); 
// second way-------------------------------------------------------
 console.log(returnsecondvalue([200 , 400, 100 , 600]))
 
 
