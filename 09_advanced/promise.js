
const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    },1000)
}).then(function(){
    console.log(("Async2 resolved"));
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName : "vikas", email: "vikas.vikas.kushwaha@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({userName: "Vikas", password: "12345"})
        }
        else{
            reject('Error: something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.userName
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected")
})

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({userName: "Script", password: "12345"})
        }
        else{
            reject('Error: Script went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await PromiseFive
        console.log(response);
    }
    catch (error){
        console.log(error);
    }
}
consumePromiseFive();

// async function getAllUsers(){
//    try{
//         const response = await fetch('https://api.github.com/users/vikaskushwaha')
//         const data = await response.json()
//         console.log(data);
//    }
//    catch(error){ 
//     console.log("E ", Error);
//    }
// }

// getAllUsers();

fetch('https://api.github.com/users/vikaskushwaha').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>console.log(error))
 