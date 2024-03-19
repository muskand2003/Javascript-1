
// concept of bigInt
// const bigNumber = 8898932893820382309283902n;
// console.log(typeof bigNumber)


// concept of symbol 

// const id = Symbol("123")
// const AnothersameId =Symbol("123")
// console.log(id)
// console.log(AnothersameId)

// console.log(id == AnothersameId)


const KpopIdols = ["Jungkook","V","lisa"]
// console.log(typeof KpopIdols)

const obj = {
    name : "muskan",
    age : 20
}
// console.log(typeof obj)



const myfunction = function(){
    // console.log("Hello World")
}

// console.log(typeof myfunction)


//-----------------------------------------------//

// Stack Memory ---> used by primitive datatypes which means they are given the value duplicate forms.

let MyYoutubechannelName = "MuskanStudying"

let MyNewYoutubeChannelName = MyYoutubechannelName;

MyNewYoutubeChannelName = "StudywithMe"


console.log(MyYoutubechannelName);
console.log(MyNewYoutubeChannelName);

// Heap Memory ---> used by Non-primitive type which uses the refernce that means the changes are directly made to the original value.


let InstagramAccount = {
    username : "Muskan",
    password : 12345
}

let NewInstagramAccount = InstagramAccount;

NewInstagramAccount.password = 234567;

console.log(InstagramAccount.password);
console.log(NewInstagramAccount.password);