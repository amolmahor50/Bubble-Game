var timer = 60;
var score = 0;
var hitrn = 0;
var startGame = document.getElementById("start-new");

function increaseScore() {
    score = score + 10;
    document.getElementById("scoreval").textContent = score;
}

function makeBubble(){
    var clutter = "";
        for(var i=0; i<=101; i++ ){
            var rn = Math.floor(Math.random()*10);
            clutter += `<div class="bubble">${rn}</div>`;
}
document.getElementById("pbtm").innerHTML = clutter;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.getElementById("hitval").innerHTML = hitrn;
}

function runTimer(){
   var timerint =  setInterval(function(){
        if(timer>0){
            timer--
            document.getElementById("timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.getElementById("pbtm").innerHTML = `<h1>Game Over...</h1>`;

        }
    },1000)
}

var pbtm = document.getElementById("pbtm");

pbtm.addEventListener("click", function(dets){
  var clickednum = Number(dets.target.textContent);
  if(clickednum === hitrn){
    increaseScore();
    getNewHit();
    makeBubble();
  }
})
startGame.addEventListener("click", function(){
    getNewHit();
    makeBubble();
    document.getElementById("scoreval").textContent = 0;
    
})

runTimer();
getNewHit();
makeBubble();