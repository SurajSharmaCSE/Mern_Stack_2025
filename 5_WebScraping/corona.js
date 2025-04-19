const request = require('request');
const cheerio = require("cheerio");

request('https://www.worldometers.info/coronavirus/', cb);
function cb(error, response, html) 
{
    if(error)
    {
        console.error('error:', error); // Print the error if one occurred
    }
    else
    {
        handleHTML(html);
    }
}

function handleHTML(html)
{
    let selTool = cheerio.load(html);
    let h1_arr = selTool("h1");
    console.log(h1_arr.length);

    // logic to get cornoa cases
    let Counterarr = selTool("#maincounter-wrap span");
    // for(let i=0;i<Counterarr.length;i++)
    // {
    //     let data = selTool(Counterarr[i]).text();
    //     console.log(data);
    // }

    let totalCase = selTool(Counterarr[0]).text();
    let deathCase = selTool(Counterarr[1]).text();
    let RecoverCase = selTool(Counterarr[2]).text();

    console.log("totalCase:"+totalCase);
    console.log("deathCase:"+deathCase);
    console.log("RecoverCase:"+RecoverCase);
    
}


