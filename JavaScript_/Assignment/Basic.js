
// 1
// let i=1;
// while(i<=20)
// {
//     if(i%3==0)
//     {
//         console.log(i,"Fizz");
//     }
//     else if(i%5==0)
//     {
//         console.log(i,"Buzz");
//     }
//     else if(i%3==0 && i%5==0)
//     {
//         console.log(i,"FizzBuzz");
//     }
//     i++;
// }

//2 

// let num = 10;
// let ans = 0;
// let place = 1; // to place digits at correct position

// while (num > 0) 
// {
//   let rem = num % 2;
//   ans = ans + rem * place;
//   place = place * 10;
//   num = Math.floor(num / 2);
// }

// console.log(ans); // Output: 1010 (binary of 10)
// console.log("Hello");

//3
// let arr = [1,2,3,4,5];
// let ansArr = []
// let n = arr.length-1;

// while(n>=0)
// {
//     ansArr.push(arr[n]);
//     n=n-1;
// }
// console.log(arr)
// console.log("Reverse Array------------")
// console.log(ansArr);

//4
// let num1 = [1, 2, 3]
// let num2 = [100, 2, 1,10]

// let i=0;
// while(i<num2.length)
// {
//   if(num1.includes(num2[i])==false)
//   {
//     num1.push(num2[i]);
//   }
//   i++;
// }

// console.log(num1);

//5 
// let str = "I'm a little tea pot";
// let arrWord = str.split(" ");
// let ansStr = "";

// for(let i=0;i<arrWord.length;i++)
// {
//     let word = arrWord[i];
//     let char = word.charAt(0).toUpperCase();
//     ansStr+= char+word.substring(1)+" ";
// }

// console.log(ansStr);

//6
// let inp = "The quick brown fox jumped over the lazy dog"
// let arrWord1 = inp.split(" ");
// let maxLen = 0;

// for(let i=0;i<arrWord.length;i++)
// {
//     let word = arrWord[i];
//     if(word.length>maxLen)
//     {
//         maxLen = word.length;
//     }
// }

// console.log(maxLen);

//7

function confirmEnding(str, target) {
    let n = str.length;
    let n1 = target.length;

    let Lstsbstr = str.substring(n - n1, n);
    console.log(Lstsbstr);

    if (Lstsbstr.toLowerCase() == target.toLowerCase()) {
        return true;
    }
    return false;
}
 
let ans = confirmEnding('Bastian', 'n');
console.log(ans);
