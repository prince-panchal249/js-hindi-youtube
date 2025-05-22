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

## project 4 solution 

```javascript
// random guess number
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// validateGuess checks that number is between 1 and 100 or not
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numOfGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// checkGuess checks that the number is high or low at some point
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed It Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number Is Too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

// updates guess remaining, total guesses and clear the guess field for another guess
function displayGuess(guess) {
  // cleanUp guess
  userInput.value = ''; // cleanup geuss field
  guessSlot.innerHTML += `${guess} `; // push guessed values in it
  numOfGuess++;
  remaining.innerHTML = `${11 - numOfGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // setattribute is key value pair that's why value is empty
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numOfGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true; // this game write end of the declaration attributes
  });
}


```