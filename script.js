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


      // slider js
        let currentIndex = 0;
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");
        
        function moveSlide(index) {
            currentIndex = index;
            document.querySelector(".slider").style.transform = `translateX(-${index * 100}vw)`;
            dots.forEach(dot => dot.classList.remove("active"));
            dots[index].classList.add("active");
        }
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            moveSlide(currentIndex);
        }, 5000);
        //slider js ends here

        
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

