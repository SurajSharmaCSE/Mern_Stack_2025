/*
  Important to Understand this Structure in Excel 
  File
    Workbook
         Sheet
            Column
                Row
*/

let fs = require("fs");
let xlsx = require("xlsx");
let data = require("./example.json");

// Write Files
// workbook -> Filepath, Worksheet -> name json data
// Use WorkBook
let newWb = xlsx.utils.book_new();
// Convert JSON Data -> Excel format
let newWs = xlsx.utils.json_to_sheet(data);
// Append sheet with name
xlsx.utils.book_append_sheet(newWb, newWs, "SurajXLSheet1");

// Define the filepath to save the Excel file
let filepath = 'output.xlsx';

// Write the file to the specified filepath
xlsx.writeFile(newWb, filepath);

// Read
let wb = xlsx.readFile('output.xlsx');
let excelData = wb.Sheets["SurajXLSheet1"];
let ans = xlsx.utils.sheet_to_json(excelData);
console.log(ans);

console.log('````````Make a Generic Function Write and Read of Json and above code thing for easy to use ````')

function ExcelWriter(filepath,jsonData,sheetName)
{
    let newWb = xlsx.utils.book_new();
    let newWs = xlsx.utils.json_to_sheet(jsonData);
    xlsx.utils.book_append_sheet(newWb, newWs,sheetName);
    xlsx.writeFile(newWb, filepath);
}

function ExcelReader(filepath,sheetName)
{
    if(fs.existsSync(filepath)==false)
    {
        return [];
    }
    let wb = xlsx.readFile(filepath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans
}
