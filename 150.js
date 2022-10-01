const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const eurToUsd = 1.1;

// const usdMovements = movements.map(function (el) {
//   return el * eurToUsd
// });

const usdMovements = movements.map((el) => el * eurToUsd);

const usdMovements2 = [];

for (const el of movements) {
  usdMovements2.push(el * eurToUsd);
}


// map method is the one calling the callback func
const movementsDescriptions = movements.map(
  (mov, i) =>
  `Movements ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(usdMovements);
console.log(usdMovements2);

console.log(movementsDescriptions);