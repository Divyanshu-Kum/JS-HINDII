// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol

const score = 100
const scoreValue = 100.3

const isLOGGedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bignumber = 987654321

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Akshay", "Amitab Bachan", "Karan"]

let myObj = {
    name: "divyanshu",
Agg: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId)



// ***************************

// Stack(Primitive(iske andar copy number hi milega)), Heap(Non-Premitive(iske andar koi value rakhne pr value hi milta hai))

let myYoutubename = "divyanshu.com"

let anothername = myYoutubename

console.log(anothername)

let userOne = {
    email: "user@google.com"
    upi: "user@abs"
}

let userTwo = userOne

userTwo.email = "divyanshu.email"

console.log(userOne,email);
console.log(userTwo,email);