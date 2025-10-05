
let myDate = new Date ()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);
// console.log(myDate.getDate());

// let myCreatedDate = new Date (2025, 0 , 22)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date (2025, 0 , 22 , 5 , 2, 45)
// let myCreatedDate = new Date ("2025-09-22")
// let myCreatedDate = new Date ("09-22-2025")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() );
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());

newDate.toLocaleDateString('default', {
    weekday:'long'

    
})












