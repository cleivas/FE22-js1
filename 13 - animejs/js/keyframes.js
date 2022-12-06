const animationInfo = {
    targets: 'div',
    keyframes: [
        {translateY: '100px', translateX: '100px', backgroundColor: 'hsl(0, 50%, 80%)'},
        {translateY: '0px', translateX: '100px', backgroundColor: 'hsl(200, 50%, 80%)'},
        {translateY: '200px', translateX: '50px'},
        {translateY: '0px', translateX: '0px', backgroundColor: 'hsl(271, 62%, 69%)'}
    ],
    delay: 1000,
    duration: 4000,
    loop: true
}

anime(animationInfo);