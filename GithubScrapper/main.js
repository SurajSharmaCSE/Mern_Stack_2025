const url = "https://github.com/topics";

let request = require("request");
let cheerio = require("cheerio");
let getRepopageHTML = require("./reposPage");

request(url,cb);

function cb(err,response,html)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        // console.log(html);
        extracTopicsLink(html);
    }
}

function extracTopicsLink(html)
{
    let $ = cheerio.load(html);
    let TopicLinkArr = $(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i=0;i<TopicLinkArr.length;i++)
    {
        let href = $(TopicLinkArr[i]).attr("href");
        let fullLink = `https://github.com${href}`;
        // console.log(fullLink);
        let topicName = href.split("/").pop();
        // console.log(topicName);
        getRepopageHTML(fullLink,topicName);
    }

}
