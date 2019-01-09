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
// const redSound = new Audio('sounds/red-piano-a.wav');
// const blueSound = new Audio('sounds/blue-piano-f.wav');
// const yellowSound = new Audio('sounds/yellow-piano-c.wav');
// const greenSound = new Audio('sounds/green-piano-e.wav');
const btnArray = ["green", `red`, "yellow", "blue"];
let userScore = 0;
let i = 0;
let compArray = [];
let userArray = [];
let isUserTurn = true;
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
  alert(`Get Ready for Round ${userScore + 1}! Repeat the process`);
  userArray = [];
  endOfTurn();
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
    isUserTurn ? showTile(color) : null;
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

async function showCompTurn() {
  console.log("calling");
  const turnDone = await displayTiles(compArray);
  endOfTurn();
  console.log(turnDone);
}

function checkClick(compArray, color) {
  //   let lvlDelay = compArray.length * 1500;
  let clickCount = userArray.length;
  if (color === compArray[clickCount]) {
    userArray.push(`${color}`);
    clickCount++;
    console.log(clickCount, "Right!");
  } else {
    console.log("WRONG!");
  }
  const arrCheck = (userArray, compArray) => {
    if (userArray === compArray) {
      userScore++;
      showScore();
      gameStart();
    } else {
      console.log("not matching");
    }
  };
  userArray.length === compArray.length
    ? setTimeout(() => arrCheck(), 1000)
    : null;

  //   userArray === compArray ? console.log("NEXT LVL") : null;

  //   for (let clickCount = 0; clickCount < compArray.length; clickCount++) {
  //     if (color === compArray[clickCount]) {
  //       userArray.push(`${color}`);
  //       // clickCount++;
  //       console.log(clickCount, "right");
  //       // if (color === compArray[clickCount]) {
  //       //   userArray.push(`${color}`);
  //       //   console.log("right");
  //       // }
  //       //     } else if (userArray.length === compArray.length) {
  //       //       console.log("Next Level");
  //       //     } else {
  //       //       console.log("Game Over");
  //     } else {
  //       console.log("wrong");
  //     }
  //   }
  //   setTimeout(() => compareArr(compArray, userArray), lvlDelay);
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

// function lvlTimer(compArray, userArray) {
//   let lvlDelay = userArray.length * 3000;
//   setTimeout(() => compareArr(compArray, userArray), lvlDelay);
// }

// function compTurn() {
//       randomize();
//       showCompArray();
// }

// View

// function for displaying compArray
// code modified from https://medium.com/front-end-hacking/create-simon-game-in-javascript-d53b474a7416

function displayTiles(compArray) {
  return new Promise(resolve => {
    let compArr = compArray.forEach(function(item, index) {
      let delay = index * 1500;
      setTimeout(() => showTile(item), delay);
    });
    let promDelay = compArray.length * 1600;
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

// function to display userScore
function showScore() {
  const scoreBoard = document.querySelector(".scoreboard > p");
  scoreBoard.innerHTML = userScore;
}
