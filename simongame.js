let gameSeq=[];
let userSeq=[];

let btns=['red','green','purple','yellow'];

let started=false;
let level=0;
let h3=document.querySelector('h3');
document.addEventListener("keypress",function () {
    if(started == false){
        console.log('Game Started');
        started = true;

        levelUp();
    }

});

function btnFlash (btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}
function userFlash (btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
  h3.innerText= `Level ${level}`;

  let randIdx=Math.floor(Math.random() * 3);
  let randCol= btns[randIdx];
  let randBtn=document.querySelector(`.${randCol}`);
//   console.log(randIdx);
//   console.log(randCol);
//   console.log(randBtn);
gameSeq.push(randCol);
console.log(gameSeq);
  btnFlash(randBtn);
}
function checkAns(indx){
    // console.log("level:",level);
    if( userSeq[indx]===gameSeq[indx]){
        // console.log('right Color');
        if(userSeq.length==gameSeq.length){
          setTimeout(levelUp,1000);
        }
    }
    else{
        
        h3.innerHTML=`Game over!! <b style="color:blue ;">Your Score:${level} </b> 
        </br>Press any key to start ` ;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor='darkseagreen';  
        },200);
        reset();
    }
    }
function btnPress() {
    let btn=this;
    userFlash(btn);
    userColor= btn.getAttribute('id');
   userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}
