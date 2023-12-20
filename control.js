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

let startTime;
let timerInterval;

function startTimer() {
  startTime = new Date().getTime();
  timerInterval = setInterval(updateTimer, 10); // Updated interval to 10 milliseconds
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;

  //document.getElementById('timer').innerText = ` ${Math.floor(elapsedTime/(36000*24))} : ${Math.floor(elapsedTime/(36000))} : ${Math.floor(elapsedTime/(600))} : ${elapsedTime%100}`;
  document.getElementById('timer').innerText = Math.round(elapsedTime/10)

  if (270 < elapsedTime && elapsedTime < 290) {
      navigator.vibrate(200); // Vibrate for 200 milliseconds
  }
}

// Prevent right-click menu
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
