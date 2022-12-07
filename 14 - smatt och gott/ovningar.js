let deck = [];
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

//övning deck 1, 2 och 3
// const shuffledDeck = _.shuffle(deck);
const pokerHand = _.sample(deck, 5);
deck = _.without(deck, pokerHand[0], pokerHand[1], pokerHand[2], pokerHand[3], pokerHand[4]);
// deck = _.without(deck, ...pokerHand);
console.log(...pokerHand);

console.log(pokerHand);
console.log(deck);

//Countries övning 1
fetch('https://restcountries.com/v3.1/lang/spa').then(response=>response.json()).then(
    countries=>{
        console.log(countries);

        const countByPopulation =  _.countBy(countries, function(country){
            // console.log(country);
            // if(country.population > 10000000)
            //     return 'more';
            // else 
            //     return 'less';
            return country.population > 10000000 ? 'more':'less';
        })
        console.log(countByPopulation);
    }
)

//API JSON övning country API 3
fetch('https://restcountries.com/v3.1/capital/montevideo').then(response=>response.json()).then(
    countries=>{
        console.log(countries[0]);
        console.log(countries[0].name.common);
        console.log(countries[0].flags.png);
    }
)