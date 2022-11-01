//Två variabler med olika datatyper
let age = 52;
const fullName = "Bob Ross";
 
//Så här har vi satt ihop meningar tidigare
const sentence1 = fullName + " was " + age + " years old when he passed away.";
 
//Så här sätter man ihop en mening med template literals
//OBS du måste använda backtick
const sentence2 = `${fullName} was ${age} years old when he passed away.`
 
//Resultatet av de två olika sätten blir exakt samma
console.log(sentence1);
console.log(sentence2);


const h1 = document.querySelector('h1');
 
//Fullt mättad röd
h1.style.color = "hsl(0, 100%, 50%)";
 
//Halvt mättad, ljusröd
h1.style.backgroundColor = "hsl(0, 50%, 90%)";

//Skapar tio h5-element där bakgrundsfärgen skiftar 
for(let i=0; i<10; i++){
    const h5 = document.createElement('h5');
    h5.innerText = i;
    document.body.appendChild(h5);
    h5.style.backgroundColor = `hsl(${i*36}, 80%, 70%)`;
}