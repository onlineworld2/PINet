(function () {
  const unlockBtn = document.getElementById("unlockBtn");
  const panel = document.getElementById("unlocked");
  const countdownEl = document.getElementById("countdown");
  const backBtn = document.querySelector(".back-btn");

  const DURATION = 24 * 60 * 60; // 24h in seconds
  let endTime = null;
  let timer = null;

  unlockBtn.addEventListener("click", () => {
    panel.hidden = false;
    unlockBtn.disabled = true;
    unlockBtn.textContent = "Unlocked";

    if (!endTime) {
      endTime = Date.now() + DURATION * 1000;
      timer = setInterval(tick, 1000);
      tick();
    }
  });

  backBtn.addEventListener("click", () => {
    if (history.length > 1) history.back();
  });

  function tick() {
    let diff = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    let h = String(Math.floor(diff / 3600)).padStart(2, "0");
    diff %= 3600;
    let m = String(Math.floor(diff / 60)).padStart(2, "0");
    let s = String(diff % 60).padStart(2, "0");

    countdownEl.textContent = `${h}:${m}:${s}`;

    if (h === "00" && m === "00" && s === "00") {
      clearInterval(timer);
    }
  }
})();
