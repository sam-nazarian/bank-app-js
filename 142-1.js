'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);

console.log(arr.slice(2)); //[c,d,e]
console.log(arr.slice(2, 4)); //[c,d] index 4 will not be included
console.log(arr.slice(-2)); //[d,e]
console.log(arr.slice(-1)); //[e] last index is -1
console.log(arr[-1]); //undefined
console.log(arr.at(-1)); //returns the last elkement, works with -1

console.log(arr.slice(1, -2)); //[b,c]
console.log(arr.slice()); //creating a shallow copy, used when we need to chain methods
console.log([...arr]); //another way of creating a shallow copy

//SPLICE mutates the original array, splice takes the element that we need to get rid of, and then it removes it.
//every element in the array and print that to the consol.
// console.log(arr.splice(-1)); //[e] so splice will REMOVE the [e] element and it will change the original array to [a,b,c,d]
// console.log(arr.splice(2)); //it will remove c and d, so the original array will be [a,b]
// arr.splice(1); //it even removes the elements placed at position 1, so even b is removed

// arr.splice(-1);
arr.splice(1); //counts how many elements to remove
//In splice by default can assume when only using the 1st parameter, the second parameter is set to infinity
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse();
console.log(arr2);

//concact, doesn't change the original array, use this when you want to do chaining, could also use spread operator
console.log(arr.concat(arr2));
console.log(arr);
console.log(arr2);

//if we want to change the original array we could do this:
arr = arr.concat(arr2);
const letters = arr.concat(arr2);
// console.log(arr);
// console.log(arr2);

//same as contact, doesn't change the original array, could store in an array to make the change to the original array
console.log([...arr, ...arr2]);
// console.log(arr);
// console.log(arr2);
// arr = [...arr, ...arr2];
// console.log(arr);
letters.splice(-2); //removes element -2 and everything that comes after it, same as letters.splice(-2,infinity)
console.log(letters.join(' - ')); //returns a string and joins the array with '-', doesn't change original array

console.log(letters);
