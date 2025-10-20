
const promiseOne = new Promise(function (resolve, reject) {
    // Do an assync task
    // DB calls, cryptography , network
    setTimeout(function () {
        // console.log('Async task is completed');
        resolve()
    }, 1000)


})

promiseOne.then(function () {
    // console.log("promise consumed");

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    // console.log("Async 2 resloved");

})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "masud", email: "masud@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    // console.log(user);

})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "masud", password: "1234" })
        } else {
            reject('ERROR: Someting Went Wrong')
        }
    }, 1000)
})


promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "13423" })
        } else {
            reject('ERROR: js Went Wrong')
        }

    }, 1000)

})


async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }

}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);

//     }

// }

// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);

    })
    .catch((error) => console.log(error));

