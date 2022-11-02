const el = document.createElement('h1');
document.body.appendChild(el);
el.innerText = 'Result';

const x = 50;
const y = 20;

if(x===y){
    console.log("X är lika med y");
    el.style.backgroundColor = 'green';
}
else if(x<20){
    console.log("x är mindre än y");
    el.style.backgroundColor = 'blue';
}
else{
    console.log("Vet inte vad x är");
    el.style.backgroundColor = 'hotpink';
}

//skapar 10 h1-element med hjälp av en for-loop
//Ge dem valfri text
//de första fem ska ha en orange textfärg
//De sista fem ska ha en lila textfärg

for(let i=0; i<10; i++){
    const el = document.createElement('h1');
    document.body.appendChild(el);
    el.innerText = 'Hello, some potatis!';

    if(i==2){
        el.style.color = 'turquoise';
    }
    else if(i<5){
        el.style.color = 'orange';
    }
    else if(i==6){
        el.style.color = 'hotpink';
    }
    else{
        el.style.color = 'violet';
    }

    //När i är udda sätter vi bakgrundsfärgen till ljusrosa
    if(i%2 == 1){
        el.style.backgroundColor = 'lightpink';
    }
    console.log(i % 2 );
}