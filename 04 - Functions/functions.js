function logText(){
    console.log("Det här är lite text");
    console.log("Det här är också lite text");
}

logText();
logText();
logText();

function addH1(){
    const h1 = document.createElement('h1');
    h1.innerText = "Some text";
    document.body.appendChild(h1);
}


addH1();
addH1();

//skriv en funktion som lägger till 
//en valfri lista med 3 list items
function addList(){
    const ol = document.createElement('ol');
    document.body.appendChild(ol);
    for(let i=0; i<3; i++){
        const li = document.createElement('li');
        ol.append(li);
    }
}

addList();
addList();

