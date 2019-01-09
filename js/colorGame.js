let colors = [];
let pickedColor;
let numSquares = 6;
const colorDisplay = document.getElementById("colorDisplay");
const squares = document.querySelectorAll(".square");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");


init();

resetButton.addEventListener('click', reset);


function init () {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener('click', () => {
      // compare color to pickedColor
      if(squares[i].style.backgroundColor == pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play again?";
      } else {
        squares[i].style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "new colors";
  messageDisplay.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  let arr = [];
  // add num random colors to array
  for (let i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
};

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
