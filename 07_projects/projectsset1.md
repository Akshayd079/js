project link 
https://stackblitz.com/edit/dom-project-chaiaurcode-lh4iw6?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,index.html

## Solution code

## project 1

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }

  });
});

```

## project 2

``` javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid height"
  } else if(weight === '' || height < 0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight"
  } else {
   const bmi = (weight / ((height*height)/10000).toFixed(2))

   // show result
  //  results.innerHTML = `<span>${bmi}</span>`

   if (bmi < 18.6){
    results.innerHTML = `<span>${bmi}</span> Underweight`
   } else if  (bmi > 18.6 && bmi < 24.9){
    results.innerHTML = `<span>${bmi}</span> Fit`
   } else {
    results.innerHTML = `<span>${bmi}</span> You're ugly`
   }
  }

}) 
```
## project 3

``` javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date();
// console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```