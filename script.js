const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close-menu");

toggleMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("show");
});
closeMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("show");
});

window.addEventListener("click", (e) =>{
  if (e.target == navMenu) {
    navMenu.classList.remove("show");
  }
});

// window.onclick = function(event) {
//   if (event.target == navMenu) {
//       navMenu.classList.toggle("show");
//   }
// }

let currentIndex = 0;
let slideInterval;

function showSlides(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlides(step) {
  showSlides(currentIndex + step);
  resetSlideInterval();
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    showSlides(currentIndex + 1);
  }, 4000);
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  startSlideShow();
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides(currentIndex);
  startSlideShow();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

