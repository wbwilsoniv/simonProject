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

}
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

function checkArrays() {
      if(userArray === compArray){
            randomize();
      } else {
            console.log('Game Over');
      }
}
checkArrays();

