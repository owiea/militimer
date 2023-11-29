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
            ontr()
        }
    }, 1);
}

function stopTimer() {
    clearInterval(intervalId);
}

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});



function ontr(){
    if (curr - 946665000000 === 50) {
        // Check if the browser supports the Notifications API
        if ("Notification" in window) {
            // Check if the user has granted permission for notifications
            if (Notification.permission === "granted") {
                // Create a notification
                const notification = new Notification("Notification Title", {
                    body: "Notification Body",
                    icon: "path/to/icon.png" // Optional: You can provide a path to an image for the notification
                });
    
                // Optional: Add an event listener for when the user clicks on the notification
                notification.addEventListener("click", () => {
                    console.log("Notification clicked");
                });
            } else if (Notification.permission !== "denied") {
                // Request permission from the user
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        // Now you can create the notification
                        // (You might want to do this in response to a user action to avoid being considered spammy)
                    }
                });
            }
        } else {
            console.log("Notifications not supported in this browser");
        }
    }
}