
// Global Variables
const gameBoard = document.querySelector(`.gameBoard`);
const redBtn = document.querySelector(`#redParentDiv`);
const blueBtn = document.querySelector(`#blueParentDiv`);
const greenBtn = document.querySelector(`#greenParentDiv`);
const yellowBtn = document.querySelector(`#yellowParentDiv`);
const form = document.querySelector('.gameBoard');
const btn = form.querySelectorAll(".parentDiv");
const clearBtn = document.querySelector('.clear');
const startBtn = document.querySelector('.start');
// const redSound = new Audio('sounds/red-piano-a.wav');
// const blueSound = new Audio('sounds/blue-piano-f.wav');
// const yellowSound = new Audio('sounds/yellow-piano-c.wav');
// const greenSound = new Audio('sounds/green-piano-e.wav');
const btnArray = ['green',`red`,'yellow', 'blue'];
let userScore = 0;
let i = 0;
let compArray = [];
let userArray = [];
let userTurn = false;
let level = compArray.length;
// let displayArray

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
      console.log(compArray);
}
// on click of startbtn - game logic runs
function gameStart() {
//   startBtn.addEventListener('click', (e) => {
//       e.preventDefault();
//       if (compArray.length === 0) {randomize();}
      alert('Get Ready for Round 1! Repeat the process');
      setTimeout(() => {gameLoop()}, 1000);
}

function clearGame() {
        userArray = [];
        compArray = [];
        userScore = 0;
      //   showScore();
}

function pageLoad() {
      startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            gameStart();
            });
      clearBtn.addEventListener('click', (e) => {
            e.preventDefault();
            clearGame();
      });
      btn.addEventListener('click', (e) => {
            e.preventDefault();
            let color = e.target.id.slice(0,-9);
            console.log(color);
      });
}
pageLoad();
// GAME LOOP

// clearGame();
// gameStart();
// randomize();
// showCompArray();
// getUserInput();
// timedArrayCheck();
// update scoreboard();
// checkArrays();

function gameLoop() {
      randomize();
      displayTiles(compArray);
      // getUserInput();
      // timedArrayCheck();
}

// function compTurn() {
//       randomize();
//       showCompArray();
// }

// function userTurn() {
//       return !userTurn;
// }
// function to take User input and push to userArray
// when button click, pushes value (set as color) of button to userArray
function getUserInput() {
        form.addEventListener('click', (e) => {
        e.preventDefault();
        // checks for value(color) of e.target before pushing to userArray
        if (e.target.value === 'green'){
              greenSound.play();
              userArray.push('green');
              greenBtn.classList.toggle('glow');
        }
        if (e.target.value === 'blue'){
              blueSound.play();
              userArray.push('blue');
              blueBtn.classList.toggle('glow');
        }
        if (e.target.id === 'red'){
              redSound.play();
              userArray.push('red');
              redBtn.classList.toggle('glow');
        }
        if (e.target.value === 'yellow'){
              yellowSound.play();
              userArray.push('yellow');
              yellowBtn.classList.toggle('glow');
        }
      // debugger;
      // checkArrays(userArray, compArray);
  });
}


// game logic to check userArray & compArray then call randomize function to add additional color and increase userScore by 1
function timedArrayCheck(){
let arrayCheck = setTimeout(function(){
      checkArrays(userArray, compArray);
}, 5000);
}
// compares arrays for end of the round
// if arrays match, increase userScore,
function checkArrays(userArray, compArray) {
      if(userArray[i] === compArray[i] && userArray.length === compArray.length) {
            userScore += 1;
            alert('Correct! Get ready for the next round');
            clearInterval(showCompArray);
            showScore();
            gameLoop();
            i++;
            if(userArray.length === compArray.length && userScore >= 5){
               alert('Winner');
            };
      //else if (userArray !== compArray) {
        //    alert('You Lose. Womp Womp.');
     // }
//      compArray[i]
//      i+=1
  } else alert('You Lose. Womp Womp.');
}
// clear game function



// View

// function for displaying compArray
// loops over array - toggles display for each color
// code modified from https://medium.com/front-end-hacking/create-simon-game-in-javascript-d53b474a7416
function showCompArray () {
      return new Promise(resolve => {
      let showComp = setTimeout(() => {
        compMoves(compArray);
        resolve('resolved');
        if (i > compArray.length) {
              clearInterval(showComp);
        }
      }, 1000);
      });
}

async function asyncCall() {
      console.log('calling');
      let result = await showCompArray();
      console.log(result);
}

function compMoves(compArray) {
      compArray.forEach(color, i => {
            let delay = i * 1000;      
            setTimeout(function() {
                  if (color === 'green') { 
                        greenBtn.classList.toggle('glow'); 
                        greenSound.play();
                        console.log(delay);
                  } else if (color === 'red') {
                        redBtn.classList.toggle('glow');
                        redSound.play();
                        console.log(delay);
                  } else if (color === 'blue') {
                        blueBtn.classList.toggle('glow');
                        blueSound.play();
                        console.log(delay);
                  } else if (color === 'yellow') {
                        yellowBtn.classList.toggle('glow');
                        yellowSound.play();
                        console.log(delay);
                  }
            }, delay);
      });
}

function displayTiles(compArray) {
      compArray.forEach(function(item, index){
            let delay = index * 1500;
            setTimeout(function(){
                  showTile(item);
                  console.log(delay);
            }, delay);
      })
}

function showTile(color) {
      let tile = document.querySelector(`#${color}ParentDiv`);
      let sound = new Audio(`sounds/${color}-piano.wav`);
      sound.play();
      tile.classList.toggle('glow');
      setTimeout(() => tile.classList.toggle('glow'), 750);
      console.log(tile);
}


// function showCompArray () {
//       for(i = 0; i < compArray.length; i+=1){
//         if(compArray[i] === 'green'){
//           greenSound.play();
//           greenBtn.classList.add('glow');
//         } else if(compArray[i] === 'red'){
//           redSound.play();
//           redBtn.classList.add('glow');
//         } else if(compArray[i] === 'blue'){
//           blueSound.loop = false;
//           blueSound.play();
//           blueBtn.classList.add('glow');
//         } else if(compArray[i] === 'yellow'){
//           yellowSound.play();
//           yellowSound.loop = false;
//           yellowBtn.classList.add('glow');
//         }
//       }
// }
// let showComp = setInterval(showCompArray, 1000);
// function to display userScore
function showScore (){
      const scoreBoard = document.querySelector('.scoreboard > p');
      scoreBoard.innerHTML = userScore;
}

// win logic display function

// lose logic display function

// round logic
// clear round
// game consists of: start button
// randomize() and display compArray
// wait for userInput
// checkArray() with delay
// showScore() OR Lose
// randomize runs again