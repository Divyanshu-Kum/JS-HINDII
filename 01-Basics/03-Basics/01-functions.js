
function sayMyName(){
    console.log("D");
console.log("D");

console.log("D");
console.log("D");

}
// sayMyName()
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let return = number1 + number2
    // return result 
    return number1 + number2
    
}

const result = addTwoNumbers(3, 5)
//console.log("Result: ", result);

function loginUserMessage(username){
    if(username == undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("divyanshu"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "hitesh",
    price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is $
        {anyobject.price}`);
}

//handleobject(user)
handleobject({
    username: "dev",
    price: 378
})

const myNewArray = [200, 400, 100, 600]

function returnSeconfValue(getArray){
    return getArray[1]
}

//console.log(returnSeconfValue(myNewArray));
console.log(returnSeconfValue(myNewArray));



