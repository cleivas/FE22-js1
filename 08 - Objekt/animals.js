const goat = {
    color: 'black',
    sound: 'bahhhh',
    weight: 47,
    name: 'Lucifer',
    speak(){
        console.log(this.sound, this.sound);
    },
    feed(amountOfFood){
        this.weight+=amountOfFood;
        // this.weight = this.weight + amountOfFood;
    }
}
goat.speak();
goat.feed(3);
console.log(goat.weight);

//Definiera ett objekt för ett annat djur med samma egenskaper men med andra värden
const rabbit = {
    color: 'brown',
    sound: 'pip',
    weight: 2,
    name: 'Nosferatu',
    speak(){
        console.log(this.sound, this.sound, this.sound);
    },
    feed(amountOfFood){
        this.weight+=amountOfFood;
        // this.weight = this.weight + amountOfFood;
    }
}
rabbit.speak();
rabbit.feed(3);
console.log(rabbit.weight);

// const DOM-element-Mall = {
//     event: {
//         target: domElement,
//     },
//     addEventListener(typeOfEvent, callBackFunction){
//         callBackFunction(this.event);
//     }
// }