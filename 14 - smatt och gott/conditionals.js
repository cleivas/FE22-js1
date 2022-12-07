const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'june', 'may'];

const randomNumber = Math.floor(Math.random()* days.length);

const currentDay = days[randomNumber];
console.log(currentDay);


switch(currentDay){
    case 'mon':
        console.log('Monday');
    case 'tue':
        console.log('Tuesday');
    case 'wed':
        console.log('Wednesdau');
    case 'thu':
        console.log('Thursday');
    case 'fri':
        console.log('Friday');
    case 'sat':
        console.log('Saturday');
    case 'sun':
        console.log('Sunday');
        break;
    default:
        console.log("That's not a day");
}

//Ternary

const moreOrLess = randomNumber>3 ? 'more than three' : 'less than three';
console.log(moreOrLess);