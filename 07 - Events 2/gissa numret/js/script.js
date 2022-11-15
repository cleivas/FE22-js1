let randomNumber = Math.round( Math.random()*100 );
let numberOfGuesses = 0;

const btn = document.querySelector('#guess-btn');
btn.addEventListener('click', handleGuess);

function handleGuess(event){
    event.preventDefault();

    const input = document.querySelector('#guess-input');
    const guess = input.value;
    input.value = '';

    numberOfGuesses++;
    
    if(guess>randomNumber){
        alert('Gissa lägre!');
    }
    else if(guess<randomNumber){
        alert('Gissa högre!');
    }
    else if(guess==randomNumber){
        alert(`Du gissade rätt! Det tog dig ${numberOfGuesses} försök.`)

        randomNumber = Math.round( Math.random()*100 );
        numberOfGuesses = 0;
    }
}