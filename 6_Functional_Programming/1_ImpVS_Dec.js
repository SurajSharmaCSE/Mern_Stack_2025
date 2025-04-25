
// Imperative Way Programming
/*
const x = 5;
const xSquared = x*x;

let isEven;

if(xSquared % 2 == 0)
{
    isEven = true;
}
else
{
    isEven = false;
}

console.log(isEven);
*/

// Declarative Way Programming 

const isSquareEven = (x)=> ( (x*x)%2==0? true:false )
console.log( isSquareEven(10) );