const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function(){
    h1.style.backgroundColor = 'hotpink';
})

// använd mouseleave för att ändra bakgrundsfärgen på bodyn till någon annan färg

h1.addEventListener('mouseleave', function(){
    h1.style.backgroundColor = 'skyblue';
})

h1.addEventListener('click', randomColor);

function randomColor(){
    //Math.random() ger ett random nummer från 0 upp till men inte inklusive 1
    const randomNumber = Math.random() ;

    const hue = randomNumber * 360;
    console.log(randomNumber, hue);

    h1.style.color = `hsl(${hue}, 80%, 30%)`;
}


//Här ändras bodyns bakgrundsfärg beroende på muspekarens position
document.body.addEventListener('mousemove', bodyBackground);

//Callbackfunktionen som används i event listenern
function bodyBackground(event){
    const hue = mapHue(event.clientX); 
    const lightness = mapLightness(event.clientY);

    console.log(hue, lightness);

    document.body.style.backgroundColor = `hsl(${hue}, 60%, ${lightness}%)`
}

//En funktion som räknar om y till ett  lightnessvärde mellan 0 och 100
function mapLightness(y){
    //Hämtar fönstrets höjd i pixlar
    const maxHeight = window.innerHeight;

    //Hela spannet
    // const newLightness = y/maxHeight * 100;

    //Bara ljusa nyanser
   const newLightness = 70 + y/maxHeight * 20;

    return newLightness;
}

//En funktion som räknar om x till ett hue värde mellan 0 och 360
function mapHue(y){
    //Hämtar fönstrets bredd i pixlar
    const maxWidth = window.innerWidth;

    //regnbågens alla färger
    // const newHue = y/maxWidth * 360;

    //Gröna nyanser
    // const newHue = 100 + y/maxWidth * 90;

    //Lila nyanser
    const newHue = 250 + y/maxWidth * 50;

    return newHue;
}