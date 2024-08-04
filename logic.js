const currentTime = document.getElementById('clock-container');

let secondsCount = 0;
let minutesCount = 0;
let hoursCount = 0;

function secondsCounter () {
    secondsCount++;
    currentTime.textContent = `${hoursCount}:${minutesCount}:${secondsCount}`;

    if (secondsCount >= 60) {
        secondsCount = 0;
        minutesCount++;
        currentTime.textContent = `${hoursCount}:${minutesCount}:${secondsCount}`;
    }
    if (minutesCount >= 60) {
        minutesCount = 0;
        hoursCount++;
        currentTime.textContent = `${hoursCount}:${minutesCount}:${secondsCount}`;
    }
}

 setInterval(secondsCounter, 1000);