'use strict';

//this is a shallow copy
//deep copy means it should also make copies of objects (not just copy of references).

let arr = ['a', 'b', { test: 'Hello' }];

let arr2 = [...arr];
arr2[2].test = 'Hi';

console.log(arr);
console.log(arr2);
