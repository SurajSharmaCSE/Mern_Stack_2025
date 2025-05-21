
let cp = require("child_process");

// Open Calculatore Using child_process Node module
console.log("trying to open Calculator");
cp.execSync("calc");

// open Chrome 
console.log("trying to open Youtube");
cp.execSync("start https://www.youtube.com");

// open what's app
cp.execSync("start chrome https://web.whatsapp.com");


