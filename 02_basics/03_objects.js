
// littreal Operators


const mySym = Symbol("mykey1") // interview question 

const jsUser = {
    name: "masidur",
    fullName : "masidur rahaman",
    age : 22,
    location : "bengaluru",
    email : "masidur@gamil.com",
    [mySym] : "mykey1"

};

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser.fullName)



//  right option >>>

// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);

// console.log(jsUser[mySym]) // interview question 

jsUser.email = "masidur@chatgpt.com"
// console.log(jsUser);

// Object.freeze(jsUser)
jsUser.email = "mrmasidur@gamil.com"  // its not changable because of freeze
// console.log(jsUser);

 jsUser.greeting = function(){
        console.log(`hello js user`);
        
 } 

 jsUser.greetingTwo = function(){
    console.log(`hello js usesr, ${this.name}`);
    
 }

//  console.log(jsUser.greeting);
//  console.log(jsUser.greetingTwo);

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())

//  please please please  use [] square braceket 
 
 






 



