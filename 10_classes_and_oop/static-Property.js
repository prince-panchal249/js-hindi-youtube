class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username:  ${this.username}`);
    }

    static createId() {     // we can't get accsss to 'this' in static methods
        // console.log(this.username); // this will not work
        return '123'
    }

}

const prince = new User('Prince')
// console.log(prince.createId()); // TypeError: prince.createId is not a function


class Teacher extends User {
    constructor(username, email) {
        super(username); // call the parent constructor
        this.email = email;
    }
}

const iphone = new Teacher('iphone', 'i@phone.com')
console.log(iphone.createId());   // '123' - static methods can be called on the class itself, not on instances   ???