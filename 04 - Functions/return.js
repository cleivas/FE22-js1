function multiply(x, y){
    const product = x*y;
    return product;
}

console.log( multiply(10, 5) );

const result = multiply(33, 11);
console.log( result );

function isOdd(number){
    // if(number%2 == 1){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return number%2==1;
}

console.log( isOdd(5) );
console.log( isOdd(100) );

// Är numret 50-60 ? 
// Om ja, returnera sant, om nej returnera falskt

function checkNumberSpan(x){
    return x>=50 && x<=60;
}
console.log('Check number span');
console.log( checkNumberSpan(4));
console.log( checkNumberSpan(54));

//Funktionen ska returnera det högsta argumentet
//Funktionen ska inte ha några parametrar

function getHighestNumber(){
    let highest = 0;
    for(let i=0; i<arguments.length; i++){
        if(arguments[i]>highest){
            highest = arguments[i];
        }
    }
    return highest;
    // return Math.max( ...arguments);
}
console.log("highest number");
console.log(  getHighestNumber(4, 235, 34, 8) );
console.log(  getHighestNumber(435, 23523, 23, 24, 1000, 235543) );

