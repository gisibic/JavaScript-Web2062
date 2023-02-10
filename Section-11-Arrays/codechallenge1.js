const checkDogs = function(dogsJulia, DogsKate){
    const dogsJuliaCorrected = dogJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);

  //  dogsJulia.slice(1,3);

 //   console.log(dogJuliaCorrected);
 const dogs = dogsJuliaCorrected.concat(DogsKate);
 console.log(dogs);

 dogs.forEach(function(dog, i){
    if(dog >= 3){
        console.log(`Dog number ${i +1} is an adult, and is ${dog} years old`);

    }else{
        console.log(`Dog number ${i +1} is still is a puppy`);
    }
 })
}
checkDogs([3, 5, 2,12,7],[4,1,15,8,3]);