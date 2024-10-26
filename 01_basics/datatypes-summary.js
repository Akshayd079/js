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
