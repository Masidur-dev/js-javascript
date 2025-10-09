const user = {
    usernasme: "hitesh",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.usernasme}, welcome to website`); // this use for corrent  context

        // console.log(this);
        
    }
}

// user.welcomeMassage()
// user.usernasme = "sam"
// user.welcomeMassage()

console.log(this); // here its empty object 

//  in browser gloobal object is window obnject 

// function chai(){
//     let username = "masidur"
//     console.log(this.username);
    
// }

// chai()

// const  chai = function(){
//     let username = "masidur"
//     console.log(this.username);
    
// }

const  chai = () => {
    let username = "masidur"
    console.log(this);
    
}

// chai() 



//  arrow function >>>>>>>>

// const addTwo = (num1, num2) => {    
//     return num1 + num2            // this is explicit  return when use return
// }


// const addTwo = (num1, num2) => num1 + num2 

// const addTwo = (num1, num2) => (num1 + num2) // THIS TEACHNIQUE USE SO SO MUCH IN REACT and thsi implicit 

const addTwo = (num1, num2) => ({username: "masidur"})

console.log(addTwo(3, 4));



