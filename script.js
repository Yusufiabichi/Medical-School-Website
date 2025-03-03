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

