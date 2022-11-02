//Övningarna For Loop - DOM - 1 till 4

const olElement = document.createElement('ol');

const bodyElement = document.querySelector('body');
bodyElement.appendChild(olElement);
// document.body.appendChild(olElement);

//En variabel för att ändra på bakgrunds- och textfärgen för li-elementet

for(let i=0; i<10; i++){
    //Skapar och lägger till ett li element 
    const liElement = document.createElement('li');
    liElement.innerText = `TEXT`;
    olElement.appendChild(liElement);

    //Använder i för att räkna ut en border thickness
    liElement.style.border = `${1+i}px solid blue`;
}

const liList = document.querySelectorAll('li');
for(let i=0; i<liList.length; i++){
    //Lightness ska gå från 0 till 100 på så många steg som det finns li-element, minus första li-elementet
    //Antal steg räknas alltså ut med liList.length-1
    //Storleken på steget räknas ut med 100/antal steg
    // när i är 0 har inget steg tagits
    //när i är 1 har 1 x steg tagits
    //när i är 5 har 5 x steg tagits osv

    const lightness = i*100/(liList.length-1);
    console.log(i, lightness);

    liList[i].style.color = `hsl(0, 0%, ${lightness}%)`;
    liList[i].style.backgroundColor = `hsl(0, 0%, ${100-lightness}%)`;
}