let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate);

// let mycreateddate = new Date(2023, 0, 31, 5,3) use to create own date
// let mycreateddate = new Date("2023-01-13") //yyyy-mm-dd
// console.log(mycreateddate.toLocaleString());
// let mycreateddate = new Date("01-12-2023")
// let mytimestemp = Date.now()
// console.log(mytimestemp)
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth())
console.log(newdate.getDay())

console.log(`the date is ${newdate} and time is ${newdate.getTime()}`);

