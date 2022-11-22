let landslag = ['Argentina', 'Qatar', 'Frankrike'];

console.log( landslag.push('Portugal', 'Brasilien'));
console.log(landslag);

//pop - tar bort det sista elementet i en array
const removedElement = landslag.pop();
console.log(removedElement);
console.log(landslag);

const removedElement2 = landslag.pop();
console.log(removedElement2);
console.log(landslag);

//Använd unshift för att lägga till brasilien och portugal till början av arrayen
console.log( landslag.unshift(removedElement, removedElement2));
console.log(landslag);

//Splice
//stoppa in ett lanslag mellan argentina och qatar
landslag.splice(3, 0, 'England' );
console.log(landslag);
//Ta bort portugal och argentina
const removedElements = landslag.splice(1, 2);
console.log(removedElements);
console.log(landslag);


//Filter
const numbers = [54, 23, 32, 5];
const lessThan30 = numbers.filter(
    function(element){
        return element<30;
    }
);
// const lessThan30 = numbers.filter(element=>element<30);
console.log(lessThan30);
console.log(numbers)

const moreThan30 = numbers.filter(
    function(element){
        return element>30;
    }
);
console.log(moreThan30);

//forEach
//Gångra alla nummer med tio
numbers.forEach(
    function(element, index, array){
        array[index] = element*10;
        console.log(index);
    }
)
console.log(numbers);
