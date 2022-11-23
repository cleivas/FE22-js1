const json = `{"name":"Jason Derulo", "age":33, "songs": ["love", "party", "talk dirty"]}`;

console.log(json);

const obj = JSON.parse(json);

console.log(obj);
console.log(obj.songs[2]);


