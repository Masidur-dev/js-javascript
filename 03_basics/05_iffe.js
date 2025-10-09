

// Immediately Invoked Function Expressions (IIFE)

//  >> exicute immidieatly
//  >>  sometimes problems occured for global scope pollution , so that global scope's variables or declartion for removing use iffe


(function chai (){
    // this is named iffe
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("masidur")



