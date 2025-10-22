// Object Litreal >>>>>

const user = {
    username: "masidur",
    loginCount: 8,
    signedIn: true,

    getuserDetailes: function () {
        // console.log("got user detailes from database");
        // console.log(`username: ${this.username}`);
        console.log(this);



    }
}

// console.log(user.username);
// console.log(user.getuserDetailes());
// console.log(this);



// Contructer function>>>>>>>>>> gives us new instances

function User(username, loginCount, isloggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function () {
        console.log(`welcome ${this.username}`);

    }



    // return this
}

const userOne = new User("masud", 12, true)
const userTwo = new User("chaiaur code", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);


//  read mdn instanceof javascript



