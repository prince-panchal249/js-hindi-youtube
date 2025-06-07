const User = {

    _email: 'p@prince.com',
    _password: '123',

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value.toUpperCase()
    },

    // get password() {
    //     return this._password.toUpperCase()
    // },

    // set password(value) {
    //     this._password = value.toUpperCase()
    // }

}

const chai = Object.create(User)
console.log(chai.email);
// console.log(chai.password);
console.log(chai._password);          // here getter and setter are not used, that's why we use _ for acessing private properties