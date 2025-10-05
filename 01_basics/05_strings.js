const name = "masidur"
const repoCount = 22

// console.log(name + repoCount +    "value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('masud-fc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.length);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('u'));


const newString  = gameName.substring(0, 4)  
console.log(newString);

const anotherString = gameName.slice(-7 , 4)
console.log(anotherString);


const newStringOne = "    masud    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://masud.com/rahanan%20hufduh"
console.log(url);
console.log(url.replace('%20', '-'));

console.log(url.includes('masud'));
console.log(url.includes('adarsh'));


console.log(gameName.split('-'));









