
// Diconstructing in Array
/*
let arr = ["Hi","I","am","Suraj"]

// let a = arr[0];
// let b = arr[1];

//Destructuring
// let [a,b,c,d] = arr

// let [a,b,,d] = arr

let [a,b,c,d,extra='Hlo'] = arr

console.log(a,b,d,extra);
*/

// Diconstructing in Object
/*
let obj = {
    name : "Udai",
    state : "Delhi",
    country : "India"
}

// let name = obj.name;
// let state = obj["state"];

// let {name,state,country} = obj
// let {name,state,country,extra="deafult value"} = obj


let {name:firstname,state,country,extra="deafult value"} = obj 

console.log(firstname,state,country,extra);
*/

// Diconstructing in Nested Object
let obj = {
    name:"Udai",
    add: {
        country:"India",
        state:{ 
            code:"DL",
            pin:"111111"
        }
    }
}

let {name} = obj;

let {add:{country:abcd}} = obj

let {add:{state:{code:cd}}} = obj

console.log(abcd);
console.log(cd);


