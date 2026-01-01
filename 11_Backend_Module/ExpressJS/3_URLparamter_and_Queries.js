/*
    parameter=> use for fetch data from database and show on front
    Queries => use for filter in geted data
*/
const express = require("express");

const app = express();
//middleware function -> post, front->json
app.use(express.json());
app.listen(3000);

//params
app.get('/user/:username',(req,res)=>{
    console.log(req.params.username);
    console.log(req.params);
    res.send("user id received");
})
