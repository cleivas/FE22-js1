//Random dog 
const dogJson = `{"message":"https:\/\/images.dog.ceo\/breeds\/puggle\/IMG_122350.jpg","status":"success"}`;

const dogObj = JSON.parse(dogJson);
console.log(dogObj);

const imgEl = document.createElement('img');
document.body.appendChild(imgEl);
imgEl.src = dogObj.message;


//3 random images
const threeBulldogs = '{"message":["https:\/\/images.dog.ceo\/breeds\/bulldog-boston\/n02096585_1525.jpg","https:\/\/images.dog.ceo\/breeds\/bulldog-french\/n02108915_1465.jpg","https:\/\/images.dog.ceo\/breeds\/bulldog-french\/n02108915_341.jpg"],"status":"success"}';

const threeBulldogsObj = JSON.parse(threeBulldogs);
console.log(threeBulldogsObj.message);

//Visa alla tre bulldogbilder på webbsidan

// for(let i =0; i<threeBulldogsObj.message.length; i++){
//     const img = document.createElement('img');
//     document.body.append(img);
//     img.src = threeBulldogsObj.message[i];
// }

threeBulldogsObj.message.forEach(
    function(bulldogUrl){
        const img = document.createElement('img');
        document.body.append(img);
        img.src = bulldogUrl;
    }
)
