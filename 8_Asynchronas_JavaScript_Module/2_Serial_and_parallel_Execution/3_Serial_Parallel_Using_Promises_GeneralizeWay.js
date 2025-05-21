const fs = require('fs').promises;

//Parallel Execution
/* 
console.log("before");
let arr = ['./f1.txt', './f2.txt', './f3.txt', './f4.txt'];

for(let i=0;i<arr.length;i++)
{
  let fileReadPromise = fs.readFile(arr[i]);
  fileReadPromise.then(cb)
}

function cb(data)
{
    console.log('data-> '+data);
}

console.log("After");

*/

// Serial Execution 
console.log('before');

let arr = ['./f1.txt', './f2.txt', './f3.txt', './f4.txt'];

let fileReadPromise = fs.readFile(arr[0]); 
for(let i=1;i<arr.length;i++)
{
    fileReadPromise = fileReadPromise.then((data)=>{
        console.log('content ->'+data);
        return fs.readFile(arr[i])
    })
}
fileReadPromise.then((data)=>{  // use for print f4 data 
    console.log('content-> '+data);
})

console.log('after');
