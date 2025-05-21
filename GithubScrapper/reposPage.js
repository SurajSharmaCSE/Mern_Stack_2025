let request = require("request");
let cheerio = require("cheerio");
let getIssuesPageHtml = require("./getIssue");

function getRepopageHTML(url,topicName)
{
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
        getReposLink(html);
      }
    }

    //
    function getReposLink(html)
    {
        let $ = cheerio.load(html);
        let Repo_headingArray = $("h3.f3.color-fg-muted.text-normal.lh-condensed");
        
        console.log(topicName);
        for(let i=0; i<Repo_headingArray.length;i++)
        {
            let twoAnchor = $(Repo_headingArray[i]).find("a");
            let TopicLink = $(twoAnchor[1]).attr("href");
            let fullLink =  `https://github.com${TopicLink}/issues`;
            let RepoName = TopicLink.split("/").pop();
            getIssuesPageHtml(fullLink,topicName,RepoName);
        }
        console.log(`'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`);
    }
}

module.exports = getRepopageHTML;