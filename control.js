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

  document.getElementById('timer').innerText = ` ${Math.floor(elapsedTime/(36000*24))} : ${Math.floor(elapsedTime/(36000))} : ${Math.floor(elapsedTime/(600))} : ${elapsedTime%100}`;

  if (elapsedTime === 300) {
    // Vibrate the device when the timer reaches 300 ms
    if (navigator.vibrate) {
      navigator.vibrate(200); // Vibrate for 200 milliseconds
    }
  }
}

document.addEventListener('mousedown', startTimer);
document.addEventListener('mouseup', stopTimer);

document.addEventListener('touchstart', startTimer);
document.addEventListener('touchend', stopTimer);