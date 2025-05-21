const fs = require('fs');



// Example of Parallel Task Execution
/*
console.log('before');

fs.readFile('f1.txt',cb1)
fs.readFile('f2.txt',cb2)
fs.readFile('f3.txt',cb3)


function cb1(err,data)
{
   if(err)
   {
    console.log(err);
   }
   else
   {
    console.log("Content: "+data);
   }
}

function cb2(err,data)
{
   if(err)
   {
    console.log(err);
   }
   else
   {
    console.log("Content: "+data);
   }
}

function cb3(err,data)
{
   if(err)
   {
    console.log(err);
   }
   else
   {
    console.log("Content: "+data);
   }
}

console.log("After");
*/

// Example of Serial Task Execution
console.log('before');

fs.readFile('f1.txt',cb1)
function cb1(err,data)
{
   if(err)
   {
    console.log(err);
   }
   else
   {
    console.log("Content: "+data);
     fs.readFile('f2.txt',cb2)
     function cb2(err,data)
     {
        if(err)
        {
         console.log(err);
        }
        else
        {
         console.log("Content: "+data);
         fs.readFile('f3.txt',cb3)
         function cb3(err,data)
         {
            if(err)
            {
             console.log(err);
            }
            else
            {
             console.log("Content: "+data);
            }
         }
        }
     }
   }
}

console.log("After");
