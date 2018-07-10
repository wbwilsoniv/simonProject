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
const redSound = new Audio('sounds/red-piano-a.wav');
const blueSound = new Audio('sounds/blue-piano-f.wav');
const yellowSound = new Audio('sounds/yellow-piano-c.wav');
const greenSound = new Audio('sounds/green-piano-e.wav');
let userScore = 0;
let compArray = [];
let userArray = [];
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
      showCompArray();
      //playGame(compArray);
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
              greenSound.play();
              userArray.push('green');
              greenBtn.classList.add('glow');
        }
        if (e.target.value === 'blue'){
              blueSound.play();
              userArray.push('blue');
              blueBtn.classList.add('glow');
        }
        if (e.target.value === 'red'){
              redSound.play();
              userArray.push('red');
              redBtn.classList.add('glow');
        }
        if (e.target.value === 'yellow'){
              yellowSound.play();
              userArray.push('yellow');
              yellowBtn.classList.add('glow');
        }
      // debugger;
      checkArrays(userArray, compArray);
  });
}


// game logic to check userArray & compArray then call randomize function to add additional color and increase userScore by 1
function checkArrays(userArray, compArray) {
      let i = 0;
      console.log(userArray);
      console.log(compArray)
      if(userArray[i] === compArray[i]) {
            userScore += 1;
            alert('Correct! Get ready for the next round');
            if(userArray.length === compArray.length && userScore >= 5){
               alert('Winner');
            };
      //else if (userArray !== compArray) {
        //    alert('You Lose. Womp Womp.');
     // }
     compArray[i]
     i+=1
  } else alert('You Lose. Womp Womp.');
}
// clear game function
function clearGame() {
      clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        userArray.length = 0;
        compArray.length = 0;
        userScore = 0;
      })
}


// View

// function for displaying compArray
// loops over array - toggles display for each color
// code modified from https://medium.com/front-end-hacking/create-simon-game-in-javascript-d53b474a7416
function showCompArray () {
      let i = 0;
      let showComp = setInterval(function(){
        playGame(compArray);
        if (i >= compArray.length) {
              clearInterval(showComp);
        }
      }, 4000)
}

function playGame(compArray) {
      let i = 0;
      let randomIndex = randomize();
      console.log(compArray[randomIndex])
      if(compArray[randomIndex ] == 'green') {
          greenBtn.classList.add('glow');
          //set timeout
          setTimeout(function(){
            greenBtn.classList.remove('glow');  getUserInput();
            //   
          }, 2000);
          // if statement to end loop within getUserInput - stops loop - maybe in getUserInput
      } else if(compArray[randomIndex ] === 'red') {
          redBtn.classList.add('glow');
          setTimeout(function(){
            redBtn.classList.remove('glow');  getUserInput();  
          }, 2000);
      } else if(compArray[randomIndex ] === 'blue') {
          blueBtn.classList.add('glow');
          setTimeout(function(){
            blueBtn.classList.remove('glow');  getUserInput();  
          }, 2000);
      } else if(compArray[randomIndex ] === 'yellow') {
            yellowBtn.classList.add('glow');
            setTimeout(function(){
                  yellowBtn.classList.remove('glow');  getUserInput();  
                }, 2000);
      }
     // debugger;

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
// function for displaying userArray
function showUserArray(){
      redBtn.add
}
// function to display userScore
function showScore (){
      const scoreBoard = document.querySelector('.scoreboard > p');
      scoreBoard.innerHTML = userScore;
}
showScore();
clearGame();
// sound function

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