function SetUsername(username){

    this.username = username
}

function createUser(username, email, password){
    SetUsername(username)


    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chaiboy@gmail.com", "123")
console.log(chai);