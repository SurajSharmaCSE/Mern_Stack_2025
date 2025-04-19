const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit");


function getIssuesPageHtml(url,topicName,RepoName)
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
        getIssueslink(html);
        
      }
    }

    function getIssueslink(html)
    {
        let $ = cheerio.load(html);
        let issuesElemArr = $(".IssuePullRequestTitle-module__ListItemTitle_1--_xOfg");

        let arr = [];
        for(let i=0;i<issuesElemArr.length;i++)
        {
            let link = $(issuesElemArr[i]).attr("href");
            // console.log(link);
            arr.push(link);
        }
        // console.log(topicName,"    ",arr);
        
        // ArrangeIN_Directory(topicName,RepoName,arr);  --> this function for dir Creation and put all output
        ArrangeIN_PDF(topicName,RepoName,arr);

    }

    // function ArrangeIN_Directory(topicName,RepoName,arr)
    // {
    //     let folderPath = path.join(__dirname,topicName);
    //     dirCreater(folderPath);
        
    //     let filePath = path.join(folderPath,RepoName + ".json");
    //     fs.writeFileSync(filePath,JSON.stringify(arr));
    // }


    function ArrangeIN_PDF(topicName,RepoName,arr)
    {
        let folderPath = path.join(__dirname,"SampleOutput",topicName);
        dirCreater(folderPath);
        
        let filePath = path.join(folderPath,RepoName + ".pdf");
        let text = JSON.stringify(arr);

        // here we are using npm pakage pdfKit for convert Json data into
        let pdfDoc = new pdfkit();
        pdfDoc.pipe(fs.createWriteStream(filePath));
        pdfDoc.text(text);
        pdfDoc.end();
    }

    function dirCreater(folderPath) {
      if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true }); 
      }
  }



}

module.exports = getIssuesPageHtml;