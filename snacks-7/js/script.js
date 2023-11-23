/*Cliccando su un pulsante,
 viene avviato un cronometro. 
 Per fermare il cronometro, bisogna cliccare su un secondo pulsante*/


let timerInterval;

let seconds = 0;


function startTimer() {
    timerInterval = setInterval(function() {
        seconds++;

        const timerCount = document.getElementById('timer');
        timerCount.textContent = seconds;
        
    
    }, 1000);
}





function stopTimer() {
    clearInterval(timerInterval);
}



const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
