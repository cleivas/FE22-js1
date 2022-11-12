const btn = document.querySelector('button');
btn.addEventListener('click', response);

// btn.addEventListener('click', function(event){
//     console.log("Klickad!")
//     console.log(event);  
// })

// btn.addEventListener('click', event=>{
//     console.log("Klickad!")
//     console.log(event);  
// })

function response(event){
    console.log("Klickad!")
    console.log(event);
}
//Skillnad mellan att definiera ett argument där funktionen anropas och att förvara argumenten i variabler. 
//Samma princip som oven med callbackfunktionen
function add(x, y){
    return x+y;
}

add(5, 3);
const numb1 = 4;
const numb2 = 64;
add(numb1, numb2);

function changeH1Text(){
    const h1 = document.querySelector('h1');
    h1.innerText = 'KLICKAD!!!!';
}
btn.addEventListener('click', changeH1Text);

let counter = 0;
function clickCounter(){
    counter++;
    const p = document.querySelector('p');
    p.innerText = `Knappen har klickats ${counter} gånger`;
}
btn.addEventListener('click', clickCounter);