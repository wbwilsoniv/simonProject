// Global Variables
const gameBoard = document.querySelector(`.gameBoard`);
const redBtn = document.querySelector(`.redParentDiv`);
const blueBtn = document.querySelector(`.blueParentDiv`);
const greenBtn = document.querySelector(`.greenParentDiv`);
const yellowBtn = document.querySelector(`.yellowParentDiv`);
const form = document.querySelector('.gameBoard');
const btn = form.querySelectorAll(".gamebtn");
const clearBtn = document.querySelector('.clear');
const startBtn = document.querySelector('.start');
const btnArray = ['green',`red`,'yellow', 'blue'];
let userScore = 0;
let compArray = [];
let userArray = [];

// Game Logic Functions

// function from MDN for inclusive random integer between two values.
// use: randomly produce number between 1-4 to push to compArray for game logic.
function randomize() {
      function getRandomNum(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      let randomNum = getRandomNum(0, 3);
      compArray.push(btnArray[randomNum]);
}
randomize();

// on click of startbtn - game logic runs
function gameStart() {
  startBtn.addEventListener('click', (e) => {
      e.preventDefault();
      randomize();
  })
}
gameStart();

// function to take User input and push to userArray
// when button click, pushes value (set as color) of button to userArray
function getUserInput() {
        form.addEventListener('click', (e) => {
        e.preventDefault();
        // checks for value(color) of e.target before pushing to userArray
        if (e.target.value === 'green'){
              userArray.push('green');
              greenBtn.classList.add('glow');
        }
        if (e.target.value === 'blue'){
              userArray.push('blue');
              blueBtn.classList.add('glow');
        }
        if (e.target.value === 'red'){
              userArray.push('red');
              redBtn.classList.add('glow');
        }
        if (e.target.value === 'yellow'){
              userArray.push('yellow');
              yellowBtn.classList.add('glow');
        }
      // debugger;
  });
}
getUserInput();
console.log(userArray);
// game logic to check userArray & compArray then call randomize function to add additional color and increase userScore by 1
function checkArrays(userArray, compArray) {
      if(userArray === compArray && userScore >= 5){
            console.log('Winner');
      } else if (userArray === compArray) {
            console.log('Correct!');
            userScore += 1;
            randomize();
      } else {
            console.log('You Lose');
      }
}
checkArrays();
// clear game function
function clearGame() {
      clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        userArray.length = 0;
        compArray.length = 0;
        userScore = 0;
      })
}
clearGame();

// View

// function for displaying compArray
// loops over array - toggles display for each color
function showCompArray () {
      for(i = 0; i < compArray.length; i+=1){
        if(compArray[i] === 'green'){
          greenBtn.classList.add('glow');
        } else if(compArray[i] === 'red'){
          redBtn.classList.add('glow');
        } else if(compArray[i] === 'blue'){
          blueBtn.classList.add('glow');
        } else if(ccompArray[i] === 'yellow'){
          yellowBtn.classList.add('glow');
        }
      }
}
// function for displaying userArray
function showUserArray(){
      redBtn.add
}
// function to display userScore

// win logic display function

// lose logic display function

//