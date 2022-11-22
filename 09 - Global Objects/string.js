const string1 = "Jag åt knäckebröd med skinka till frukost";

//Egenskapen length är read only
console.log(string1.length);
string1.length = 10;
console.log(string1.length);

//Hämtar bokstaven på index 30
console.log( string1.charAt(30) );

//Bra att använda när man vill jämföra ord med varandra och det itne spelar någon roll om stora eller små bokstäver används
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());

const word = 'ClAra';
const wordToCompare = word.toLowerCase();
console.log(wordToCompare);
console.log( wordToCompare === 'clara');


//Concat, alltså lägga ihop strings
const concatString = string1.concat(' ', word, ' ', wordToCompare);
console.log(concatString);

//Kolla om 'frukost' finns med i string1
//Tillsammans med regular expression (som vi ej kollat på) är det här användbart för att kolla på ett nytt lösenord innehåller specialtecken osv
console.log(string1.includes('frukost') );

//Kolla dokumentationen för substring
//Utgå från string1
//Resultatet i konsolen ska bli: knäckebröd
console.log( string1.substring(7, 17) )