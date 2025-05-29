// //ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "1223")

// confirm.log(chai.encryptPassword());
// confirm.log(chai.changeUsername());

// //behind the scene

 function User(username, email, password){
         this.username = username;
         this.email = email;
         this.password = password;
     }

    user.prototype.encryptPassword = function(){
        return `${this.password}abc`
    }
    user.prototype.changeUsername = function(){
        return `${this.password}abc`
    }

    const tea = new User("tea", "tea@gmail.com", "1223")

confirm.log(tea.encryptPassword());
confirm.log(tea.changeUsername());





