'use strict';

//TESTING SHALLOW COPY
//don't do shallow copy if you are using objects in you array
//because shallow copy doesn't copy objects, it just copies their references

// This is because destructuring and slicing don't create a new object, but copy a reference to the existing object. Every change done with that reference will be reflected in all arrays that has that same reference.

//Copying by reference means variables are pointing to the same same memory address in the class stack. Because the value of the call stack will point to the same memory address in the heap

//You just can't see it because you're working with primitive types (strings) that are NOT copied by references. (better way to say it would be primatives don't even have references (to the heap memory). since the value of primatives is being stored in the call stack.)

const arr = [{ name: 'John' }, 'HI THERE1'];

const myArray = [{ birth: 'usa' }, 'Hello'];

const myArray2 = [{ birth: 'usa' }, 'Hello'];

const arr2 = [(arr2[0] = arr[0]), (arr2[1] = arr[1])];

const arr2 = [...arr];
arr2[0].name = 'John2';
arr2[1] = 'HI THERE2';

// Shallow copy because the property of the original object was changed
console.log(arr[0].name);
console.log(arr2[0].name);

const arr3 = arr.slice();
arr3[0].name = 'John3';
arr3[1] = 'HI THERE3';

// Shallow copy because the property of the original object was changed
console.log(arr[0].name);
console.log(arr2[0].name);
console.log(arr3[0].name);

console.log(arr);
console.log(arr2);
console.log(arr3);

//this is copying the reference
//myArray2 = myArray this doesn't perform copying of the contents of the array. It copies a reference to the myArray in memory. (this is a bit incorrect, correct way would be myArray2 will be set to the memory adress of myArray, the value of the memory address points to the same object. So that's why we can say we copid the reference of MyArray). If we didn't want this we would need to get the content of the array (could use ... operator), into a whole new array and then pass that into the variable.

//this is copying memory address (in the call stack) of the array which is an object into another variable
//When we talk about copying, we mean that the contents of the array were copied to a new array at a different address in memory.
//remember an array is an object so here we are just copying the
const myArray = [1, 2, 3, 4, 5, 6];

const myArray2 = myArray; //copying reference of an array, this is not a copy, not a shallow or deep copy

myArray2[2] = 'james';
console.log(myArray);
console.log(myArray2);
