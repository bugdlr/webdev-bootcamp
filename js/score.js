const p1Button = document.getElementById("p1");
const p2Button = document.getElementById("p2");
const resetButton = document.getElementById("reset");
const p1Display = document.getElementById("score1");
const p2Display = document.getElementById("score2");
const maxDisplay = document.getElementById("maxDisplay");
const max = document.querySelector("input");
const buttons = document.getElementsByClassName("playerButton");
let p1Score = 0;
let p2Score = 0;


p1Button.addEventListener("click", function(){
  p1Score++;
  p1Display.textContent = p1Score;
  if (max.value == "" && p1Score == 5) {
    p1Display.style.colo3r = "green";
    disable();
  } else if (p1Score == max.value) {
    p1Display.style.color = "green";
    disable();
  }
})


p2Button.addEventListener("click", function(){
  p2Score++;
  p2Display.textContent = p2Score;
  if (max.value == "" && p2Score == 5) {
    p2Display.style.color = "green";
    disable();
  } else if (p2Score == max.value) {
    p2Display.style.color = "green";
    disable();
  }
})

resetButton.addEventListener('click', () => {
  reset();
  max.value = "";
  maxDisplay.textContent = 5;
});

max.addEventListener('input', () => {
  if (max.value !== "") {
    maxDisplay.textContent = max.value;
  } else {
    maxDisplay.textContent = 5;
  }
  reset();
})

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  enable();
  p1Display.style.color = "black";
  p2Display.style.color = "black";
}

function disable() {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("disabled", true);
  }
}

function enable() {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].removeAttribute("disabled");
  }
}
