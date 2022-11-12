const btn = document.querySelector('button');
btn.addEventListener('click', changeText);

//Om vi har en eventlistener på en knapp som är inuti ett formulär måste vi se till att default action inte sker
function changeText(event){
    event.preventDefault();

    //Ändra h1-texten
    const textInput = document.querySelector('#h1-text');
    const h1 = document.querySelector('h1');
    h1.innerText = textInput.value;

    //ändra bakgrundsfärgen
    const colorInput = document.querySelector('#change-color');
    document.body.style.backgroundColor = colorInput.value;

    //Töm text input
    textInput.value = '';
    colorInput.value = '';
}

//hämta texten från andra inputen och använd den för att sätta bakgrundsfärgen på bodyn.

//Varje gång man trycker på knappen ska båda text-inputsen bli tomma