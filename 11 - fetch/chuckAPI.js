const url = 'https://api.chucknorris.io/jokes/randomcategory=food';

fetch(url)
    .then( response=>{
        console.log(response);
        if(response.status >= 200 && response.status < 300){
            return response.json()
        }
        else {
            throw 'Datan gick inte att hämta';
        }
    })
    .then( showJoke )
    .catch( showError );

function showJoke(jokeData){
    console.log(jokeData.value);
}

function showError(error){
    console.log(error);
}

console.log('Gör det här också');