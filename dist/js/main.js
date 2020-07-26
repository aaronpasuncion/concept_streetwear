// nav
const navBtn = document.querySelector(".nav__btn");
const navSection = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__item");
// seasons section
const seasonsLinks = document.querySelector(".seasons__selections");
const summerLink = document.querySelector(".seasons__warm");
const winterLink = document.querySelector(".seasons__cool");
const summerImgLeft = document.querySelector(".seasons__img-warm--left");
const winterImgLeft = document.querySelector(".seasons__img-cool--left");
const winterImgRight = document.querySelector(".seasons__img-cool--right");
const summerImgRight = document.querySelector(".seasons__img-warm--right");
// sections
const header = document.querySelector(".header");
const creation = document.querySelector(".creation");
const styles = document.querySelector(".styles");
const difference = document.querySelector(".difference");
const seasons = document.querySelector(".seasons");

// INITIALS
init();

function init() {
  window.scroll(0, 0);
}

/*

GLOBAL FUNCTIONS

*/

// scroll to function
scrollTo = (section) => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: section.offsetTop,
  });
  navigationMenu();
};

const navigationMenu = () => {
  header.classList.toggle("navigation-header");
  document.querySelector("body").classList.toggle("scroll-disable");
  navSection.classList.toggle("nav-open");
  navLinks.forEach((cur) => {
    cur.classList.toggle("nav-item-visible");
  });
};

/*

EVENT LISTENERS

*/

// NAVIGATION
navBtn.addEventListener("click", navigationMenu);

for (const link of navLinks) {
  link.addEventListener("click", () => {
    if (link.classList.contains("nav__item--creation")) {
      scrollTo(creation);
    } else if (link.classList.contains("nav__item--difference")) {
      scrollTo(difference);
    } else if (link.classList.contains("nav__item--styles")) {
      scrollTo(styles);
    } else if (link.classList.contains("nav__item--seasons")) {
      scrollTo(seasons);
    }
  });
}

// SEASONS SECTION
seasonsLinks.addEventListener("mouseover", (e) => {
  if (e.target === summerLink) {
    summerImgLeft.style.opacity = "1";
    summerImgRight.style.opacity = "1";
    winterImgLeft.style.opacity = "0";
    winterImgRight.style.opacity = "0";
  } else if (e.target === winterLink) {
    winterImgLeft.style.opacity = "1";
    winterImgRight.style.opacity = "1";
    summerImgLeft.style.opacity = "0";
    summerImgRight.style.opacity = "0";
  }
});

/*

GSAP ANIMATIONS

 */

let sections = gsap.utils.toArray(".section");

sections.forEach((section) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top center",
    },
  });

  tl.from(section, {
    y: 80,
    opacity: 0,
    duration: 0.75,
    ease: "power2.inOut",
  });
});

let fixedHeader = gsap.timeline({
  scrollTrigger: {
    trigger: ".section",
    start: "center center",
    onEnter: () => headerFixed("enter"),
    onLeaveBack: () => headerFixed("exit"),
  },
});

function headerFixed(event) {
  if (event === "enter") {
    header.classList.add("fixed-header");
  } else if (event === "exit") {
    header.classList.remove("fixed-header");
  }
}
