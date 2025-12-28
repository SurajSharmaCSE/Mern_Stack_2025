// Server Creation

// http module
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log('request had been made from browser to server');
    // console.log(req.method);
    // console.log(req.url);

    res.setHeader('Content-Type','text/html');
    // 1 way to send html or data response 
    // res.write('<h1>Hi There</h1>')
    // res.write('<h2>Hello Everyone</h2>')
    // res.end();

    // 2nd way create seprate html file in public and import there 
    fs.readFile('./view/index.html',(err,fileData)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.write(fileData);
            res.end();
        }
    })    
});

// port number , host, callback function
server.listen(3000,'localhost',()=>{
        console.log('server is lisening on port 3000');
        
});