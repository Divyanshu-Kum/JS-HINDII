class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

     static createId(){
        return `123`
    }
    
}

const divya = new User("divya")
console.log(divya.createId())

classTeacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@gmail.com")
console.log(iphone.logMe());
