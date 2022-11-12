function callBack(par){
    console.log('callback');
    console.log(par);
}

const callBackArrow = () =>{
    console.log('callback');
    console.log(par);
}

console.log( callBack );
console.log( typeof callBack);
callBack('hej');

function higherOrder(func){
    console.log('higher order');
    func('från higher Order');
}

console.log("---higher order func---")
higherOrder(callBack );

