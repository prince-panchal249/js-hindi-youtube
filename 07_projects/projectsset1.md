# Projects related to DOM

## project link
[click me](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 

## project 1 solution

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
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

## project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  // const body = document.getElementsByTagName('body')[0]

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let message = ""

    if (bmi < 18.6){
      message = 'under weight'
    } else if (bmi >= 18.6 && bmi <= 24.9 ){
      message = 'Normal Weight'
    } else {
      message = 'over Weight'
    }

    // show the result
    // results.innerHTML = `<span>${bmi}</span>`;
    // results.innerHTML = `<span>Your BMI is <strong>${bmi}</strong> - <em>${message}</em> </span>`
    results.innerHTML = `<span> ${bmi}  ${message} </span>`
  }
});

// const p = document.createElement('p')
  // if (bmi < 18.6){
  //   p.innerHTML = `<span> Under Weight: ${bmi}</span>`;
  // } else if (bmi >= 18.6 && bmi <= 24.9 ){
  //   p.innerHTML = `<span> Normal Weight: ${bmi}</span>`;
  // } else {
  //   p.innerHTML = `<span> Normal Weight: ${bmi}</span>`;
  // }

//   p.style.fontSize = '2rem'
//   results.appendchild(p)

```

## project 3 solution

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function (){
  let date = new Date()
  // console.log(date.toLocaleTimeString)
  clock.innerHTML = date.toLocaleTimeString()
}, 1000 )

```