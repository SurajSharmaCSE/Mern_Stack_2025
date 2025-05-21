let path = require("path");
let fs = require("fs");

//1 path.join
/* Small Quize-Create 10 folder of Lecture and include in each folder create a readme.md file 
   and in readme.md file write somthin insize
 */

// for(let i=1;i<=3;i++)
// {
//     let dirPathToMake = `Lecture-${i}` ;
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(path.join(dirPathToMake,"readme.md"),`# readme for ${dirPathToMake}`);
// }

//2 extname
let ext =  path.extname(path.join(__dirname,"abc.js"))
console.log("extension name:",ext);

let name = path.basename(__dirname);
console.log(name);

let filename = path.basename(path.join(__dirname,"abc.js"));
console.log(filename);

/*
    SHORT NOTES:-

    📂 Category: Path Operations (Module: path)
    Function Name	Purpose	Tiny Example

    path.join	Combine directory and file paths safely	path.join('folder', 'file.txt') ➔ 'folder/file.txt'

    path.extname	Get file extension	path.extname('abc.js') ➔ '.js'

    path.basename	Get last part of a path	path.basename('/path/abc.js') ➔ 'abc.js'

    __dirname	Get current directory absolute path	console.log(__dirname)

*/

