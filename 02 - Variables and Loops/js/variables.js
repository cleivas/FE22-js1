let height = 194;
console.log(height);
console.log(typeof height);

// Man kan göra matematiska uträkningar med variabler
height = height - 4;
console.log(height);

//Helt okej att byta ut innehållet i en variabel till en annan datatyp
height = "hundranittio";
console.log(height);

const dateOfBirth = "November 11, 1999";
console.log(dateOfBirth);
console.log(typeof dateOfBirth);

//Detta går inte eftersom variaben är en const så innehållet kan ej ändras
// dateOfBirth = "Deceber 24, 2000";

let everyoneLovesJS = true;
console.log(everyoneLovesJS);
console.log(typeof everyoneLovesJS);

let emptyVariable;
console.log(emptyVariable);
console.log(typeof emptyVariable);

//objekt
const h1 = document.querySelector('h1');
console.log(h1);
h1.innerText = "Texten ändras via en variabel";
h1.style.color = 'hotpink';