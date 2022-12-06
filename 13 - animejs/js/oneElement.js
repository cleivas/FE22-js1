const divAnimation = {
    targets: 'div',
    backgroundColor: 'hsl(197, 71%, 73%)',
    borderRadius: '50%',
    scale: 2,
    translateX: '12rem',
    translateY: '50px',
    rotate: '180deg',

    duration: 2000,
    endDelay: 500,
    easing: 'easeOutBounce',
    direction: 'alternate',
    loop: 1
}

const div = document.querySelector('div');
div.addEventListener('click', function(){
    anime(divAnimation);
})