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