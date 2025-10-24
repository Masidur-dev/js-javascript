class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}masud`
    }

    set password(value) {
        this._password = value
    }
}

const masidur = new user("mr@masidur.ai", "abc")
console.log(masidur.email);

