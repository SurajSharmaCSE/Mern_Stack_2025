const express = require('express');
const app=express();

app.listen(3000);

app.get('/',(req,res)=>{
    // res.send('Hello word')
    res.sendFile('/Users/surajsharma/Downloads/Mern_Stack_2025/11_Backend_Module/02_StatusCode/view/index.html')
})

app.get('/about',(req,res)=>{
    res.sendFile('/Users/surajsharma/Downloads/Mern_Stack_2025/11_Backend_Module/02_StatusCode/view/about.html');
});

// redirect 
app.get('/about-us',(req,res)=>{
    res.redirect('./about');
});

// 404 file code run
app.use((req,res)=>{
    res.sendFile('/Users/surajsharma/Downloads/Mern_Stack_2025/11_Backend_Module/02_StatusCode/view/404.html');
})