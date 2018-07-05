// Global Variables
const gameBoard = document.querySelector(`.gameboard`);
const redBtn = document.querySelector(`.redbtn`);
const blueBtn = document.querySelector(`.bluebtn`);
const greenBtn = document.querySelector(`.greenbtn`);
const yellowBtn = document.querySelector(`.yellowbtn`);
const compArray = [];
const userArray = [];
const btnArray = [`red`, 'blue', 'green', 'yellow'];

// Game Logic Functions
function buildBtnArray() {
      
}

function randomize() {
      // function from MDN for inclusive random integer between two values.
      // use: randomly produce number between 1-4 to push to compArray for game logic.
      function getRandomNum(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      let randomNum = getRandomNum(1, 4);
      console.log(randomNum);
      

}
// Pass-thru buttons to create button class?
// add eventlistners (click) to button
// add value to each button
// add color
class Btn (color, value) {
      constructor {

      }
}
// on click starts game
// randomly select 1-4, push object to
function gameStart() {

}