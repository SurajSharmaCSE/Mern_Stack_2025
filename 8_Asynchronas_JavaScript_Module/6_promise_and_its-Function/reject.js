let p1 = Promise.reject("Promise Rejected").catch((err)=>{
    console.log(err);
})