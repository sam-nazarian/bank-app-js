// Data
const account1 = {
  owner: 'Saman Fathnazarian',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////
/////////////////////////////////////////////

/*
const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
*/

/*
const overallBalance2 = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/

const overallBalance3 = accounts
  .flatMap((acc) => acc.movements) //first does map(), then does flat(1) & only goes 1 level deep
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance3);

// flattens nested arrays
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

//flat only goes on level deep when flattening the arr
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(1)); //1 is the default
// console.log(arrDeep.flat(2));
