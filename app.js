const FRIEND_NAME = "Happy Birthday Gourvi";
const SECRET_CODE = "GOBI";

document.getElementById("nameDisplay").innerText = FRIEND_NAME;

window.onload = function () {
  setTimeout(() => {
    const intro = document.getElementById("intro-screen");
    const app = document.getElementById("app-container");

    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      app.style.opacity = "1";
    }, 1000);
  }, 3000);
};

function checkCode() {
  const input = document.getElementById("passcode");
  const enteredCode = input.value.toUpperCase().trim();
  const lockScreen = document.getElementById("lockScreen");
  const surprise = document.getElementById("surprise");
  const errorMsg = document.getElementById("errorMsg");
  const card = document.getElementById("mainCard");

  if (enteredCode === SECRET_CODE) {
    lockScreen.style.display = "none";
    surprise.style.display = "block";

    fireConfetti();

    setInterval(fireConfetti, 2000);
  } else {
    errorMsg.style.opacity = "1";
    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 300);
  }
}

function fireConfetti() {
  const colors = ["#007bff", "#f1c40f", "#ffffff"];

  confetti({
    particleCount: 60,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
    zIndex: 999,
  });

  confetti({
    particleCount: 60,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
    zIndex: 999,
  });
}

document
  .getElementById("passcode")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") checkCode();
  });
