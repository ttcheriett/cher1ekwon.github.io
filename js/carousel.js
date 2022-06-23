const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slidesIcons = document.querySelectorAll(".slide-icon");
const numberofSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slidesIcons.forEach((slidesIcons) => {
        slidesIcons.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > numberofSlides - 1){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slidesIcons[slideNumber].classList.add("active");
});

//image slider prev button
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slidesIcons.forEach((slidesIcons) => {
        slidesIcons.classList.remove("active");
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberofSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slidesIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slidesIcons.forEach((slidesIcons) => {
            slidesIcons.classList.remove("active");
        });
    
        slideNumber++;
    
        if(slideNumber > numberofSlides - 1){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add("active");
        slidesIcons[slideNumber].classList.add("active");
    }, 3000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

//start the image slider autoplay again on mouseut
slider.addEventListener("mouseout", () => {
    repeater();
});