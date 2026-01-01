const express = require("express");

const app = express();
//middleware function -> post, front->json
app.use(express.json());
app.listen(3000);

let users = {};
// Get Method
app.get('/user',(req,res)=>{
    res.send(users);
})

// Post Method
app.post('/user',(req,res)=>{
    console.log(req.body);
    users = req.body;
    res.json({
        message:"data received successfully",
        user:req.body
    })
    
})

//Update Method
app.patch('/user',(req,res)=>{
    console.log('req.body->',req.body);;
    //update data in user object
    let dataToBeUpdated = req.body;
    for(key in dataToBeUpdated)
    {
        users[key] = dataToBeUpdated[key];
    }
    res.json({
        message:"data updated successfully"
    })
    
});

// Delete
app.delete('/user',(req,res)=>{
    users={};
    res.json({
        message:"data has been deleted"
    })
})


