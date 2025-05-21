function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink=='coffee')
        {
            resolve('Order Placed');
        }
        else
        {
            reject('Sorry, we only Serve Coffee');
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being Processed')
        resolve(`Coffee Served for the ${order}`);
    })
}


// With Promise Method
/*
placeOrder('coffee').then(function(orderFromCustomer){
    console.log('Request Recived')
    let orderIsProcessed = processOrder(orderFromCustomer)
    return orderIsProcessed
}).then(function(orderIsProcessed){
    
        console.log(orderIsProcessed);
    
}).catch(function(err){
     console.log(err);
})
*/


// With Async-await Method

async function ServerOrder(){
    const orderRecieved = await placeOrder('coffee');
    console.log(orderRecieved);
    const ProcessedOrder = await processOrder(orderRecieved); 
    console.log(ProcessedOrder);
}

ServerOrder();