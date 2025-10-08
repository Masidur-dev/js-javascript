
function calculateCartPrice(val1, val2, ...num1){     // here "..." is a rest operator thats why 200 , 300, 400 ,700 number storedin array
    return num1
}

// console.log(calculateCartPrice(3));
// console.log(calculateCartPrice(200, 300, 400, 700));
// console.log(calculateCartPrice(200, 300, 400, 700));  // INTERVIEW QUESION here val1 take 200 and val2 take 300 and others stored in array 



const user = {
    username: "masidur",
    price: 400
};

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
    
};

// handleObject(user);
handleObject({
    username: "taran",
    price: 300

});


const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 100]));

