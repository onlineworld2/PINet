const unlockBtn = document.getElementById("unlockBtn");
const backBtn = document.querySelector(".back-btn");

if (unlockBtn) {
  unlockBtn.addEventListener("click", () => {
    window.location.href = "unlocked.html";
  });
}

if (backBtn) {
  backBtn.addEventListener("click", () => {
    if (history.length > 1) history.back();
  });
}
