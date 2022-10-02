const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// acumulator -> snowball

//reduce returns final val of acc

/*
  At each iteration, what is returned by the reduce method is assigned to the accumulator and at the end of all iterations, the reduce method returns the accumulator value
*/

const balance = movements.reduce(function (acc, cur, i, arr) {
  // console.log(`Iteration ${i}: ${acc}`);

  //acc is return val of previous iteration
  return acc + cur;
}, 0);
// console.log(balance);


// no variable is needed
let balance2 = 0;
for (const mov of movements) balance2 += mov;
// console.log(balance2);

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (mov > acc) return mov;
  else return acc;


}, movements[0])

console.log(max);