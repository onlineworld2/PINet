const unlockBtn = document.getElementById("unlockBtn");
const backBtn = document.querySelector(".back-btn");

unlockBtn.addEventListener("click", () => {
  // new unlocked page open in same tab
  window.location.href = "unlocked.html";
});

backBtn.addEventListener("click", () => {
  if (history.length > 1) history.back();
});
