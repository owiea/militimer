document.addEventListener("DOMContentLoaded", function() {
    let intervalId;
    let tti = 50;
    document.body.style.userSelect = "none"; // Prevent text selection

    document.addEventListener("touchstart", function(e) {
        e.preventDefault(); // Prevent right-click menu on touch devices
        if (!isExcludedElement(e.target)) {
            startTimer();
        }
    });

    document.onmousedown = function(e) {
        if (!isExcludedElement(e.target)) {
            startTimer();
        }
    };

    document.addEventListener("touchend", function() {
        stopTimer();
    });

    document.onmouseup = function() {
        stopTimer();
    };

    document.getElementById("onc").addEventListener("click", () => {
        tti = parseFloat(document.getElementById("tti").value);
    });

    function isExcludedElement(target) {
        return (
            target.id === "tti" ||
            target.id === "onc" ||
            target.parentElement.id === "inputf"
        );
    }

    let startTime;
    let timerInterval;

    function startTimer() {
        startTime = new Date().getTime();
        timerInterval = setInterval(() => {updateTimer(tti)}, 10);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function updateTimer(t = 0) {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        document.getElementById('timer').innerText = Math.round(elapsedTime/10)

        if (( t*10 - 230) < elapsedTime && elapsedTime < ( t*10-210)) {
            //alert(tti);
            navigator.vibrate(200);
        }
    }

    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
});
