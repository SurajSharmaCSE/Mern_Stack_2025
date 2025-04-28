function test(){
    var a = 1+1;
    return new Promise(function(resolve,reject){
        if(a==2)
        {
            resolve("Promise Resolved Yessss!");
        }
        else
        {
            reject("Promise Rejected Noooooo!");
        }
    })
}

test().then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Experiment Completed");
})