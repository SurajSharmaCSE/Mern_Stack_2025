//object - > object is key value pair it like HashMap that exist in Java Programming 

// key : value -> property
//key : function -> method

let cap = {
name:"steave",
lasname:"Rogers",
address:{
           city:"Marthan",
           state:"new York"
        },
age:35,
isAvengers:true,
movie:["First Avenger","Winter Avenger","Civil War"],
sayHi: function(){
                    console.log("cap say's Hi")
                  }
};

//Get
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movie[1]);

//set/Update

// console.log("cap:",cap);
// cap.age = 36;
// cap.isAvengers = false;
// cap.friends = ["Tony","Bruch","Peter"];

// console.log('``````````````````````````````');
// console.log("cap:",cap);

//delete 
// delete cap.address;
// console.log("cap:",cap)

// itteration on object
// for (let key in cap)
// {
//     console.log(key, " : ", cap[key]);
// }


let propKey = "age";
console.log(cap[propKey]);
