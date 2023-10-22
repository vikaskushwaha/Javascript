



// function addtowno(number1, number2){
//     console.log(number1+number2)
// }

// addtowno(3,4);

// function calculatecartprice( ...num1){
//     return num1;
// }
// console.log(calculatecartprice(200,2000,50))

function calculatecartprice(val1,val2,...num1){
    return num1;
}
// console.log(calculatecartprice(200,2000,50))

const user={
    username: "vikas",
    price:199
}

function handleuser(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleuser(user);

handleuser({
    username: "sam",
    price : 399
})

const array=[2000, 400,100,600];
function secondvalueofarray(getarray){
    return getarray[1]
}
console.log(secondvalueofarray(array))