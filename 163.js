//Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Strings
const owners = ['jonas', 'zach', 'adam', 'martha'];

owners.sort(); //mutates original array
// console.log(owners);

// return < 0 | A, B | (keep order)
// return > 0 | B, A | (switch order)

// curr & next val

// ascending
movements.sort((a, b) => {
  // if (a < b) return -1;
  // if (a > b) return 1;
  // return 0;

  // a < b is always going to be something negative, a comes first
  // a > b is always going to be something posetive, b comes
  return a - b;
});

// descending
movements.sort((a, b) => {
  // if (a < b) return 1;
  // if (a > b) return -1;
  // return 0;

  //if a>b something negative, a comes first
  //if a<b something posetive, b comes first
  return b - a;
});

// console.log(movements);
