const array = [1, 'två', { nummer: 3, text: '3'}, 4, 5];
for (const element of array) {
  console.log(element);
  if(typeof element === 'object')
    break;
}

array.forEach(element=>{
    console.log(element);
})

console.log('WHILE')
const arr = [1, 2, 3, 4, 5];
while(true){
  const random = Math.floor(Math.random()*arr.length);
  console.log(arr[random]);
  if(arr[random] === 2) break;
}

console.log('INDEX');
let index = 0;

while(index<arr.length){
    console.log(arr[index]);
    index++;
}

