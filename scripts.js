// Global Variables
const gameBoard = document.querySelector(`.gameBoard`);
const redBtn = document.querySelector(`#redParentDiv`);
const blueBtn = document.querySelector(`#blueParentDiv`);
const greenBtn = document.querySelector(`#greenParentDiv`);
const yellowBtn = document.querySelector(`#yellowParentDiv`);
const form = document.querySelector(".gameBoard");
const btn = form.querySelectorAll(".parentDiv");
const clearBtn = document.querySelector(".clear");
const startBtn = document.querySelector(".start");
const turn = document.getElementById("#turnIndicator");
// const redSound = new Audio('sounds/red-piano-a.wav');
// const blueSound = new Audio('sounds/blue-piano-f.wav');
// const yellowSound = new Audio('sounds/yellow-piano-c.wav');
// const greenSound = new Audio('sounds/green-piano-e.wav');
const btnArray = ["green", `red`, "yellow", "blue"];
let userScore = 0;
let hiScore = 0;
let i = 0;
let compArray = [];
let userArray = [];
let isUserTurn = true;
// let displayArray

// Game Logic Functions

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
  alert(`Get Ready for Round ${userScore + 1}! Repeat the process`);
  userArray = [];
  endOfTurn();
  showPlayerTurn();
  setTimeout(() => gameLoop(), 1000);
}

function clearGame() {
  userArray = [];
  compArray = [];
  userScore = 0;
  //   showScore();
}

function pageLoad() {
  startBtn.addEventListener("click", e => {
    e.preventDefault();
    gameStart();
  });
  clearBtn.addEventListener("click", e => {
    e.preventDefault();
    clearGame();
  });
  form.addEventListener("click", e => {
    e.preventDefault();
    let color = e.target.id.slice(0, -9);
    //     isUserTurn ? showTile(color) : null;
    // isUserTurn ? userArray.push(`${color}`) : null;
    isUserTurn ? checkClick(compArray, color) : null;
  });
}
pageLoad();
// GAME LOOP

function endOfTurn() {
  isUserTurn = !isUserTurn;
  console.log(isUserTurn);
}

function gameLoop() {
  randomize();
  showCompTurn();
  // displayTiles(compArray);
  // getUserInput();
  // timedArrayCheck();
}

function checkClick(compArray, color) {
  //   let lvlDelay = compArray.length * 1500;
  let clickCount = userArray.length;
  if (color === compArray[clickCount]) {
    showTile(color);
    userArray.push(`${color}`);
    clickCount++;
    console.log(clickCount, "Right!");
  } else {
    console.log("WRONG!");
    //     let naw = new Audio(`sounds/steve-hell-naw.wav`);
    //     naw.play();
    wrongTile(color);
    setTimeout(() => {
      clearGame();
      alert("Game Over!");
      showScore();
    }, 1750);
  }
  const arrCheck = (userArray, compArray) => {
    if (userArray === compArray) {
      userScore++;
      let win = new Audio("sounds/win-sound.wav");
      win.play();
      setTimeout(() => {
        showScore();
        updateScore();
        gameStart();
      }, 1000);
    } else {
      console.log("not matching");
    }
  };
  userArray.length === compArray.length
    ? setTimeout(() => arrCheck(), 1000)
    : null;
}

function compareArr(compArray, userArray) {
  if (compArray === userArray) {
    userScore++;
    showScore();
    console.log(`Great Success! ${compArray}`);
  } else {
    console.log("Game Over");
  }
}

function showPlayerTurn() {
  let turn = document.querySelector(".toggle-display");
  isUserTurn
    ? turn.classList.add("is-visible")
    : turn.classList.remove("is-visible");
}
// function for displaying compArray
// code modified from https://medium.com/front-end-hacking/create-simon-game-in-javascript-d53b474a7416

function displayTiles(compArray) {
  return new Promise(resolve => {
    let compArr = compArray.forEach(function(item, index) {
      let delay = index * 1300;
      setTimeout(() => showTile(item), delay);
    });
    let promDelay = compArray.length * 1400;
    setTimeout(() => resolve(console.log(compArr)), promDelay);
  });
}

function showTile(color) {
  let tile = document.querySelector(`#${color}ParentDiv`);
  let sound = new Audio(`sounds/${color}-piano.wav`);
  sound.play();
  tile.classList.toggle("glow");
  setTimeout(() => tile.classList.toggle("glow"), 550);
}

function wrongTile(color) {
  let tile = document.querySelector(`#${color}ParentDiv`);
  let buzzer = new Audio(`sounds/buzzer1.wav`);
  buzzer.play();
  tile.classList.toggle("glow");
  setTimeout(() => tile.classList.toggle("glow"), 550);
}

async function showCompTurn() {
  console.log("calling");
  const turnDone = await displayTiles(compArray);
  endOfTurn();
  showPlayerTurn();
  return turnDone;
  console.log(turnDone);
}
// function to display userScore
function showScore() {
  const scoreBoard = document.querySelector(".scoreboard > p");
  scoreBoard.innerHTML = userScore;
}

function updateScore() {
  const hiScoreBoard = document.querySelector(".hiScore > p");
  userScore >= hiScore ? (hiScore = userScore) : null;
  hiScoreBoard.innerHTML = hiScore;
}
