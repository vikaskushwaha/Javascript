const tinderUser = new Object();

tinderUser.id = "123abc"
tinderUser.name = "vikas"
tinderUser.isloggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "viks@com",
    fullname: {
        userfullname:{
            firstname:"vikas",
            lastname:"ksuh"
        }
    }
}
// console.log(regularUser.fullname.userfullname)

const obj1 ={1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2)
const obj3={... obj1,...obj2}
// console.log(obj3);

const course = {
    coursename :" dsa",
    price: "999",
    courseIstructor: "vivek"
}
const {courseIstructor:instructor}=course
console.log(instructor);
