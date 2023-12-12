const targetDate = new Date("2023-12-18T00:00:00").getTime();
let showWatchNowBox = false;
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;
  if (timeLeft <= 0 && !showWatchNowBox) {
    document.getElementById("countdownContainer").style.display = "none";
    document.getElementById("anniversaryText").style.display = "block";
    setTimeout(hideAnniversaryTextAndShowWatchNowBox, 10000);
    showWatchNowBox = true;
  }
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
  }
}
function hideAnniversaryTextAndShowWatchNowBox() {
  document.getElementById("anniversaryText").style.display = "none";
  document.getElementById("watchNowBox").style.display = "block";
}
function redirectToVideo() {
  window.location.href = 'https://www.youtube.com/embed/Y_hdQXQfsNg?autoplay=1&controls=0&fullscreen=1';
}
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
