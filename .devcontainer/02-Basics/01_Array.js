// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["akshay", "salman"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0]);

// Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9) // it means 9 moves to 1st element in array
// myArr.shift() // it will remove the 1st element in array

//console.log(myArr.includes(9))
//console.log(myArr.indexOf(9))

const newArr = myArr.join() //important

console.log(myArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(myn2);
