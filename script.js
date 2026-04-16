const progress = document.getElementById("progress");
const dayButtons = document.querySelectorAll(".day");
const dayDetails = document.querySelectorAll(".day-detail");
const pageSections = document.querySelectorAll("[data-page]");
const routeLinks = document.querySelectorAll("[data-route]");
const routes = new Set(["home", "conference", "transport", "stay", "itinerary", "budget", "documents"]);

function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = height > 0 ? (scrollTop / height) * 100 : 0;
  progress.style.width = `${percent}%`;
}

function currentRoute() {
  const route = window.location.hash.replace("#", "");
  return routes.has(route) ? route : "home";
}

function renderRoute(shouldScroll = false) {
  const route = currentRoute();

  pageSections.forEach((section) => {
    section.hidden = section.dataset.page !== route;
  });

  routeLinks.forEach((link) => {
    const isActive = link.dataset.route === route;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  updateProgress();
}

dayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.day;

    dayButtons.forEach((item) => item.classList.toggle("active", item === button));
    dayDetails.forEach((detail) => detail.classList.toggle("active", detail.id === targetId));
  });
});

window.addEventListener("hashchange", () => renderRoute(true));
window.addEventListener("scroll", updateProgress, { passive: true });
renderRoute(false);
updateProgress();
