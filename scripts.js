// Global Variables
const gameBoard = document.querySelector(`.gameBoard`);
const redBtn = document.querySelector(`.redbtn`);
const blueBtn = document.querySelector(`.bluebtn`);
const greenBtn = document.querySelector(`.greenbtn`);
const yellowBtn = document.querySelector(`.yellowbtn`);
const compArray = [];
const userArray = [];
const btnArray = ['green',`red`,'yellow', 'blue'];
const form = document.querySelector('.gameBoard');
const btn = form.querySelectorAll(".gamebtn");
const clearBtn = document.querySelector('.clear');
const startBtn = document.querySelector('.start');
let userScore = 0;


// Game Logic Functions

function randomize() {
      // function from MDN for inclusive random integer between two values.
      // use: randomly produce number between 1-4 to push to compArray for game logic.
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
        }
        if (e.target.value === 'blue'){
              userArray.push('blue');
        }
        if (e.target.value === 'red'){
              userArray.push('red');
        }
        if (e.target.value === 'yellow'){
              userArray.push('yellow');
        }
      // debugger;
  });
}
getUserInput();
console.log(userArray);
// game logic to check userArray & compArray then call randomize function to add additional color and increase userScore by 1
function checkArrays() {
      if(userArray === compArray){
            userScore += 1;
            console.log('Correct!');
            randomize();
      } else {
            console.log('Game Over');
      }
}
checkArrays();
// win logic function
function winCheck() {
      if(userArray === compArray && userScore === 15) {
            console.log('Winner');
      }
}
winCheck();
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

// function for displaying userArray

// function to display userScore

// win logic display function

// lose logic display function

//