const course = {
    coursename:"js in hindi",
    price: "999",
    courseinstructor: "purv"
}

// course.courseinstructor  ignor to fatch document like this 

const {courseinstructor : instroctor} = course
console.log(instroctor);   //use for fatch value from object 



// {
//    "name": "purv",
//    "coursename": "js in hindi",
//    "price": "free"
// }

// this is structor of api 

[
    {},
    {},
    {}
]