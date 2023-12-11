const targetDate = new Date("2023-12-18T00:00:00").getTime();
let showWatchNowBox = false;

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Check if the timer has reached zero
  if (timeLeft <= 0 && !showWatchNowBox) {
    // Hide the countdown container
    document.getElementById("countdownContainer").style.display = "none";

    // Show the "Happy Anniversary" text
    document.getElementById("anniversaryText").style.display = "block";

    // Set a timeout to hide the "Happy Anniversary" text and show the "Watch Now" box after 10 seconds
    setTimeout(hideAnniversaryTextAndShowWatchNowBox, 10000);

    // Set the flag to prevent further execution of this block
    showWatchNowBox = true;
  }

  if (timeLeft <= 0) {
    // Stop further execution of the function
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
  // Hide the "Happy Anniversary" text
  document.getElementById("anniversaryText").style.display = "none";

  // Show the "Watch Now" box
  document.getElementById("watchNowBox").style.display = "block";
}

function redirectToVideo() {
  // Redirect the user to the YouTube video with autoplay and specific settings
  window.location.href = 'https://www.youtube.com/embed/Y_hdQXQfsNg?autoplay=1&controls=0&fullscreen=1';
}

// Initial call to set up the countdown
updateCountdown();

// Set up an interval to update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);