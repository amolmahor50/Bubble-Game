var timer = 60;
var score = 0;
var hitrn = 0;

// increase score
function increaseScore() {
    score = score + 10;
    document.getElementById("scoreval").textContent = score;
}

// makeking the little bubble
function makeBubble() {
    var clutter = "";
    for (var i = 0; i <= 139; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.getElementById("pbtm").innerHTML = clutter;
}


// every time get new hit
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.getElementById("hitval").innerHTML = hitrn;
}

// perform a action on playing game time
function runTimer() {
    var gameOverHeading = document.getElementById("game-over-heading");
    const gameScore = document.getElementById("game-score");
    const gameHitrn = document.getElementById("game-last-hitrn");
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--
            document.getElementById("timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.getElementById("pbtm").innerHTML = "";
            startGame.style.display = "block";
            if (score > 200 && score < 300) {
                gameOverHeading.innerHTML = `Expert&#129321`;
            }
            else if (score > 150 && score < 190) {
                gameOverHeading.innerHTML = `Beginner&#128525`;
            }
            else if (score > 80 && score < 140) {
                gameOverHeading.innerHTML = `Intermediate&#128522`;
            }
            else {
                gameOverHeading.innerHTML = `Bad Performance&#128530`;
            }
            gameScore.innerHTML = `Your Score: ${score}`;
            gameHitrn.innerHTML = `Your last Hit: ${hitrn}`;
        }
    }, 1000)
}

// get the clicked element value and compair with hit and score perform
var pbtm = document.getElementById("pbtm");
pbtm.addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

// Start again the game
var startGame = document.getElementById("start-new");
startGame.addEventListener("click", function () {
    location.reload();
})

runTimer();
getNewHit();
makeBubble();