const preorderEnd = new Date("2026-09-19T23:59:59+07:00").getTime();

const countdownNodes = {
  days: document.getElementById("days-left"),
  hours: document.getElementById("hours-left"),
  minutes: document.getElementById("minutes-left"),
};

function updateCountdown() {
  const now = Date.now();
  const distance = Math.max(0, preorderEnd - now);
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);

  countdownNodes.days.textContent = String(days).padStart(2, "0");
  countdownNodes.hours.textContent = String(hours).padStart(2, "0");
  countdownNodes.minutes.textContent = String(minutes).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 60000);

const stickyOffset = 180;

function updateStickyCta() {
  document.body.classList.toggle("sticky-visible", window.scrollY > stickyOffset);
}

updateStickyCta();
window.addEventListener("scroll", updateStickyCta, { passive: true });
