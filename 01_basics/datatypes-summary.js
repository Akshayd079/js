// Primitive 

// 7 types : string, Number, Boolen, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 12165545165156n

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', 'doga']
let myObj = {
    name: 'Akshay',
    age: 22,
}

const myFunction = function (){
    console.log('Akshay');
}

console.log(typeof heros);


// +++++++++++++++++++++++++++++++++++++++++++++

// memory 
// stack (primative), Heap (Non primative)

let myCompanyname = 'softhat'

let anothername = myCompanyname
anothername = 'Softtt'


console.log(myCompanyname);
console.log(anothername);

let userOne = {
    email : "user@gmail.com",
    upi : "user@sbi"
}

let userTwo = userOne

userTwo.email = "user@yahoo.com"

console.log(userTwo.email);
console.log(userOne.email);



