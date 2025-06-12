// Theme Toggle (Light/Dark Mode)
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  themeToggle.checked = savedTheme === "dark";
}

themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark" : "light";
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});

// Swipe functionality for both mouse and touch events
const swipeWrappers = document.querySelectorAll('.swipe-wrapper');

swipeWrappers.forEach(wrapper => {
  let isDown = false;
  let startX;
  let scrollLeft;

  // For Mouse Dragging (Desktop)
  wrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - wrapper.offsetLeft;
    scrollLeft = wrapper.scrollLeft;
  });

  wrapper.addEventListener('mouseleave', () => {
    isDown = false;
  });

  wrapper.addEventListener('mouseup', () => {
    isDown = false;
  });

  wrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 3; // Scroll fast
    wrapper.scrollLeft = scrollLeft - walk;
  });

  // For Touch Dragging (Mobile)
  wrapper.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - wrapper.offsetLeft;
    scrollLeft = wrapper.scrollLeft;
  });

  wrapper.addEventListener('touchend', () => {
    isDown = false;
  });

  wrapper.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 3; // Scroll fast
    wrapper.scrollLeft = scrollLeft - walk;
  });
});

// Optional: Smooth Scroll for swipe-able containers on touch devices
const smoothScrollWrappers = document.querySelectorAll('.swipe-wrapper');

smoothScrollWrappers.forEach(wrapper => {
  wrapper.style.scrollBehavior = "smooth";
});



