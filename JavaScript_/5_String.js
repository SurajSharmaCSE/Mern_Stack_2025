let singleQuotes = ' Single quotes ki String ';
let doubleQuotes = "double quotes ki string";

// console.log(singleQuotes);
// console.log(doubleQuotes);

// let char = singleQuotes.charAt(4);
// let ascii = singleQuotes.charCodeAt(4);
// let subStr = singleQuotes.substring(2,8);

// console.log(char);
// console.log(ascii);
// console.log(subStr);

// trim
singleQuotes = singleQuotes.trim();
console.log(singleQuotes);
//split
let arrStr = singleQuotes.split(" ");
console.log(arrStr);

//join
let str = arrStr.join("+");
console.log(str);

