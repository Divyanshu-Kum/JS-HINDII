const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.566

console.log(otherNumber.toPrecision(4));

const hundres = 1000000
console.log(hundres.toLocaleString('en-IN'));

// ***************** MATHS *********************

//console.log(Math);
 //console.log(Math.abs(-4));
//console.log(Math.round(4.7));
//console.log(Math.ceil(4.4));
//console.log(Math.floor(4.9));
//console.log(Math.Min(4.9));

//console.log(Math.min(4, 5, 8, 23));
//console.log(Math.max(4, 5, 8, 23));

console.log(Math.random()); // Math.random ka value 0 se 1 ke bich me hi hoga

console.log(Math.random()*10 + 1);
console.log(Math.random()*10 + 1);

const min = 10
const max = 20

Math.random(Math.floor(Math.random() * (max - min + 1)) + min)