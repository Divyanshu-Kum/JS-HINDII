const user ={
    usernamr: "divyanshu",
    loginCount: 8,
    signedIn: true

    const getUserDetails: function(){
        //console.log("Got user details from database");
        //
        // console.log(`username: ${this.username}`)
        // consle.log("this");
    }

}


// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn


    this.greetjng = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = User("divyanshu", 12, true)
const userTwo = User("chaiAurCode")
console.log(userOne.constructor);
console.log(userTwo)
