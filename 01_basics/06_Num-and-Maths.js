const score = 400;
// console.log(typeof score)
// console.log(score)

const balance = new Number(100);
// console.log(balance);

// console.log(score.toString)

// console.log(balance.toFixed(2)) //Used for adding decimal point at last.

const otherNumber = 126.988873
// console.log(otherNumber.toPrecision(3))


const Num = 100000000
// console.log(Num.toLocaleString('en-IN'))

//++++++++++++++++Math++++++++++++++++++++++//

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(3.678))
// console.log(Math.ceil(2.3));
// console.log(Math.floor(3.9));
// console.log(Math.min(3,5,1,0,9))
// console.log(Math.max(11,21,18,38,10))


// ************Math.random()********


console.log(Math.random());
console.log((Math.random()*10 )+ 1);


const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * max - min + 1 )+ min );