//Övning return #3 och #4

function getFahrenheit(celsius){
    // const fahrenheit = celsius * 1.8 + 32;
    // return fahrenheit;
    return (celsius * 1.8) + 32;
}
console.log( getFahrenheit(12) );
console.log( getFahrenheit(45) );


function getCelsius(fahrenheit){
    return (fahrenheit - 32) / 1.8;
}

console.log( getCelsius(53.6));
console.log( getCelsius(113));

//Det returnerade värdet från en funktion kan användas till vad som helst
const data = 70;
const temp = document.createElement('h1');
const temp2 = document.createElement('h1');
temp.innerText = getCelsius(data)+'C';
temp2.innerText = getFahrenheit(data)+'F';
document.body.append(temp, temp2);

//Övning return #5
console.log("Get Sum");
function getSum(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        // sum = sum + arguments[i];
        sum+=arguments[i];
        // console.log(sum, arguments[i]);
    }
    return sum;
}

let result = getSum(3, 2, 64, 544, 214, 235);
console.log(result);

function getSumOfArray(arrayOfNumbers){
    let sum = 0;
    for(let i=0; i<arrayOfNumbers.length; i++){
        // sum = sum + arguments[i];
        sum+=arrayOfNumbers[i];
        // console.log(sum, arguments[i]);
    }
    return sum;
}
const array = [3, 2, 64, 544, 214, 235];
result = getSumOfArray(array);
console.log(result);

//Övning DOM #3
function createPriorityText(content, priority){
    const h3 = document.createElement('h3');
    h3.innerText = content;
    document.body.append(h3);

    //Högst prioriteringgrad (1) = störst font-size
    if(priority == 1){
        h3.style.fontSize = 'xx-large';
    }
    else if(priority==2){
        h3.style.fontSize = 'medium';
    }
    else if(priority==3){
        h3.style.fontSize = 'small';
    }
    else{
        h3.remove();
    }
}

createPriorityText('Hög', 1);
createPriorityText('Mellan', 2);
createPriorityText('Låg', 3);
createPriorityText('ingen');


console.log(TEST);