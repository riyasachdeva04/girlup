// JavaScript for parallax effect
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  let scrollPosition = window.pageYOffset;
  parallax.style.backgroundPositionY = (scrollPosition * 0.7 + 70) + "px";
});

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', scrollSmooth);
}

function scrollSmooth(e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  window.scrollTo({
    top: target.offsetTop,
    behavior: 'smooth'
  });
}
