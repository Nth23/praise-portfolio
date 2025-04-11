let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

function toggleTheme() {
  const root = document.documentElement; // Use :root instead of body
  const btn = document.querySelector(".theme-toggle-btn");

  // Toggle dark and light mode classes on :root
  root.classList.toggle("dark-theme");
  root.classList.toggle("light-theme");

  // Toggle button class to switch icons
  if (root.classList.contains("dark-theme")) {
    btn.classList.add("dark");
    btn.classList.remove("light");
  } else {
    btn.classList.add("light");
    btn.classList.remove("dark");
  }
}

// Function to set the button icon based on current theme on page load
function setInitialTheme() {
  const root = document.documentElement;
  const btn = document.querySelector(".theme-toggle-btn");

  if (root.classList.contains("dark-theme")) {
    btn.classList.add("dark");
    btn.classList.remove("light");
  } else {
    btn.classList.add("light");
    btn.classList.remove("dark");
  }
}

// Call setInitialTheme when the page loads
window.addEventListener("DOMContentLoaded", setInitialTheme);
function toggleReadMore(event) {
  event.preventDefault();
  const moreText = document.getElementById("moreText");
  const button = event.target;

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    button.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    button.textContent = "Read More";
  }
}
