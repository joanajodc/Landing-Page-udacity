/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navbarMenu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//Build the nav
function createNav() {
  for (const item of sections) {
    const section = document.createElement("li");
    section.className = "menu__link";
    section.dataset.nav = item.id;
    section.innerText = item.dataset.nav;
    navbarMenu.appendChild(section);
  }
}

// Add class 'active' to section when near top of viewport
function makeActive() {
  for (const item of sections) {
    const position = item.getBoundingClientRect();
    if (position.top <= 200 && position.bottom >= 200) {
      item.classList.add("your-active-class");
    } else {
      item.classList.remove("your-active-class");
    }
  }
}

// Attach a scroll event to the window object (/ or document)
window.addEventListener("scroll", function () {
  makeActive();
});

// Scroll to anchor ID using scrollTO event:
function scrollToAnchor() {
  document.querySelectorAll(".navbar__menu").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      let active_ele = document.getElementById("${event.target.dataset.nav}");
      active_ele.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
createNav();
// Scroll to section on link click
scrollToAnchor();
// Set sections as active
makeActive();
