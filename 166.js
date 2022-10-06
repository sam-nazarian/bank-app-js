'use strict';

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
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 1.

const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);

// console.log(bankDepositSum);

//2.
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 1000).length;

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => (mov > 1000 ? ++acc : acc), 0); //the 0 is like a value outside of a for loop, that gets updated

// console.log(numDeposits1000);

// Prefixed ++ operator

// 3.
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // if (cur < 0) sums.withdrawals += cur;
      // else if (cur > 0) sums.deposits += cur;

      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { withdrawals: 0, deposits: 0 }
  );

// console.log(deposits, withdrawals);

// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase); //capitalizes and exception (i.e. and) if it's at the beginning
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and this is another title with an EXAMPLE'));

// 4.

/*
let a = 10;
console.log(a++); //returns prev value (first returns then adds)
console.log(a);
console.log(++a); //returns curr value (first adds, then returns)
*/
