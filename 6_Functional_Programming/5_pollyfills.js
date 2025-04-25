let myArr = [1,2,3,4,5];

// 1. Map
/*
let SquaredArr = myArr.map(function(x){
    return x*x;
})
console.log(myArr);
console.log(SquaredArr);
*/

// Custom Map
/*
function myPloyFillMap(arr,cb)
{
    let newArr = [];

    for(let i=0;i<arr.length;i++)
    {
        newArr.push(cb(arr[i]));
    }

    return newArr;
}

function Square_cb(x)
{
    return x*x;
}

console.log( myPloyFillMap(myArr,Square_cb) );
*/

// 2. Filter
/*
let fArr = [2,4,6,7,9,13];

let evenArr = fArr.filter(function(x){
    return x%2==0;
})

console.log(evenArr);

// Cutome Filter

function myPloyFill_Filter(arr,cb)
{
    let filterArr = []
    for(let i=0;i<arr.length;i++)
    {
        if(cb(arr[i]))
        {
            filterArr.push(arr[i]);
        }
    }
    return filterArr;
}

function isEven_cb(x)
{
    if(x%2==0)
    {
        return x;
    }
}

console.log( myPloyFill_Filter(myArr,isEven_cb) );
*/
