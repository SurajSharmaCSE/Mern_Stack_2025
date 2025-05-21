// Simple Example of Prototype
/*
Array.prototype.myFunction = function(){
    console.log(this) // this currently reffere to current array
}

let arr = [1,3,4,7]
arr.myFunction();
*/

// Create Own Map Using Protoype
Array.prototype.myMap = function(cb)
{
    let newArr = [];
    for(let i=0;i<this.length;i++)
    {
        newArr.push( cb(this[i]) )
    }
    return newArr;
}

function square(x)
{
    return x*x;
}

let arr = [1,2,3,4];
let mapppedArr = arr.myMap(square);
console.log("Map Example Output",mapppedArr);

// Create own Reduce Using ProtoType

Array.prototype.myReduce = function(cb)
{
    let newArr = [];
    for(let i=0;i<this.length;i++)
    {
        if(cb(this[i]))
        {
            newArr.push(this[i])
        }
    }
    return newArr;
}

function isEven(x)
{
    return x%2==0;
}

let arr1 = [1,2,3,4];
let mapppedArr1 = arr.myReduce(isEven);
console.log("Reduce Example Output",mapppedArr1);
