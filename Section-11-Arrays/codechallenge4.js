const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
   ];

   //1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//2
const dogSarah = dog.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
conse.log(`Sarah dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`)

//3
const ownersEatTooMuch = dogs
.fillter(dog => dog.curFood > dog.recFood )
.flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
const ownersEatTooLittel = dogs
.fillter(dog => dog.curFood < dog.recFood )
.flatMap(dog => dog.owners);

console.log(ownersEatTooLittel);

//4
console.log(`${ownersEatTooMuch.join(' and ')}'dog eat too much'`);
console.log(`${ownersEatTooLittel.join(' and ')}'dog eat too Littel'`);

//5
console.log(dogs.some(dog => dog.curFood === dog.recFood));


//6
const checkEatingOk = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOk
    ));


//7
console.log(dogs.filter(checkEatingOk));
console.log(dogs.some(checkEatingOk));

//8
const dogSorted = dog.slice().sort((a,b) => a.
recFood - b.recFood);
console.log(dogSorted);