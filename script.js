// Countdown starting from 18:47:12 (in minutes + seconds)
let totalSeconds = (18 * 60 + 47) * 60 + 12;

function updateTimer() {
  const timerElement = document.getElementById("timer");

  const interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval);
      timerElement.innerText = "00:00:00";
      return;
    }

    totalSeconds--;

    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;

    timerElement.innerText =
      `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }, 1000);
}

updateTimer();
