const btn = document.querySelector('button');
btn.addEventListener('click', addElement);

function addElement(event){
    event.preventDefault();

    // console.log(event.target);
    const h1 = document.createElement('h1');
    const textIn = document.querySelector('#text-input');
    const numIn = document.querySelector('#number-input');

    h1.innerText = numIn.value + ' ' + textIn.value;

    const hue = 360/numIn.value;
    h1.style.color = `hsl(${hue}, 100%, 60%)`;

    document.body.append(h1);
    textIn.value = '';
    numIn.value = '';

    h1.addEventListener('click', removeElement);
}

function removeElement(event){
    console.log(event.target);
    event.target.remove();
}