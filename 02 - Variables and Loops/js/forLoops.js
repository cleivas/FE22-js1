console.log("-----0 till 3-----")
for(let i = 0; i<4; i++){
    console.log(i);
}

console.log("-----10 till 1-----")
for(let i = 10; i>0; i--){
    console.log(i);
}

console.log("-----0 till 49-----")
for(let i = 0; i<50; i = i+10){
    console.log(i);
}

//skapa 200 h1-element med hjälp av en loop
for(let i = 0; i<200; i++){
    const h1Element = document.createElement('h1');
    h1Element.innerText = 'H1-element på index nummer ' + i;
    document.body.appendChild(h1Element);
    h1Element.style.backgroundColor = 'hotpink';
}

//Hämta alla 200 h1 element och förvara den i en variabel
const h1List = document.querySelectorAll('h1');
console.log(h1List);

//Om vi vill ändra textfärgen till vit på de första tio elementet skulle vi kunna göra det på 10 rader kod
// h1List[0].style.color = 'white';
// h1List[1].style.color = 'white';

//Eller med hjälp av en for-loop
for(let i=0; i<10; i++){
    //i används som indexnumret
    h1List[i].style.color = 'white';
}

//Ändra textfärgen på element 10 till och med 50 till valfri färg
for(let i=10; i<51; i++){
    h1List[i].style.color = 'yellow';
}