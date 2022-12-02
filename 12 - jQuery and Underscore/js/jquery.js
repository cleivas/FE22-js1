$('#hampus').text('jQuery');
// $('#hampus').html('<p>nu är detta ett p i hq</p>');

innerHTML = '<a>länk</a>'

$('h1').css('color', 'skyblue');

// const h1s = document.querySelectorAll('h1');
// h1s[h1s.length-1].style.backgroundColor = 'hotpink';

$('h1:last').css('color', 'hotpink');
$('h1').last().css('backgroundColor', 'skyblue');

//lägga till en knapp
//lägga till en eventlistener på knappen 
//varje gång man klickar ska andra h1-elementet visa hur många gåner vi klickat

const btn = $('<button>Klicka!</button>');
$('body').append(btn);
let clicks = 0;

btn.click(event=>{
    clicks++;
    $('h1:nth-child(2)').text(clicks);
    // $('h1').eq(1).text(clicks);
    console.log(clicks);
})

//hämta random hundbild med jQuery
const url = 'https://dog.ceo/api/breeds/image/random';

$.get(url).then(function(result){
    console.log(result.message);
    const img = $('<img>');
    img.attr('src', result.message);
    $('body').append(img);
})