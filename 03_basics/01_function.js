

function sayMyName() {

    console.log("M");
    console.log("A");
    console.log("S");
    console.log("I");
    console.log("D");
    console.log("U");
    console.log("R");
 
} 

// sayMyName()

function addTwoNumber (number1, number2){    // here number1 and number2 are called para meter
    console.log(number1 + number2);
    
}

// addTwoNumber(3,5) // thease are the arguments 


function addTwoNumber (number1, number2){    
    // let result = number1 + number2
    // return result
   // process 2
   return number1 + number2
    
    
}

const result = addTwoNumber (3,4)

// console.log("Result:", result);

function loginUserMassage(username ="Mr. x"){
    if(!username){ //=== undefined){
       console.log("please enter a username");
       return
    }
    return `${username} just logged in`
} 

//  console.log(loginUserMassage("masidur"))
// console.log(loginUserMassage(""));
console.log(loginUserMassage()); // undefined




