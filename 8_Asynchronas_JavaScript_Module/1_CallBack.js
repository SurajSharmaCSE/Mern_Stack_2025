// Synchronos Callback Example

/*
function greet(personName, Callback)
{
    let msg = "Hello " + personName;
    CallbackFun(msg);
}

function CallbackFun(msg)
{
    console.log(msg);
}

greet("Steave",CallbackFun);
*/

// Asynchronos Callback Example

console.log("Hello");

setTimeout(function st1(){
    console.log("I'm st1 Function");
},2000)

setTimeout(function st2(){
    console.log("I'm st2 Function");
},1000)

function sayBye()
{
    console.log("bye");
}

sayBye()

  