const mainText = document.querySelector("div#reactionText h1");
const subText = document.querySelector("div#reactionText h2");
const body = document.body;
var isGreen = false;
var isRed = true;
var startTime, endTime, reactionTime;
var clicked = false;
var stopGame = false;

function generateRandomTimer() {
    return Math.floor((Math.random() * 5000) + 1000);
}

function greenScreen() {
    body.style.background = "limegreen";
    isRed = false;
    isGreen = true;
    startTimer();    
}

function startTimer() {
    var now = new Date();
    startTime = now.getTime();
}

function greenPlay() {
    endTime = new Date().getTime();
    reactionTime = (+endTime) - (+startTime);
    mainText.textContent = `${reactionTime}ms`;
    subText.textContent = "click to play again"
}

function restartGame() {
    body.style.backgroundColor = null;
    isRed = true;
    isGreen = false;
    clicked = false;
    stopGame = false;
    mainText.textContent = "Click to start";
    subText.textContent = "";
}

window.addEventListener("click", () => {
    if (isRed && !clicked) {
        const time = generateRandomTimer();
        setTimeout(greenScreen, time);
        mainText.textContent = "Wait for the green"
        console.log(time);
        clicked = true;
    }
    else if (isGreen && clicked && stopGame === false) {
        greenPlay();
        console.log(startTime)
        stopGame = true;
    }
    else if (isGreen && clicked && stopGame) {
        restartGame();
    }
})