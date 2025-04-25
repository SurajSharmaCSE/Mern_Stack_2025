// Mutable Example 
/*
const person1 = {
    name:'Adam',
    Age:25
}

const person2  = person1;

console.log(person1);
console.log(person2);
*/

// Immutable Example

const person1 = {
    name:'Adam',
    Age:25
}

// const person2  = Object.assign( {},person1 );  //way1 assign of person1 to person2
const person2 = {...person1};  // way2 assign of person1 to person2
person2.name = `Steve`;

console.log(person1);
console.log(person2);


