(function chai(){
    console.log("DB CONNECTED");
})(); //use for remove global scope polution , so we will use a iffi that's help for use function in imidatily 

((name) => {
   console.log(`DB connected Two ${name}`);
})('purv')  //it is a simple iffi arrow function 

