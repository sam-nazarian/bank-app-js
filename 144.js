// for (const [idx, movement] of movements.entries()) {
//   if(movement > 0){
//     console.log(`Movement ${idx + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${idx + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// };

// Can't break or continue in a function

//higher order func (forEach) is calling the callback func in a loop
movements.forEach((mov, i, arr)=>{
  if(mov > 0){
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});


/////////////////////////////////////////////////

//map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('CURRENCIES');
currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});


console.log('------------ CURRENCIES UNIQUE');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

//_ is a throw away variable, an uneccesorly var
currenciesUnique.forEach(function(value,_, map){
  console.log(`${value}`);
})


console.log(currenciesUnique);