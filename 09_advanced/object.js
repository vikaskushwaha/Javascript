// function mulipleBy5(num){
//     return num*5;
// }

// mulipleBy5.power =2;

// console.log(mulipleBy5(5));
// console.log(mulipleBy5.power);
// console.log(mulipleBy5.prototype);;

// function createUser(username,score){
//     this.username = username
//      this.score = score
// }
// createUser.prototype.increament  = function(){
//     score++;
// }

// const chai = createUser("chai",5);
// const tea = createUser("tea",250);

function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
}

  const fnInside = outside(3); 
  console.log(fnInside);
//   console.log(fnInside(5)); // 8
//   console.log(outside(3)(5)); // 8

  