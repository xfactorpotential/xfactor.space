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

/* ==========================
   DEMO ASSESSMENT
========================== */

const questions = [

{
question:"What type of work excites you the most?",
options:[
"Solving complex problems",
"Helping people",
"Creating new ideas",
"Building a business"
]
},

{
question:"How do you usually make decisions?",
options:[
"Logic and analysis",
"Feelings and values",
"Creativity and intuition",
"Opportunities and risks"
]
},

{
question:"Which activity do you enjoy most?",
options:[
"Researching",
"Teaching",
"Designing",
"Selling"
]
},

{
question:"What motivates you most?",
options:[
"Knowledge",
"Impact",
"Innovation",
"Freedom"
]
},

{
question:"How do friends describe you?",
options:[
"Analytical",
"Supportive",
"Creative",
"Ambitious"
]
},

{
question:"Which environment suits you best?",
options:[
"Structured",
"Collaborative",
"Flexible",
"Fast-paced"
]
},

{
question:"What would you rather do?",
options:[
"Analyze data",
"Guide people",
"Create products",
"Start ventures"
]
},

{
question:"Which skill do you value most?",
options:[
"Problem solving",
"Empathy",
"Creativity",
"Leadership"
]
},

{
question:"What excites you about the future?",
options:[
"Technology",
"Social impact",
"Innovation",
"Wealth creation"
]
},

{
question:"Which role attracts you most?",
options:[
"Specialist",
"Mentor",
"Creator",
"Entrepreneur"
]
}

];

let currentQuestion = 0;

const questionText =
document.getElementById("questionText");

const optionsContainer =
document.getElementById("optionsContainer");

const nextBtn =
document.getElementById("nextBtn");

const previousBtn =
document.getElementById("previousBtn");

const questionCounter =
document.getElementById("questionCounter");

const progressFill =
document.getElementById("progressFill");

const progressPercent =
document.getElementById("progressPercent");

function loadQuestion(){

if(!questionText) return;

let q = questions[currentQuestion];

questionText.textContent = q.question;

optionsContainer.innerHTML = "";

q.options.forEach(option => {

const btn =
document.createElement("button");

btn.className = "option-btn";

btn.textContent = option;

btn.onclick = () => {

document
.querySelectorAll(".option-btn")
.forEach(b => b.classList.remove("selected"));

btn.classList.add("selected");

};

optionsContainer.appendChild(btn);

});

questionCounter.textContent =
`Question ${currentQuestion + 1} of ${questions.length}`;

let percent =
((currentQuestion + 1) / questions.length) * 100;

progressFill.style.width =
percent + "%";

progressPercent.textContent =
Math.round(percent) + "%";

}

if(nextBtn){

nextBtn.addEventListener("click",()=>{

if(currentQuestion < questions.length - 1){

currentQuestion++;

loadQuestion();

}

});

}

if(previousBtn){

previousBtn.addEventListener("click",()=>{

if(currentQuestion > 0){

currentQuestion--;

loadQuestion();

}

});

}

loadQuestion();
