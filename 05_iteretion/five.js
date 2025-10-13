
const coding = ["js", "py", "java", "swift", "ruby", "cpp"] 

// coding.forEach( function (val){
//     console.log(val);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe (items) {
//     console.log(items);
    
// }

// coding.forEach(printMe)


// coding.forEach((item, index,arr) => {
//      console.log(item, index, arr);
     
// })


const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },

    {
        langName: "java",
        langFileName: "java"
    },

    {
        langName: "python",
        langFileName: "py"
    }
]

 myCoding.forEach((item) => {
    console.log(item.langFileName);
    
 })