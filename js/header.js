

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "0";
});
closeOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "-100%";
});


let acarrow = document.querySelector(".ac-arrow");
acarrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show1")
});
let abarrow = document.querySelector(".ab-arrow");
abarrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show2")
});
let coarrow = document.querySelector(".co-arrow");
coarrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show3")
});
