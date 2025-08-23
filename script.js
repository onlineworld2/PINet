(function () {
  const unlockBtn = document.getElementById('unlockBtn');
  const panel = document.getElementById('unlocked');
  const countdownEl = document.getElementById('countdown');
  const backBtn = document.querySelector('.back-btn');

  const DURATION = 24 * 60 * 60; // 24 hours
  let countdownTimer = null;
  let endTime = null;

  unlockBtn.addEventListener('click', () => {
    panel.hidden = false;
    if (!endTime) {
      endTime = new Date(Date.now() + DURATION * 1000);
    }
    startTicker();
    unlockBtn.disabled = true;
    unlockBtn.textContent = 'Unlocked';
  });

  backBtn.addEventListener('click', () => {
    if (history.length > 1) history.back();
  });

  function startTicker() {
    if (countdownTimer) return;
    tick();
    countdownTimer = setInterval(tick, 1000);
  }

  function tick() {
    if (!endTime) return;
    const now = new Date();
    let diff = Math.max(0, Math.floor((endTime - now) / 1000));

    const hrs = String(Math.floor(diff / 3600)).padStart(2, '0');
    diff %= 3600;
    const mins = String(Math.floor(diff / 60)).padStart(2, '0');
    const secs = String(diff % 60).padStart(2, '0');

    countdownEl.textContent = `${hrs}:${mins}:${secs}`;

    if (hrs === '00' && mins === '00' && secs === '00') {
      clearInterval(countdownTimer);
      countdownTimer = null;
      endTime = null;
    }
  }
})();
