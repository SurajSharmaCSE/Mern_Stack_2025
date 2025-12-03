// Spread Operator in Array
let arr = [1,2,3];

// let arr2 = arr;
// arr2.push(4);

// issue it's update both array 
// console.log(arr);
// console.log(arr2);

// fix above issue using spread operator
let arr2 = [...arr];
arr2.push(4);
console.log(arr);
console.log(arr2);


// ************ Spread Operator in Object ******
let obj = {
    name: "Udai",
    add:{
        country:"india",
        state:{
            code:"DL",
            pin:"111111"
        }
    }
}

// try to update name in obj2, but below line of code update name in both object
// let obj2 = obj;
// obj2.name = "abcd";
// console.log(obj);
// console.log(obj2);

// fix this issue using spread operator, but this would not work for nested add,state object 
// let obj2 = {...obj}
// obj2.name = "abcd";
// console.log(obj);
// console.log(obj2);

// fix above issue
// let obj2 = {...obj,add:{...obj.add}}
// obj2.add.country = "abcd"
// console.log(obj);
// console.log(obj2);

// udpate state as well for sperateely
// let obj2 = {...obj,add:{...obj.add,state:{...obj.add.state}}};
// obj2.add.state.code = 10
// console.log(obj);
// console.log(obj2);

// for all above object Update thing 1 line good shortcut is below
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.add.state.code = 10;
console.log(obj);
console.log(obj2);