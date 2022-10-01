// const julia = [3,5,2,12,7]
// const kate = [4,1,15,8,3]


// julia.shift();
// julia.pop();
// julia.pop();


// adultOrPuppy(julia);
// console.log('-------------');
// adultOrPuppy(kate);


// /**
//  * @param {array} dogOwner 
//  */
// function adultOrPuppy(dogOwner){
//   dogOwner.forEach((el, idx)=>{
//     if(el>=3) console.log(`dog number ${idx+1} is an adult`);
//     else console.log(`dog number ${idx+1} is a puppy`);
//   })
// }



// to remove side effects don't use global variables, don't modify data outside of function
/**
 * @param {Array} julia 
 * @param {Array} kate 
 */
function  adultOrPuppy(julia, kate){
  const juliaCopy = [...julia]; //to remove side effects, don't modify parameters directly

  juliaCopy.shift();
  juliaCopy.splice(-2);
  const finalArr = [...juliaCopy, ...kate];

  finalArr.forEach((el, idx)=>{
    if(el>=3) console.log(`dog number ${idx+1} is an adult`);
    else console.log(`dog number ${idx+1} is a puppy`);
  })
}


adultOrPuppy([3,5,2,12,7], [4,1,15,8,3])

// a way to style console.logs
// console.log("%c Test Data","font-size:'32px'; background:red; color:blue;")