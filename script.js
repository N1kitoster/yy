const slider = document.querySelector('.slider')
const prevv = document.querySelector('.prev')
const nextt = document.querySelector('.next')
const slides = Array.from(slider.querySelectorAll('.ik'))
const slideCount = slides.length
let slideIndex = 0;

prevv.addEventListener('click', showPreviousSlide);
nextt.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex-1+slideCount) % slideCount;
    updateSlider();
}
function showNextSlide() {
    slideIndex = (slideIndex +1) % slideCount;
    updateSlider();
}
function updateSlider() {
    slides.forEach((slide,index)=>{
        if (index===slideIndex){
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}
updateSlider();


/*btn*/
let menu = document.querySelector("header .pon");
let menuToggle = document.querySelector(".btbtbt");

menuToggle.addEventListener("click", function(e) {
    e.preventDefault();
    menu.classList.toggle("show-menu");
    menuToggle.classList.toggle("active");
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 480 && menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        menuToggle.classList.remove("active");
    }
}); 