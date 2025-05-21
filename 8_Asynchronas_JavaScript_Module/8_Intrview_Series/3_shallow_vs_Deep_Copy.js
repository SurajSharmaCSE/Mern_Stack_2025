/*
  Note:
  Shadow Copy: - which we can Modify only 1 level of referece
  Deep Copy : - Which we can Modify more than 1 level of refference
 */
// Deep vs Shadow Copy Example with Array 

// Normal Refferece
/*
let arr =  [1, 2, 3, 4];

let copyArr = arr;
copyArr[1] = 4;

console.log(arr);
console.log(copyArr);
*/

// Shadow Copy
// way1
/* 
let sports = ['Cricket','Football','Swimming',{'a':10,'b':20}]

let CopySport = [...sports];
CopySport[1] = 'Baseball'
CopySport[3]['a'] = 50;  // Shadow Copy cann't able to change this 2nd nested level of refference
console.log(sports);
console.log(CopySport);
*/

//way2
/* 
let sports = ['Cricket','Football','Swimming',{'a':10,'b':20}]
let CopySport = Array.from(sports);
CopySport[1] = 'Baseball'
onsole.log(sports);
console.log(CopySport);
*/
// DeepCopy 

let sports = ['Cricket','Football','Swimming',{'a':10,'b':20}]
let CopySport = JSON.parse(JSON.stringify(sports))
CopySport[1] = 'Baseball'
CopySport[3]['a'] = 50; 
console.log(sports);
console.log(CopySport);



