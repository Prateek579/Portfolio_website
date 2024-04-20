// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let fromTop = window.scrollY;

  section.forEach((section) => {
    let sectionId = section.getAttribute("id");
    let navLink = document.querySelector(`header nav a[href="#${sectionId}"]`);

    if (
      section.offsetTop - 150 <= fromTop &&
      section.offsetTop + section.offsetHeight - 150 > fromTop
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, portfolio-box, .contact form",
  { origin: "buttom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Fullstack Developer","Nodejs Developer", "Reactjs Developer"],
  typeSpeed: 40,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
