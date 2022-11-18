const obj1 = {
    egenskap: 'innehåll'
}
const obj2 = obj1; //objekt2 kommer nu peka på samma information som obj1
console.log(obj1, obj2);

obj2.egenskap = 'hej';
console.log(obj1, obj2);

let var1 = 3;
let var2 = var1; //Skapas en kopia i minnet av var1
var1 = 10;
console.log(var1, var2);

//Arrayer är objekt
const arr1 = [0, 1, 2, 3];
const arr2 = arr1;
arr1[2] = 10;
console.log(arr1, arr2)

//Clone an object
//Objektet som ska klonas
const toCopy = {
    egenskap: 'annat'
}

//Ett tomt objekt där vi ska förvara en kopia av toCopy
const newCopy = {};

Object.assign(newCopy, toCopy);
newCopy.egenskap = 'trött';
console.log(newCopy, toCopy);

const newArr = [];

Object.assign(newArr, arr1);
newArr[0] = 100;
console.log(newArr, arr1);

//Definiera ett objekt som är en tärning (die)
//1 egenskap: antal sidor
//1 metod: slå tärningen, returnera ett nummer

const die = {
    sides: 21,
    roll(){
        // rerturn Math.floor( Math.random()*this.sides )+1;
        return Math.ceil( Math.random()*this.sides );
    }
}

console.log( die.roll() );
console.log( die.roll() );
console.log( die.roll() );
console.log( die.roll() );
console.log( die.roll() );