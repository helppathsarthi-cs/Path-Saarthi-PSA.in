// PSA Website Script

document.addEventListener("DOMContentLoaded", function () {

console.log("PSA Website Loaded Successfully");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

btn.addEventListener("mouseenter", () => {

btn.style.transform = "scale(1.03)";

});

btn.addEventListener("mouseleave", () => {

btn.style.transform = "scale(1)";

});

});

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});
