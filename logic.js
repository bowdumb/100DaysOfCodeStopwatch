// Accesses the #click-container element in the DOM and assigns it's value to the currentTime variable.
const currentTime = document.getElementById('clock-container');

// These globally declared variables are used to hold the values for seconds, minutes, and hours to be referenced within the functions to follow.
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
    };
}

startBtn = document.getElementById(`code-time-button`);
pauseBtn = document.getElementById(`pause-button`);
resetBtn = document.getElementById(`reset-button`);
timerBtn = document.getElementById(`timer-button`);

// Event Listener responds to the user clicking the startBtn button and runs an anonymous callback function that initiates the intervalCounter
// which begins to set the secondsCounter in motion at a rate of 1 second intervals. The event listener only runs if the clock is not already running.
startBtn.addEventListener('click', () =>  {
    if (!intervalCounter) {
        intervalCounter = setInterval(secondsCounter, 1000);
    }
});

// Again, an event listener attached to the pauseBtn that when clicked clears the intervalCounter and stops the passage of time. The 
// clearInterval function is a native function that exists within the JavaScript engine and is used to stop a recurring action caused by
// the setInterval function, which is also a native part of the JavaScript engine. When the interval is cleared the intervalCounter variable
// is set to "null" to ensure that no interval is active.
pauseBtn.addEventListener('click', () => {
    clearInterval(intervalCounter);
    intervalCounter = null;
});

// Another event listener. This time it's attached to the resetBtn button. Which clicked it resets the clock variables to 0 both internally as well
// as how they are displayed on the page.
resetBtn.addEventListener('click', () => {
    secondsCount = 0;
    minutesCount = 0;
    hoursCount = 0;

    currentTime.textContent = `Hours : ${hoursCount} Minutes: ${minutesCount} Seconds: ${secondsCount}`;
    clearInterval(intervalCounter);
    intervalCounter = null;
});

// The last event listener attached to the timer button. When clicked the user is prompted to input a numerical value in minutes for how long they
// would like the timer to last. When the user submits their input to the prompt the clock is set to their specified input and the time begins to decrement as
// the countDown function is called within the setInterval function.
timerBtn.addEventListener('click', () => {
   let userTimer = prompt("How many minutes would you like to set a timer for?");
    parseInt(userTimer);
    minutesCount = userTimer;
    currentTime.textContent = `${hoursCount}hours:${minutesCount}minutes:${secondsCount}seconds`;
    intervalCounter = setInterval(countDown, 1000);
});

// The countDown function is called above within the timerBtn event listener and is used to decrement time from the clock, one second at a time.
function countDown () {
    secondsCount--;

    if (secondsCount < 0) {
        secondsCount = 59;
        minutesCount--;
        

        if (minutesCount < 0) {
            minutesCount = 59;
            hoursCount--;
        }
    }
    currentTime.textContent = `Hours: ${hoursCount} Minutes: ${minutesCount} Seconds: ${secondsCount}`;

}