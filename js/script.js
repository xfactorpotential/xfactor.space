let careerScore = 0;
let dmitScore = 0;
let entrepreneurScore = 0;

let answers = [];
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
{
text:"Solving complex problems",
type:"career"
},
{
text:"Helping people",
type:"career"
},
{
text:"Creating new ideas",
type:"dmit"
},
{
text:"Building a business",
type:"entrepreneur"
}
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

btn.textContent = option.text;

btn.onclick = () => {

document
.querySelectorAll(".option-btn")
.forEach(b => b.classList.remove("selected"));

btn.classList.add("selected");

answers[currentQuestion] = option.type;

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

if(!answers[currentQuestion]){

alert("Please select an option");

return;

}

if(currentQuestion < questions.length - 1){

currentQuestion++;

loadQuestion();

}else{

calculateResults();

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

function calculateResults(){

careerScore = 0;
dmitScore = 0;
entrepreneurScore = 0;

answers.forEach(answer=>{

if(answer==="career"){
careerScore += 10;
}

if(answer==="dmit"){
dmitScore += 10;
}

if(answer==="entrepreneur"){
entrepreneurScore += 10;
}

});

document.getElementById(
"assessment-screen"
).style.display="none";

document.getElementById(
"assessmentResult"
).style.display="block";

document.getElementById(
"careerScore"
).textContent =
careerScore + "%";

document.getElementById(
"dmitScore"
).textContent =
dmitScore + "%";

document.getElementById(
"entrepreneurScore"
).textContent =
entrepreneurScore + "%";

}
