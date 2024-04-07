let MyDate = new Date();
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toISOString())
// console.log(MyDate.toJSON())
// console.log(MyDate.toLocaleString())


// let mycreatedDate = new Date( 2023,0,23);

// let mycreatedDate = new Date( 2023,0,23,5,3);

// let createdDate = new Date("2024-04-01")
let createdDate = new Date("04-07-2024")
// console.log(createdDate.toLocaleString())


let TimeStamp = Date.now();
// console.log(TimeStamp)
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let MynewDate = new Date()

// console.log(MynewDate)
// console.log(MynewDate.getDay())
// console.log(MynewDate.getFullYear())


//*********************************** */


MynewDate.toLocaleString('default',{
    weekday : "long"
})

console.log(MynewDate)