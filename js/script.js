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
const leadForm = document.getElementById("leadForm");

/* CONTACT US FORM */

if(contactForm){

    contactForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {
    name: document.getElementById("contactName").value,
    email: document.getElementById("contactEmail").value,
    mobile: document.getElementById("contactMobile").value,
    message: document.getElementById("contactMessage").value
};

        try {

            await fetch(
              "https://script.google.com/macros/s/AKfycbw3o4Pw1edoYpokRamIzEPChNl5RS45iJoVCt49VmpEpTvKehrQajDwi0YqPJMhClF4cg/exec",
              {
                method: "POST",
                mode: "no-cors",
                headers: {
                  "Content-Type":
                  "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(data)
              }
            );

            alert("Thank you! We will contact you soon.");

            contactForm.reset();

        } catch(error){

            console.error(error);

            alert("Form submission failed.");

        }

    });

}

/* DEMO TEST LEAD FORM */

if(leadForm){

    leadForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {
            name: document.getElementById("leadName").value,
            email: document.getElementById("leadEmail").value,
            mobile: document.getElementById("leadMobile").value,
            message: document.getElementById("leadMessage").value
        };

        try {

            await fetch(
              "https://script.google.com/macros/s/AKfycbw3o4Pw1edoYpokRamIzEPChNl5RS45iJoVCt49VmpEpTvKehrQajDwi0YqPJMhClF4cg/exec",
              {
                method: "POST",
                mode: "no-cors",
                headers: {
                  "Content-Type":
                  "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(data)
              }
            );

            leadForm.reset();

            document.getElementById("leadFormSection").style.display = "none";

            document.getElementById("assessmentResult").style.display = "block";

            document
            .getElementById("assessmentResult")
            .scrollIntoView({
                behavior:"smooth"
            });

        } catch(error){

            console.error(error);

            alert("Form submission failed.");

        }

    });

}    

/* ==========================
   DEMO ASSESSMENT
========================== */

const questions = [

{
question:"What type of work excites you the most?",
options:[
{text:"Solving complex problems",career:5,dmit:2,entrepreneur:1},
{text:"Helping people grow",career:4,dmit:3,entrepreneur:1},
{text:"Creating innovative ideas",career:2,dmit:5,entrepreneur:2},
{text:"Building a business",career:1,dmit:2,entrepreneur:5}
]
},

{
question:"How do you usually make decisions?",
options:[
{text:"Data & Logic",career:5,dmit:2,entrepreneur:2},
{text:"Personal Values",career:3,dmit:4,entrepreneur:1},
{text:"Intuition",career:2,dmit:5,entrepreneur:2},
{text:"Risk vs Reward",career:2,dmit:2,entrepreneur:5}
]
},

{
question:"Which activity do you enjoy most?",
options:[
{text:"Researching",career:5,dmit:3,entrepreneur:1},
{text:"Teaching",career:4,dmit:3,entrepreneur:1},
{text:"Designing",career:2,dmit:5,entrepreneur:2},
{text:"Selling",career:1,dmit:2,entrepreneur:5}
]
},

{
question:"What motivates you most?",
options:[
{text:"Knowledge",career:5,dmit:3,entrepreneur:1},
{text:"Helping Others",career:4,dmit:3,entrepreneur:1},
{text:"Creativity",career:2,dmit:5,entrepreneur:2},
{text:"Freedom",career:1,dmit:2,entrepreneur:5}
]
},

{
question:"How do friends describe you?",
options:[
{text:"Analytical",career:5,dmit:2,entrepreneur:1},
{text:"Supportive",career:4,dmit:3,entrepreneur:1},
{text:"Creative",career:2,dmit:5,entrepreneur:2},
{text:"Ambitious",career:1,dmit:2,entrepreneur:5}
]
},

{
question:"Which environment suits you best?",
options:[
{text:"Structured",career:5,dmit:2,entrepreneur:1},
{text:"Collaborative",career:4,dmit:3,entrepreneur:2},
{text:"Flexible",career:2,dmit:5,entrepreneur:2},
{text:"Fast-Paced",career:1,dmit:2,entrepreneur:5}
]
},

{
question:"What would you rather do?",
options:[
{text:"Analyze Data",career:5,dmit:2,entrepreneur:1},
{text:"Guide People",career:4,dmit:3,entrepreneur:1},
{text:"Create Products",career:2,dmit:5,entrepreneur:2},
{text:"Start Ventures",career:1,dmit:2,entrepreneur:5}
]
},

{
question:"Which skill do you value most?",
options:[
{text:"Problem Solving",career:5,dmit:2,entrepreneur:2},
{text:"Empathy",career:4,dmit:3,entrepreneur:1},
{text:"Creativity",career:2,dmit:5,entrepreneur:2},
{text:"Leadership",career:2,dmit:2,entrepreneur:5}
]
},

{
question:"What excites you about the future?",
options:[
{text:"Technology",career:5,dmit:2,entrepreneur:2},
{text:"Social Impact",career:4,dmit:3,entrepreneur:1},
{text:"Innovation",career:2,dmit:5,entrepreneur:2},
{text:"Wealth Creation",career:1,dmit:2,entrepreneur:5}
]
},

{
question:"Which role attracts you most?",
options:[
{text:"Specialist",career:5,dmit:2,entrepreneur:1},
{text:"Mentor",career:4,dmit:3,entrepreneur:1},
{text:"Creator",career:2,dmit:5,entrepreneur:2},
{text:"Entrepreneur",career:1,dmit:2,entrepreneur:5}
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

answers[currentQuestion] = {
career: option.career,
dmit: option.dmit,
entrepreneur: option.entrepreneur
};

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

function calculateResults(){

careerScore = 0;
dmitScore = 0;
entrepreneurScore = 0;

answers.forEach(answer => {

careerScore += answer.career;
dmitScore += answer.dmit;
entrepreneurScore += answer.entrepreneur;

});

careerScore = Math.round((careerScore / 50) * 100);
dmitScore = Math.round((dmitScore / 50) * 100);
entrepreneurScore = Math.round((entrepreneurScore / 50) * 100);

document.getElementById("assessment-screen").style.display = "none";

document.getElementById("leadFormSection").style.display = "block";

document.getElementById("careerScore").textContent =
careerScore + "%";

document.getElementById("dmitScore").textContent =
dmitScore + "%";

document.getElementById("entrepreneurScore").textContent =
entrepreneurScore + "%";

let strengths = [];

if(careerScore >= 70)
strengths.push("Strong Career Clarity");

if(dmitScore >= 70)
strengths.push("High Creative & Natural Potential");

if(entrepreneurScore >= 70)
strengths.push("Strong Entrepreneurial Mindset");

if(strengths.length === 0)
strengths.push("Balanced Personality Profile");

const careerList =
document.querySelector(".career-list");

if(careerList){

careerList.innerHTML =
strengths.map(item =>
`<li>${item}</li>`
).join("");

}

/* Auto Scroll To Result */

document
.getElementById("leadFormSection")
.scrollIntoView({
    behavior:"smooth"
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

/* ==========================
   SUCCESS STORIES INFINITE LOOP
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".testimonial-track");

    if(track){

        track.innerHTML += track.innerHTML;

    }

});
