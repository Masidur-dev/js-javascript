
// var c = 200
let a = 400

if(true){
    let a = 10;
    const b = 20;
    // console.log("inner =", a);  
}        // its a block scope 



// console.log(a);
// console.log(b);
// console.log(c);


// ///////////////////////////////////////////////////////////////////////////

function one() {
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);  
    }
    // console.log(website);
    
    two()
    
}

// one()

if(true) {
   const username = "hitesh"
   if(username === "hitesh"){
    const website = " youtube"
    // console.log(username + website);
    
   }
//    console.log(website);
   
}

// console.log(username);


// ++++++++++++++++++++++++++++++++ intersting +++++++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num+1
}



addTwo()  // error occurd here 
const addTwo = function(num){
    return num + 2
}





