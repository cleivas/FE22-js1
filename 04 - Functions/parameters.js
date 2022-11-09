//typeOfElement, text och color är parametrar
function addElement(typeOfElement, text, color){
    const element = document.createElement(typeOfElement);

    element.innerText = text;
    element.style.color = color;
    document.body.append(element);
}
//'p' och 'Det här är ett p element' är argument
addElement('p', 'Det här är ett p element');
addElement('h1', 'CLARA');
addElement('h4', 'Ännu ett element');

//Lägg till en parameter för textfärgen
addElement('h1', 'Ayub', 'hotpink');
addElement('p', 'Funkar det här', 'green');

//Definiera en funktion som har två parametrar
//Parametrarna är: antal och color
// Funktionen ska skapa en OL-lista
// Listan ska ha lika många li-element som parametern antal
//Och ha färgen som parametern color

function createList(amount, color = 'orange'){
    const ol = document.createElement('ol');
    ol.style.color = color;
    document.body.append(ol);

    for(let i=0; i<amount; i++){
        const li = document.createElement('li');
        ol.append(li);
    }
}
createList(5, 'blue');
createList(10, 'green');
createList(5, 'hotpink');


//När en funktion definieras skapas alltid arrayen arguments
//Den innehåller alla argument som skickas med när funtionen anropas
function noArguments(){
    console.log(arguments);
}
noArguments(3, 6, 23, '3253');

function listArguments(){
    const ul = document.createElement('ul');
    document.body.append(ul);
    
    for(let i=0; i<arguments.length; i++){
        const li = document.createElement('li');
        li.innerText = arguments[i];
        ul.append(li);
    }
}

listArguments('ett', 32, 'ord', 2);