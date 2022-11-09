//Vi deklarera en variabel och spara ner en funktionen i den 
const minFunktion = function(m){
    console.log(m);
}
minFunktion('Meddelande');//Anropar funktionen
console.log( minFunktion ); //Loggar funktionen, alltså det som finns i minnet
console.log( typeof minFunktion); //loggar function, datatypen av funktionen


console.log("-----Higher Order Functions-----");
//Två funktioner som ska användas som callback
const firstFunction = function(){
    console.log("Den här funktionen används som argument");
}
const secondFunction = function(){
    console.log("från secondFunction, används också som argument.");
}

const higherOrderFunction = function(callback){
    console.log("In higherOrderFunction");
    callback();
}

higherOrderFunction( firstFunction );
higherOrderFunction( secondFunction );



console.log("-----Map with Higher Order-----");
//funktioner som kommer användas som callback funktioner
function square(x){
    return x*x;
}
function doubleUp(x){
    return x*2;
}

console.log(square(9));
console.log(doubleUp(9));

// const numberArr = [2, 5, 7, 9];
// console.log('Before', numberArr);
// for(let i=0; i<numberArr.length; i++){
//     numberArr[i] = square(numberArr[i]);
// }
// console.log('After', numberArr);

// console.log('Before', numberArr);
// for(let i=0; i<numberArr.length; i++){
//     numberArr[i] = doubleUp(numberArr[i]);
// }
// console.log('After', numberArr);

//Higher order function som loopar igenom en array
function map(array, callback){
    for(let i=0; i<array.length; i++){
        array[i] = callback(array[i]);
    }
    return array;
}

const numberArr = [2, 5, 7, 9];
console.log('Before', numberArr);

console.log( 'After:', map(numberArr, square) );

const numberArr2 = [5, 2 ,46, 2];
console.log('Before', numberArr2);
console.log( 'After:', map(numberArr2, doubleUp) );

const numberArr3 = [2, 3, 4, 5, 6];
console.log('Before', numberArr3);
console.log( 'After:', map(numberArr3, 
    function(x){
        return x+1;
    }
) );


// Arrow function
console.log("-----Arrow Functions-----");
function addThree(x){
    return x+3;
}

const addThreeArrow = x => x+3;

const numberArr4 = [4, 2, 6, 44];
console.log('Before', numberArr4);
console.log( 'After:', map(numberArr4, x=>x+3) );