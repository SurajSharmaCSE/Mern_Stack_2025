let fs = require("fs");
// Way to Fetch and Print Json File Data 
let buffer = fs.readFileSync("./example.json");
// console.log(buffer);
console.log("````````````````````````````````````````````````")
let data = JSON.parse(buffer);
// console.log(data);

// push new data into json data and Write into a File
/*
data.push({
    "name":"Thor",
    "last Name": "Bruce",
    "isAvenger":true,
    "friends":[
        "Bruce",
        "Neter",
        "Natasha"
    ],
    "age":45,
    "address":{
        "city":"New York",
        "state":"Manhanttan"
    }
})
*/

let StringData = JSON.stringify(data);
fs.writeFileSync("example.json",StringData);

// read Data Dirrecly without buffer
let data1 = require("./example.json");
console.log(data1)

