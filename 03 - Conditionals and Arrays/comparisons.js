const x = '10';
const y = 10;
const z = 15;

let result;

result = x===y; //False eftersom det är olika datatyper
console.log(x===y);
result = x==y; //True eftersom datatyperna inte spelar roll
console.log(x==y);

result = y<z;
result = x<z;
result = x!=y;//false eftsersom datatypen inte spelar roll
result = x!==y; //True eftersom datatypen spelar roll 

console.log(typeof result);

result = x==y && y<z;
result = x==y || y<z;
console.log(x==y, y<z);

result = x==y || y==z;
console.log(x==y, y==z);

// första jämförelsen ska vara sann
//Andra ska vara falsk
//Tredje ska vara sann

result = x==y && !(z<y) && y<z;
console.log(x==y, z<y, y<z)

const word = "hej";
result = word=='då';
result = word=='hej';

const el = document.createElement('h1');
document.body.appendChild(el);
el.innerText = result;

