const puppeteer = require("puppeteer");

const PlayListLink = "https://youtube.com/playlist?list=PLW-S5oymMexXTgRyT3BWVt_y608nt85Uj&si=LTL5o67hO0MqdTsX";

(async function () {
    try {
        let browserInstance = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: [`--start-maximized`]
        });

        let allTabsArr = await browserInstance.pages();
        let cTab = allTabsArr[0];

        await cTab.goto(PlayListLink, { waitUntil: 'networkidle2', timeout: 60000 });
        await cTab.waitForSelector('h1#title');

        let playlistname = await cTab.evaluate(select => {
            return document.querySelector(select).innerText;
        }, 'h1#title');

        let All_Data = await cTab.evaluate(getData, '#stats .style-scope.ytd-playlist-sidebar-primary-info-renderer');

        let TotalVideos = All_Data.no_of_Videos.split(" ")[0];
        let TotalViews  = All_Data.no_of_Views.split(" ")[0];
        console.log("playlistname",playlistname, All_Data.no_of_Videos, All_Data.no_of_Views);
        console.log("TotalVideos",TotalVideos);
        console.log("TotalViews",TotalViews);

        let currentVideos = await getCurrVideoslength(cTab);
        console.log("currentVideos",currentVideos);

        //Scroll Page Logic Code
        while(TotalVideos-currentVideos>=1)
        {
            await scrollToBottom(cTab);
            await new Promise(r => setTimeout(r, 1000));
            currentVideos = await getCurrVideoslength(cTab);
            

        }

        // Fetch All Video-> Titile, Duration and Save Into An Array 
        let finalList = await getStatus(cTab);
        console.log(finalList);

    } catch (err) {
        console.log("Error:", err);
    }
})();

function getData(selector) {
    let all_elements = document.querySelectorAll(selector);
    let no_of_Videos = all_elements[0]?.innerText || 'Not found';
    let no_of_Views = all_elements[1]?.innerText || 'Not found';

    return {
        no_of_Videos,
        no_of_Views
    }
}

async function getCurrVideoslength(cTab)
{
    let length = await cTab.evaluate(getLength,"#video-title");
    return length
}

function getLength(durationSelector)
{
    let durationElem = document.querySelectorAll(durationSelector);
    return durationElem.length;
}


async function scrollToBottom(cTab)
{
    await cTab.evaluate(goToBottom);
    function goToBottom(){
        window.scrollBy(0, window.innerHeight); // ← fixed
    }
}

async function getStatus(cTab)
{
    let list = cTab.evaluate(getNameAndDuration,"#video-title","badge-shape-wiz badge-shape-wiz--thumbnail-default badge-shape-wiz--thumbnail-badge")
    return list;
}

function getNameAndDuration(videoSelector,durationSelector)
{
    let videoElem = document.querySelectorAll(videoSelector);
    let durationElem = document.querySelectorAll(durationSelector);

    let currentList = []

    for(let i=0;i<durationElem.length;i++)  // or videoelem.length
    {
        let videoTitle = videoElem[i].innerText;
        let duration = durationElem[i].innerText;

        currentList.push({videoTitle,duration});
    }

    return currentList;
}


