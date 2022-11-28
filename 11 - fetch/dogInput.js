const btn = document.querySelector("#breed-btn");

btn.addEventListener('click', getBreed);


function getBreed(event){
    event.preventDefault();
    const input = document.querySelector('#breed-input');
    
    const breed = input.value.toLowerCase();
    input.value = '';
    console.log(breed);
    fetchDogImage(breed);
}  

function fetchDogImage(breedPar){
    const url = `https://dog.ceo/api/breed/${breedPar}/images/random`;
    console.log(url);

    fetch(url)
        .then(response=>response.json())
        .then(displayDog);
}

function displayDog(dogData){
    console.log(dogData.message);

    document.querySelector('#dog-container').innerHTML = '';

    const img = document.createElement('img');
    img.src = dogData.message;
    document.querySelector('#dog-container').append(img);
}