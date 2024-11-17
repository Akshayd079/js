const user = {
    username: 'Akshay',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); 
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = 'akshay'
//     console.log(this.username)
// }
// chai();

// const chai = function(){
//     let username = 'akshay'
//         console.log(this.username)
// }

// const chai =  () => {
//     let username = 'akshay'
//         console.log(this)
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username: 'Akshay'})


console.log(addTwo(3,4));

// const myArr = [1,2,3,5,4]

// myArr.forEach(() => ())

