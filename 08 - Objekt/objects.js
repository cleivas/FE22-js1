const obj1 = {
    name: 'Anton',
    age: 87, 
    array: [1, 2, 3, 5, 6]
};

console.log(obj1);
console.log(typeof obj1);

console.log(obj1.name );
console.log(obj1.array[3]);
//Logga femman i arrayen

const obj2 = {
    name: 'Maja',
    age: 26,
    array: [4, 34, 4, 63, 325],
    sayHi(){
        console.log('Hello, everyone!')
    }
}
console.log(obj2);
obj2.sayHi();

obj2.age = 33;
console.log(obj2);

//skapa ett objekt som innehåller
// en egenskap som är en booelan
//En egenskap som är en array med text
//En metod som loggar det som stoppas in som argument

const obj3 = {
    santEllerFalskt: true,
    array: ['hejhej', 'hej'],
    helloWorld(parameter){
        console.log(parameter);
        console.log('en till rad');
        
    }
}
console.log(obj3.santEllerFalskt);
console.log(obj3.array);
obj3.helloWorld('hi');