const divs = document.querySelectorAll('div');
console.log(divs);

for(let i=0; i<divs.length; i++){
    divs[i].addEventListener('click', function(event){
        alert('Div ' + (i+1));

        if(i==1 || i==4) event.stopPropagation();
    })
}


// divs[0].addEventListener('click', function(event){
//     alert('Div 1');
//     console.log(event.target);
// })

// divs[1].addEventListener('click', function(event){
//     alert('Div 2');
//     event.stopPropagation();
// })
// divs[2].addEventListener('click', function(){
//     alert('Div 3');
// })
// divs[3].addEventListener('click', function(){
//     alert('Div 4');
    
// })
// divs[4].addEventListener('click', function(event){
//     alert('Div 5');
//     event.stopPropagation();
// })

