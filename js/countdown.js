// Set the target date for the countdown
const targetDate = new Date("2026-11-01T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  // When the countdown reaches zero
  if (diff <= 0) {
    document.getElementById("countdown").textContent = "0 Days 00:00:00";
    document.getElementById("message").style.display = "block";
    clearInterval(timer);
    return;
  }

  // Time calculations
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Display the countdown
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Start the countdown
updateCountdown();
const timer = setInterval(updateCountdown, 1000);
