// singleton 

// objects literals

const jsuser = {
    name : "vikas",
    age : 27,
    location  : "delhi",
    email : "vikas.vikas.kushwaha@gamil.com",
    lastlogindays:["Monday", "tue"]
}
//Object.freeze(jsuser);
jsuser.email= "viaks@yahoo.com"
// console.log(jsuser.email)
// console.log(jsuser["email"])

jsuser.greeting = function(){
    console.log("hello user")
};

jsuser.greeting2=function(){
    console.log(`Hello js user,${this.name}`)
}
// console.log(jsuser.greeting)
console.log(jsuser.greeting());
console.log(jsuser.greeting2());