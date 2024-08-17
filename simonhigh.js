let gameSeq = [];
let userSeq = [];
let arr = [];
let btns = ["red", "yellow", "blue", "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

let max = -1;


function checkAns(Idx) {
  if (userSeq[Idx] === gameSeq[Idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    arr.push(level);

    for (i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }

    h3.innerText = `High Score = ${max}`;
    h2.innerHTML = `Game Over.<br><b style="color: green;"> Your Score:${level}</b> <br> Press any Key to Start the game`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
     highscore= level
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  useColor = btn.getAttribute("id");
  userSeq.push(useColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

