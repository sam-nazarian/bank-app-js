// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movements = [200, 450, 3000, 70, 1300];

// only checks for equality
// console.log(movements.includes(-130));

// checks for CONDITION
// console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 0);

// console.log(anyDeposits);

//EVERY
//only returns true if every elm passes/satisfies the condition
// console.log(movements.every((mov) => mov > 0));

// Seperate callback

const depositFunc = (mov) => mov > 0;
// console.log(movements.every(depositFunc));
// console.log(movements.some(depositFunc));
// console.log(movements.filter(depositFunc));
