/*
Defnition: A closure is a function that can access variables from its outer function, even after the outer function 
           has finished running.
*/

function add()
{
    let a = 4;
    function addChild()
    {
        console.log(a+5);
    }

    return addChild;
}

let catchAdd = add();
console.log(catchAdd);

catchAdd();
