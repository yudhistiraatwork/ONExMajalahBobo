const preorderEnd = new Date("2026-09-19T23:59:59+07:00").getTime();

const countdownNodes = {
  days: document.getElementById("days-left"),
  hours: document.getElementById("hours-left"),
  minutes: document.getElementById("minutes-left"),
  seconds: document.getElementById("seconds-left"), // ✅ Tambahkan selector detik
};

function updateCountdown() {
  const now = Date.now();
  const distance = Math.max(0, preorderEnd - now);
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;
  const second = 1000; // ✅ Tambahkan satuan detik

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second); // ✅ Hitung sisa detik

  // Update teks jika elemennya ada di DOM
  if (countdownNodes.days) countdownNodes.days.textContent = String(days).padStart(2, "0");
  if (countdownNodes.hours) countdownNodes.hours.textContent = String(hours).padStart(2, "0");
  if (countdownNodes.minutes) countdownNodes.minutes.textContent = String(minutes).padStart(2, "0");
  if (countdownNodes.seconds) countdownNodes.seconds.textContent = String(seconds).padStart(2, "0"); // ✅ Render detik
}

updateCountdown();
setInterval(updateCountdown, 1000); // ✅ Ubah dari 60000 menjadi 1000 ms (1 detik)

// --- Sticky CTA Logic ---
const stickyOffset = 180;

function updateStickyCta() {
  document.body.classList.toggle("sticky-visible", window.scrollY > stickyOffset);
}

updateStickyCta();
window.addEventListener("scroll", updateStickyCta, { passive: true });
