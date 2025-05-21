myArr = [1,2,3,4,5];

//Map
let newArr1 = myArr.map(function(x){
    return x*x;
})

console.log("Map_Example_Output",newArr1);

// Filter
let newArr2 = myArr.filter(function(x){
  return x%2 == 0 ;
})

console.log("Filter_Example_Output",newArr2);

//reduce
let sumArr = myArr.reduce( function(accumulator,x) {
    return accumulator + x;
},0)

console.log("Filter_Example_Output",sumArr);