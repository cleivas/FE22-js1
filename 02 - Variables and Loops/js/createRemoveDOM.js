//HÄmtar och tar bort h1-elementet
const h1 = document.querySelector('h1');
h1.remove();

// Skapar ett p-element
const p = document.createElement('p');
console.log(p); //Finns ej i DOM:en än

//Lägger till p-elementet till DOM:en
document.body.appendChild(p);
console.log(p); //Finns nu i DOM:en
p.innerText = 'Nu har vi ett nytt p-element';


const article = document.createElement('article');
document.body.appendChild(article);
const img = document.createElement('img');
img.src = 'https://place-puppy.com/300x300';
//Lägger till img-elementet till article-elementet
article.appendChild(img);

//Lägg till ett OL-element till bodyn
//Lägg till minst 2 LI-element till OL-elementet
const ol = document.createElement('ol');
document.body.appendChild(ol);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ol.appendChild(li1);
ol.appendChild(li2);

let liText = "List item number one";
li1.innerText = liText;

liText = "List item number two";
li2.innerText = liText;