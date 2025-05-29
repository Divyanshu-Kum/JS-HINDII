class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(){
        this._email = value
    }
    get password(){
        return `${this._password}divya`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}
const divya = new User("divya.ai", "1234")
console.log(divya.password);
