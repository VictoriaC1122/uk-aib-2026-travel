const progress = document.getElementById("progress");
const dayButtons = document.querySelectorAll(".day");
const dayDetails = document.querySelectorAll(".day-detail");

function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = height > 0 ? (scrollTop / height) * 100 : 0;
  progress.style.width = `${percent}%`;
}

dayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.day;

    dayButtons.forEach((item) => item.classList.toggle("active", item === button));
    dayDetails.forEach((detail) => detail.classList.toggle("active", detail.id === targetId));
  });
});

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
