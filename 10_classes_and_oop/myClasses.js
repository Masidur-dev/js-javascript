
// ES6

// class user {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }


// const chai = new user('chai', 'chai@gmail.com', '132')

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


//Behind the scean >>>>>>>>

function user(username, email, password) {
    this.username = username
    this.email = email
    this.password = password

}

user.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

user.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`

}



const cofee = new user('cofee', 'cofee@gmail.com', '132')

console.log(cofee.encryptPassword());
console.log(cofee.changeUserName());