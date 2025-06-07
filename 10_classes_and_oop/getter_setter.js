class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase()     // for differentiate, we use underscore in getter
    }

    set email(value) {
        this._email = value.toUpperCase()
    }

    get password() {
        // return this._password.toUpperCase();
        // return`${this._password}prince`
        return`${this._password}prince`.toUpperCase()       // for differentiate, we use underscore in getter
    }

    set password(value) {
        this._password = value.toUpperCase();
    }

}

const prince = new User('p@prince.ai', 'abc')
console.log(prince.email);
console.log(prince.password);