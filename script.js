// 1 hour = 3600 seconds
let time = 3600;

// store interval
let timerInterval = null;

// Function to update timer display
function updateTimer(){

    // Calculate minutes
    let minutes = Math.floor(time / 60);

    // Calculate seconds
    let seconds = time % 60;

    // Format time like 05:09
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    // Show time on screen
    document.getElementById("timer").innerText = minutes + ":" + seconds;
}


// Start Timer
function startTimer(){

    // Prevent multiple timers running
    if(timerInterval !== null){
        return;
    }

    timerInterval = setInterval(function(){

        // Prevent negative time
        if(time > 0){

            time--;
            updateTimer();

        }else{

            clearInterval(timerInterval);
            document.getElementById("message").innerText = "⏰ Time's Up!";
        }

    },1000);
}


// Pause Timer
function pauseTimer(){

    clearInterval(timerInterval);
    timerInterval = null;

}


// Reset Timer
function resetTimer(){

    clearInterval(timerInterval);

    time = 3600; // back to 1 hour

    timerInterval = null;

    updateTimer();

    document.getElementById("message").innerText = "";
}


// Show initial time
updateTimer();