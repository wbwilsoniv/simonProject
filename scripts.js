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
const redSound = new Audio('sounds/red-piano-a.wav');
const blueSound = new Audio('sounds/blue-piano-f.wav');
const yellowSound = new Audio('sounds/yellow-piano-c.wav');
const greenSound = new Audio('sounds/green-piano-e.wav');
const btnArray = ['green',`red`,'yellow', 'blue'];
let userScore = 0;
let i = 0;
let compArray = [];
let userArray = [];
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
      return randomNum
}
// on click of startbtn - game logic runs
function gameStart() {
  startBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (compArray.length === 0) {randomize();}
      alert('Get Ready for Round 1! Repeat the process');
      gameLoop();
  })
}
gameStart();
function clearGame() {
      clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        userArray.length = 0;
        compArray.length = 0;
        userScore = 0;
        showScore();
      })
}
// GAME LOOP

// clearGame();
// gameStart();
// randomize();
// showCompArray();
// getUserInput();
// timedArrayCheck();
// update scoreboard();
// checkArrays();
clearGame();
gameStart();
function gameLoop() {
      randomize();
      showCompArray();
      getUserInput();
      timedArrayCheck();
}
gameLoop();
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
        if (e.target.value === 'red'){
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
      let showComp = setInterval(function(){
        compMoves(compArray);
        if (i > compArray.length) {
              clearInterval(showComp);
        }
      }, 1000)
}

function compMoves(compArray) {
      let level = compArray.length;
      while(level > 0){
        if(compArray[i] === 'green') {
          greenBtn.classList.toggle('glow');
          //set timeout
          setTimeout(function(){
            greenBtn.classList.toggle('glow');
          }, 500);
          level-=1;
      } else if(compArray[i] === 'red') {
          redBtn.classList.toggle('glow');
          setTimeout(function(){
            redBtn.classList.toggle('glow');
          }, 500);
          level-=1;
      } else if(compArray[i] === 'blue') {
          blueBtn.classList.toggle('glow');
          setTimeout(function(){
            blueBtn.classList.toggle('glow');
          }, 500);
          level-=1;
      } else if(compArray[i] === 'yellow') {
            yellowBtn.classList.toggle('glow');
            setTimeout(function(){
                  yellowBtn.classList.toggle('glow');
                }, 500);
                level-=1;
      }
}

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