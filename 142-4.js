'use strict';

const arr = [{ name: 'john' }, 'hi there1'];

//primatives don't have references so copying by reference is only seen with object/reference types.
//copying by reference is pointing the same reference which points to the same memory heap
const arr2 = [...arr]; //copying the reference of the objects, primatives don't have references(to heap) as they are entirely stored in call-stack
arr2[1] = 'hi there2';

const arr3 = [];
arr3[0] = arr[0];
arr3[1] = arr;

arr3[0].name = 'smith';
arr3[1] = 'hi there';

console.log(arr);
console.log(arr2);
console.log(arr3);
