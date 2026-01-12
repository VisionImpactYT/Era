let setDate = document.getElementById('date-choice');
let setTime = document.getElementById('time-choice');

let timerBtn = document.getElementById('set-timer');
let resetBtn = document.getElementById('reset-timer');

let timer = document.getElementById('timer');

const countDown = new Date(`${setDate.value}, ${setTime.value}`);

let x = setInterval(function() {
    let now = new Date().getTime();

    // Distance between times
    var distance = countDown - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d: ${hours}h: ${minutes}m: ${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        timer.innerHTML = "EXPIRED";
    }

}, 1000);


timerBtn.addEventListener("click", x);
