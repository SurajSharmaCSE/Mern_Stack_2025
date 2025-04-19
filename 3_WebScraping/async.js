const fs = require("fs");

// Sync Programming Example ---
/*
let data = fs.readFileSync("f1.txt");
console.log(data);
console.log("Before")
console.log("After");
*/

// ASync Programming Example ---

fs.readFile("D:\\Mern_Stack_2025\\5_WebScraping\\f1.txt",cb);   // -> cb stand for call back you can use any name also

function cb(err,data)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("data:"+data);
    }
}

console.log("After");
console.log("Mean while");
