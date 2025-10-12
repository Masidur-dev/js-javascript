
// const userEmail = "m@masud.ai"
// const userEmail = ""
const userEmail = []

if(userEmail){
    console.log("got the email");
    
}else{
    console.log("dont have user email ");
    
}


//  Falsy values >>> 
// false, 0 , -0 , NaN, BigInt 0n, "" (empty string), null , undefined


// Truthy values >>>

//  "0", "false", " " (space), {}, [], function (){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
    
// }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 20



// console.log(val1);


//  Terniary Operator

//  condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("lesst than 80"): console.log("more than 80");
 ;

