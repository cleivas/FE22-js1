const htmlElement = {
    type: 'h1',
    fontSize: '60px',
    color: 'orange',
    innerText: 'Grit'
}

const htmlElement2 = {
    type: 'h4',
    fontSize: '20px',
    color: 'hotpink',
    innerText: 'Groot'
}

const htmlElement3 = {
    type: 'p',
    fontSize: '80px',
    color: 'skyblue',
    innerText: 'Great'
}

createElement(htmlElement);
createElement(htmlElement2);
createElement(htmlElement3);


function createElement(elObj){

    const el = document.createElement(elObj.type);
    el.innerText = elObj.innerText;
    el.style.fontSize = elObj.fontSize;
    el.style.color = elObj.color;
    document.body.appendChild(el);
}

// function add(x, y){
//     return x+y;
// }
// add(5, 7);
// add(10, 0);

//Lägg till tidigare funktion som en metod i det här objektet
//Genom att anropa metoden på objektet kommer ett html-element skapas och läggas till till bodyn
const htmlElement4 = {
    type: 'h3',
    fontSize: '15px',
    color: 'red',
    innerText: 'Groove',
    create(){
        const el = document.createElement(this.type);
        el.innerText = this.innerText;
        el.style.fontSize = this.fontSize;
        el.style.color = this.color;
        document.body.appendChild(el);       
    }
}

htmlElement4.create();