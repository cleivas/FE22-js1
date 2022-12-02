
$.get('https://restcountries.com/v3.1/lang/spa').then(countries=>{
    console.log(countries);

    const populationArray = _.pluck(countries, 'population');
    console.log(populationArray);

    const sortedCountries = _.sortBy(countries, 'population');
    console.log(sortedCountries);

    const maxPopulation = _.max(countries, 'population');
    console.log(maxPopulation);

})

const deck = [];
const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for(let i=0; i<suits.length; i++){
    for(let j=0; j<values.length; j++){
        deck.push(
            {
                suit: suits[i],
                value: values[j]
            }
        )
    }
}

console.log(deck);

const shuffledDeck = _.shuffle(deck);
console.log(shuffledDeck);

const randomCard = shuffledDeck[_.random(0, shuffledDeck.length-1) ];
console.log(randomCard);

console.log(...deck);
