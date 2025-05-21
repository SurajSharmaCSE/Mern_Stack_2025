 

 // Parallel Execution 
 /*
 const fs = require('fs');

 let fileRead1 = fs.promises.readFile('f1.txt');
 let fileRead2 = fs.promises.readFile('f2.txt');
 let fileRead3 = fs.promises.readFile('f3.txt');

 fileRead1.then((data)=>{
    console.log('data -> '+data);
 })

 fileRead2.then((data)=>{
    console.log('data -> '+data)
 })

 fileRead3.then((data)=>{
    console.log('data ->'+data);
 })
*/
 // Serial Execution 
 const fs = require('fs').promises;

 let fileRead1 = fs.readFile('f1.txt');

 function cb1(data)
 {
    console.log('content ->'+data);
    let fileRead2 = fs.readFile('f2.txt');
    return fileRead2;
 }

 function cb2(data)
 {
    console.log('content ->'+data);
    let fileRead3 = fs.readFile('f3.txt');
    return fileRead3;
 }

 function cb3(data)
 {
    console.log('content ->'+data);
 }

 fileRead1.then(cb1).then(cb2).then(cb3).catch((err)=>{
    console.log(err);
 })


