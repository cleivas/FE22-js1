const colors = ['hotpink', 'violet', 'orange', 'turquoise', 'lightpink', 'blue'];

console.log(colors);
console.log(colors[2]);
console.log(colors.length);

for(let i=0; i<colors.length; i++){
    const el = document.createElement('h1');
    document.body.appendChild(el);
    el.innerText = colors[i];

    //När i är udda ska textfärgen på el vara motsvarande färg i arrayen

    if(i%2 == 1){
        el.style.color = colors[i];
    }
}