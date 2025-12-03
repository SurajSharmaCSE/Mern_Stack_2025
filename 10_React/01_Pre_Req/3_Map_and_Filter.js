// Map

let arr = [1,2,3,4,5]

let narr = [];

// for(let i=0;i<arr.length;i++){
//     narr[i]=arr[i]*2;
// }

narr = arr.map((value,idx)=>{
    // console.log(value,idx);
    return value*2;
})

console.log(arr);
console.log(narr);



// Filter
/*
let arr = ["apple","banana","orange","watermelon"]

let narr = [];

// for(let i=0;i<arr.length;i++){
//     let fruit= arr[i];
//     if(fruit.length>6){
//         narr.push(fruit);
//     }
// }

narr = arr.filter(function(fruit){
    return fruit.length>6
})

console.log(arr);
console.log(narr);
*/