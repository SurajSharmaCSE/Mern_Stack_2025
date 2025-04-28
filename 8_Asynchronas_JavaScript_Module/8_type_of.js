let arr = [1, 2, 3, 4]

let str = 'Hello';

let obj = {
    name : 'Adam',
    age : 23
}

let num = 5;
console.log(typeof arr);  // it's given obj not array
console.log(typeof str);
console.log(typeof obj);

// Check for Array
let test = Array.isArray(arr);
console.log(test);