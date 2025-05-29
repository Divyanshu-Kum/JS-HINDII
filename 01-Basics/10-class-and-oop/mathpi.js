const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'finger cahi',
    price: 250
    isAvailable: true,
    orderChai: function(){
        console.log("chai bnn gya");
        
    }
}

console.log(Object.getonsOwnPropertyDescriptor(chai, 'name'));

Object.defineProperties(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getonsOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`);
    
}
}