const name = "Hitesh"

const repocount = 10;

console.log(`My name is ${name} and my repocount is ${repocount}`)

// Another way to declare string---->

const gameName = new String('Muskanss') 

// console.log(gameName[1]);
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

// If you give negative value in substring it will just ignore it.
const AnotherString = gameName.substring(0,4)
console.log(AnotherString);

const Newstring = gameName.slice(-8,7);
console.log(Newstring);