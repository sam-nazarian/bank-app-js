// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

//  Empty arrays + fill method
let x = new Array(7); //creates an arr with 7 empty elms (length of 7)

//doesn't work with any array methods except fill
// const y = x.map(() => 5);

// x[3] = 22;
// console.log(x);

//fill() mutates original array
// x.fill(1);
x.fill(4, 3, 5); //similar to slice final idx is not included
// console.log(x);

// Array.from() is a static method on Array constructor function / class
const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// (_,i)
const z = Array.from({ length: 7 }, (cur, i) => i + 1); //second parameter is similar to map
console.log(z);
