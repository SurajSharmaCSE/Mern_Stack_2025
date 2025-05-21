// Impure Function

/*
let a = 4;

function addNum(b);
{
    console.log(`the Sum is`, a+b);
}

addNum(2);
*/

// Pure Function

/*
function addNum(a,b)
{
    console.log(`the SUm is `,a+b);  // side Effect
}

addNum(2,3);
*/

function addNum(a,b)
{
    return a+b;
}

console.log( addNum(2,3) );

