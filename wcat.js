#!/usr/bin/env node
let fs = require("fs");
const { join } = require("path");

//input
let inputArr = process.argv.slice(2);
// console.log(inputArr);

// options -> extract file is text file or commmand option
let optionsArr = [];
let filesArr = [];

for(let i=0;i<inputArr.length;i++)
{
    let FirstChar = inputArr[i].charAt(0);
    if(FirstChar == "-")
    {
        optionsArr.push(inputArr[i]);
    }
    else
    {
        filesArr.push(inputArr[i]);
    }
}


// -------- Start Edge Cases Logic --------------------

//identitfiy option 
let isBothParesent = optionsArr.includes("-b") && optionsArr.includes("-s");
if(isBothParesent==true)
{
    console.log("Error - only on option command would work not two command together");
    return;
}
//exisstence
for(let i=0;i<filesArr.length;i++)
{
    let isnParesent = fs.existsSync(filesArr[i]);
    if(isnParesent == false)
    {
        console.log(`Error -> file ${filesArr[i]} is not paresent`)
        return;
    }
}
// -------- End Edge Cases Logic --------------------

// read filesArr content
let content = "";

for(let i=0;i<filesArr.length;i++)
{
     let bufferContent = fs.readFileSync(filesArr[i]);  // - buffer formated
     content+=bufferContent+"\n";
}
// console.log(content);

//  Start --------   -s command Logic   -------------------------
let contentArr = content.split("\r\n");

// console.log(contentArr);

let isSparesent = optionsArr.includes("-s");
if(isSparesent==true)
{
    for(let i=1;i<contentArr.length;i++)
    {
        if(contentArr[i] == "" && contentArr[i-1] == "")
        {
            contentArr[i] = null;
        }
        else if(contentArr[i] == "" && contentArr[i-1] == null)
        {
            contentArr[i] = null;
        }

    }
    // make string without space
    let tempArr = [];
    for(let i=0;i<contentArr.length;i++)
    {
        if(contentArr[i] !=null)
        {
            tempArr.push(contentArr[i]);
        }
    }
    
    contentArr = tempArr;
}
// console.log(contentArr.join("\n"));

//  End  --------   -s command Logic   -------------------------


// Start -n Logic
let isnParesent = optionsArr.includes("-n");
if(isnParesent == true)
{
    for(let i=0;i<contentArr.length;i++)
    {
        contentArr[i] = `${i+1} ${contentArr[i]}`;
    }
}
// console.log(contentArr.join("\n"));
// End -n Logic

// Start -b Logic
let isBParesent = optionsArr.includes("-b");
if(isBParesent == true)
{
    let counter = 1;
    for(let i=0;i<contentArr.length;i++)
    {
        if(contentArr[i]!="")
        {
            contentArr[i] = `${counter} ${contentArr[i]}`;
            counter++;
        }
    }
}
// End -b Logic

console.log(contentArr.join("\n"));

