let selectedOption = null;

const options =

document.querySelectorAll(".option");

options.forEach(option=>{

option.addEventListener("click",()=>{

options.forEach(o=>{

o.classList.remove("selected");

});

option.classList.add("selected");

selectedOption = option.innerText;

});

});

document
.getElementById("continueBtn")
.addEventListener("click",()=>{

if(selectedOption===null){

alert(
"Please select an option."
);

return;

}

alert(
"Next Question Coming In Part 2"
);

});
/* ==========================
IKIGAI QUESTIONS
========================== */

const questions = [

{
category:"IKIGAI TEST",
question:"What activity makes you lose track of time?",
options:[
"Teaching others",
"Creating designs",
"Solving problems",
"Leading people"
]
},

{
category:"IKIGAI TEST",
question:"What kind of work excites you most?",
options:[
"Helping people",
"Building things",
"Analyzing data",
"Managing teams"
]
},

{
category:"IKIGAI TEST",
question:"What would you enjoy doing even without money?",
options:[
"Teaching",
"Creating",
"Researching",
"Mentoring"
]
},

{
category:"IKIGAI TEST",
question:"Which environment do you enjoy most?",
options:[
"Community",
"Studio",
"Laboratory",
"Corporate Office"
]
},

{
category:"IKIGAI TEST",
question:"What do friends usually ask help for?",
options:[
"Advice",
"Creativity",
"Logic",
"Leadership"
]
},

{
category:"IKIGAI TEST",
question:"Which task gives you satisfaction?",
options:[
"Helping",
"Innovating",
"Solving",
"Organizing"
]
},

{
category:"IKIGAI TEST",
question:"What motivates you most?",
options:[
"Impact",
"Creativity",
"Knowledge",
"Achievement"
]
},

{
category:"IKIGAI TEST",
question:"Which describes your ideal future?",
options:[
"Service",
"Innovation",
"Expertise",
"Influence"
]
}

];

/* ==========================
VARIABLES
========================== */

let currentQuestion = 0;

let answers = [];

/* ==========================
LOAD QUESTION
========================== */

function loadQuestion(){

const q =
questions[currentQuestion];

document
.getElementById("questionText")
.innerText =
q.question;

document
.getElementById("testCategory")
.innerText =
q.category;

document
.getElementById("questionNumber")
.innerText =
currentQuestion + 1;

const container =
document.getElementById(
"optionsContainer"
);

container.innerHTML = "";

q.options.forEach(option=>{

const btn =
document.createElement("button");

btn.className =
"option";

btn.innerText =
option;

btn.onclick = ()=>{

document
.querySelectorAll(".option")
.forEach(o=>{

o.classList.remove(
"selected"
);

});

btn.classList.add(
"selected"
);

selectedOption =
option;

};

container.appendChild(btn);

});

updateProgress();

}

/* ==========================
PROGRESS
========================== */

function updateProgress(){

const progress =

((currentQuestion+1)
/
const totalQuestions = 200;
const progress =

((currentQuestion+1)
/ totalQuestions)
*100;
document
.getElementById("progressBar")
.style.width =
progress + "%";

}

/* ==========================
CONTINUE
========================== */

document
.getElementById(
"continueBtn"
)
.addEventListener(
"click",
()=>{

if(
selectedOption===null
){

alert(
"Please select an option."
);

return;

}

answers.push(
selectedOption
);

selectedOption =
null;

currentQuestion++;

if(
currentQuestion >=
questions.length
){

showResult();

return;

}

loadQuestion();

}
);

/* ==========================
RESULT
========================== */

function showResult(){

const score =

Math.floor(
Math.random()*30
) + 70;

let career =

"Data Scientist";

if(score < 85){

career =
"Business Analyst";

}

if(score < 75){

career =
"Teacher";

}

document
.querySelector(".question-box")
.innerHTML =

`

<h2>

Career Blueprint Result

</h2>

<br>

<h3>

Career Match Score

</h3>

<h1 style="color:#d4af37">

${score}%

</h1>

<br>

<h3>

Recommended Career

</h3>

<p>

${career}

</p>

<br>

<h3>

Strength Summary

</h3>

<p>

Strong learning ability,
adaptability and growth mindset.

</p>

<br>

<h3>

Development Areas

</h3>

<p>

Leadership,
communication and
industry exposure.

</p>

<br>

<button
class="continue-btn"
onclick="location.reload()">

Restart Assessment

</button>

`;

}

document
.querySelector(
".question-box"
)
.innerHTML =

`

<h2>

Assessment Completed

</h2>

<p>

Thank you for completing
the IKIGAI Test.

</p>

<h3>

Your preliminary result
will appear here.

</h3>

`;

}

/* ==========================
START
========================== */

loadQuestion();
/* ==========================
TEST CATEGORIES
========================== */

const categories = [

{
name:"IKIGAI TEST",
count:40
},

{
name:"APTITUDE TEST",
count:40
},

{
name:"MULTIPLE INTELLIGENCE TEST",
count:40
},

{
name:"PERSONALITY TEST",
count:40
},

{
name:"VALUES ASSESSMENT",
count:40
}

];

let currentCategory = 0;
