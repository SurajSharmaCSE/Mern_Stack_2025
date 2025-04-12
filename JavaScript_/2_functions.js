// Non-Primitive  => array, object, function

// define Functions
function sayHi(param)
{
    // console.log("Hello from sayHi");
    console.log("param recived",param)
    let rVal = Math.random() > 0.5?true:"less then 0.5";
    return rVal;
}

// functions call
sayHi(10);
sayHi("Hello");
let rVal = sayHi([1,2,3,4,5]);
console.log("rval",rVal);
