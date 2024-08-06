const currentTime = document.getElementById('clock-container');

let secondsCount = 0;
let minutesCount = 0;
let hoursCount = 0;
let intervalCounter = null;

function secondsCounter () {
    secondsCount++;
    currentTime.textContent = `Hours: ${hoursCount} Minutes: ${minutesCount} Seconds: ${secondsCount}`;

    if (secondsCount >= 60) {
        secondsCount = 0;
        minutesCount++;
        currentTime.textContent = `Hours: ${hoursCount} Minutes:  ${minutesCount} Seconds: ${secondsCount}seconds`;
    }
    if (minutesCount >= 60) {
        minutesCount = 0;
        hoursCount++;
        currentTime.textContent = `Hours : ${hoursCount} Minutes: ${minutesCount} Seconds: ${secondsCount}`;
    }
}

startBtn = document.getElementById(`code-time-button`);
pauseBtn = document.getElementById(`pause-button`);
resetBtn = document.getElementById(`reset-button`);
timerBtn = document.getElementById(`timer-button`);

startBtn.addEventListener('click', () =>  {
    if (!intervalCounter) {
        intervalCounter = setInterval(secondsCounter, 1000);
    }
});

pauseBtn.addEventListener('click', () => {
    clearInterval(intervalCounter);
    intervalCounter = null;
});

resetBtn.addEventListener('click', () => {
    secondsCount = 0;
    minutesCount = 0;
    hoursCount = 0;

    currentTime.textContent = `${hoursCount}hours:${minutesCount}minutes:${secondsCount}seconds`;
    clearInterval(intervalCounter);
    
});
timerBtn.addEventListener('click', () => {
   let userTimer = prompt("How many minutes would you like to set a timer for?");
    parseInt(userTimer);
    minutesCount = userTimer;
    currentTime.textContent = `${hoursCount}hours:${minutesCount}minutes:${secondsCount}seconds`;

    if ( userTimer >= 1 ) {
        userTimer = secondsCount * 60;
        secondsCount--;
        currentTime.textContent = `${hoursCount}hours:${minutesCount}minutes:${secondsCount}seconds`;
    }
    
    if ( secondsCount <= 0 ) {
        
        
        secondsCount = 59;
        minutesCount - 1;

        secondsCount--;
        if (secondsCount <= -1) {
            minutesCount--;
        }
        currentTime.textContent = `${hoursCount}hours:${minutesCount}minutes:${secondsCount}seconds`;
    }
});

function countDown () {
    intervalCounter = setInterval(countdown, 1000);
    secondsCount--;

    if (secondsCount <= 0) {
        secondsCount = 59;
        minutesCount--;
        currentTime.textContent = `Hours: ${hoursCount} Minutes: ${minutesCount} Seconds: ${secondsCount}`;
    }
}