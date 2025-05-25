const userEmail = []

if (userEmail){
    console.log("got user email");
}
else{
    console.log("not got user value");
}

// flasy value

// flase, 0, -0, BigInt, "", null, undefined, NaN

//truthy values

// "0", 'false", " ", [], {}, function()[]{},

// Array in js is empty or not
    // if (userEmail.length === 0){
    //     console.log("Array is empty");
    // }

// object in js is empty or not
const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}

// Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? 10 ?? 10
val1 = null ?? 10 ?? 20

// Terniary operator

const iceCream = 100
iceCream <= 80 ? console.log("less than 80") : 