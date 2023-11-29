// document.onmousedown = function(){
//     curr = 946665000000
//     b = 0
//     a = setInterval(() => {
//         curr ++
//         v = new Date(curr)
//         document.querySelector("#main > div").innerText = v.getHours() + ":" + v.getMinutes() + ":" + v.getSeconds() + ":" + v.getMilliseconds()
//         if (curr - 946665000000 == 50){
//             navigator.vibrate(100)
//         }
//     }, 1)
// }

// document.onmouseup = function(){
//     clearInterval(a)
//     //alert(b)
// }



let intervalId;

document.body.style.userSelect = "none"; // Prevent text selection

document.addEventListener("touchstart", function(e) {
    e.preventDefault(); // Prevent right-click menu on touch devices
    startTimer();
});

document.onmousedown = function() {
    startTimer();
};

document.addEventListener("touchend", function() {
    stopTimer();
});

document.onmouseup = function() {
    stopTimer();
};

function startTimer() {
    let curr = 946665000000;
    intervalId = setInterval(() => {
        curr++;
        const v = new Date(curr);
        document.querySelector("#main > div").innerText = v.getHours() + ":" + v.getMinutes() + ":" + v.getSeconds() + ":" + v.getMilliseconds();
        if (curr - 946665000000 === 50) {
            navigator.vibrate(500)
        }
    }, 10);
}

function stopTimer() {
    clearInterval(intervalId);
    //alert("Timer stopped");
}

// Prevent right-click menu
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
