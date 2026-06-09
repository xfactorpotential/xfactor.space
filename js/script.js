const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 20){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if(menuToggle && nav){

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

}
const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Thank you! Your message has been submitted.");

        contactForm.reset();

    });

}
const payNowBtn =
document.getElementById("payNowBtn");

if(payNowBtn){

    payNowBtn.addEventListener("click",()=>{

        alert("Payment Gateway Coming Soon");

    });

}
