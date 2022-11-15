const container = document.querySelector('#btn-container');

container.addEventListener('click', logText);

function logText(event){
    console.log(event.target);

    if(event.target.tagName == 'BUTTON'){
        console.log(event.target.innerText);
    }

}