
// let myName = "masidur    "
// let  myChannel = "chai     "
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}


Object.prototype.masidur = function(){
    console.log(`masidur is present in all objects`);
    
}


 
Array.prototype.heymasidur = function(){
    console.log(`masidur says hello`);
    
}

// heroPower.masidur()
// myHeros.masidur()
// myHeros.heymasidur() 

// heroPower.heymasidur() >>> error


// +++++++ Inheitence ++++++++

const user = {
    name: "chai",
    email: "chai@google.com" 
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssingment: 'Js Assignment',
    fullTimeL: true,
    __proto__: TeachingSupport
}

// Modern Syntax>>

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"masidur".trueLength()
"icetea".trueLength()