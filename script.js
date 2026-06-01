/* ====================================
   X FACTOR
   SCRIPT PART 1
==================================== */

/* ====================================
   STUDENT DATA
==================================== */

let studentData = {

name:"",
email:"",
mobile:"",
school:"",
className:"",
city:""

}

/* ====================================
   OPEN POPUP
==================================== */

function openLead(){

const popup =

document.getElementById(
"leadPopup"
)

if(popup){

popup.style.display="flex"

}

}

/* ====================================
   CLOSE POPUP
==================================== */

function closeLead(){

const popup =

document.getElementById(
"leadPopup"
)

if(popup){

popup.style.display="none"

}

}

/* ====================================
   START ASSESSMENT
==================================== */

function startAssessment(){

const name =

document.getElementById(
"studentName"
).value.trim()

const email =

document.getElementById(
"studentEmail"
).value.trim()

const mobile =

document.getElementById(
"studentMobile"
).value.trim()

const school =

document.getElementById(
"studentSchool"
).value.trim()

const className =

document.getElementById(
"studentClass"
).value.trim()

const city =

document.getElementById(
"studentCity"
).value.trim()

/* VALIDATION */

if(
name==="" ||
email==="" ||
mobile===""
){

alert(
"Please fill Name, Email and Mobile Number."
)

return

}

/* STORE */

studentData = {

name:name,
email:email,
mobile:mobile,
school:school,
className:className,
city:city

}

/* SAVE TO LOCAL STORAGE */

localStorage.setItem(

"xfactorStudent",

JSON.stringify(
studentData
)

)

/* UPDATE REPORT NAME */

const displayName =

document.getElementById(
"studentDisplayName"
)

if(displayName){

displayName.innerText = name

}

/* CLOSE POPUP */

closeLead()

/* HIDE MAIN SECTIONS */

document.querySelector(
".hero"
).style.display="none"

document.getElementById(
"why"
).style.display="none"

document.getElementById(
"services"
).style.display="none"

/* SHOW INTRO */

const intro =

document.getElementById(
"categoryIntro"
)

if(intro){

intro.style.display="flex"

}

}

/* ====================================
   LOAD SAVED STUDENT
==================================== */

window.onload = function(){

const saved =

localStorage.getItem(
"xfactorStudent"
)

if(saved){

studentData =
JSON.parse(saved)

const displayName =

document.getElementById(
"studentDisplayName"
)

if(displayName){

displayName.innerText =
studentData.name

}

}

}
/* ====================================
   QUESTION DATABASE
==================================== */

const questions = [

/* ====================================
   IKIGAI (1-10)
==================================== */

{
category:"IKIGAI",
question:"What activity makes you lose track of time?",
options:[
"Teaching",
"Designing",
"Building",
"Helping Others"
]
},

{
category:"IKIGAI",
question:"What do you enjoy learning about most?",
options:[
"Technology",
"People",
"Business",
"Nature"
]
},

{
category:"IKIGAI",
question:"What kind of work excites you?",
options:[
"Creative",
"Analytical",
"Social",
"Practical"
]
},

{
category:"IKIGAI",
question:"What would you do even without money?",
options:[
"Teach",
"Create",
"Research",
"Serve"
]
},

{
category:"IKIGAI",
question:"Which activity gives you satisfaction?",
options:[
"Solving Problems",
"Helping Others",
"Creating Things",
"Leading Teams"
]
},

{
category:"IKIGAI",
question:"What motivates you the most?",
options:[
"Impact",
"Recognition",
"Income",
"Learning"
]
},

{
category:"IKIGAI",
question:"People usually approach you for?",
options:[
"Advice",
"Ideas",
"Technical Help",
"Leadership"
]
},

{
category:"IKIGAI",
question:"What kind of challenges do you enjoy?",
options:[
"Creative",
"Logical",
"Social",
"Strategic"
]
},

{
category:"IKIGAI",
question:"What describes your dream career?",
options:[
"Meaningful",
"High Paying",
"Creative",
"Influential"
]
},

{
category:"IKIGAI",
question:"Which environment inspires you?",
options:[
"Office",
"Nature",
"Laboratory",
"Community"
]
},

/* ====================================
   APTITUDE (11-20)
==================================== */

{
category:"APTITUDE",
question:"What is 25% of 200?",
options:[
"25",
"40",
"50",
"75"
]
},

{
category:"APTITUDE",
question:"Find next number: 2,4,8,16",
options:[
"24",
"30",
"32",
"36"
]
},

{
category:"APTITUDE",
question:"If all roses are flowers, roses are?",
options:[
"Plants",
"Flowers",
"Trees",
"Leaves"
]
},

{
category:"APTITUDE",
question:"What is half of 500?",
options:[
"100",
"150",
"250",
"300"
]
},

{
category:"APTITUDE",
question:"Find next: A,C,E,G",
options:[
"H",
"I",
"J",
"K"
]
},

{
category:"APTITUDE",
question:"Which shape has 4 equal sides?",
options:[
"Rectangle",
"Triangle",
"Square",
"Circle"
]
},

{
category:"APTITUDE",
question:"Which number is largest?",
options:[
"15",
"28",
"42",
"39"
]
},

{
category:"APTITUDE",
question:"5 x 8 equals?",
options:[
"35",
"40",
"45",
"50"
]
},

{
category:"APTITUDE",
question:"Which comes first alphabetically?",
options:[
"Dog",
"Apple",
"Tiger",
"Monkey"
]
},

{
category:"APTITUDE",
question:"If today is Monday, after 3 days it will be?",
options:[
"Tuesday",
"Wednesday",
"Thursday",
"Friday"
]
},

/* ====================================
   MULTIPLE INTELLIGENCE (21-30)
==================================== */

{
category:"MI",
question:"I enjoy reading books.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"MI",
question:"I like solving puzzles.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"MI",
question:"I learn best through diagrams.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"MI",
question:"I enjoy music deeply.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"MI",
question:"I like outdoor activities.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"MI",
question:"I work well with people.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"MI",
question:"I understand my emotions well.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"MI",
question:"I enjoy observing nature.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"MI",
question:"I remember visuals easily.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"MI",
question:"I enjoy debates and discussions.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

/* ====================================
   PERSONALITY (31-40)
==================================== */

{
category:"PERSONALITY",
question:"I enjoy meeting new people.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"PERSONALITY",
question:"I plan before acting.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"PERSONALITY",
question:"I stay calm under pressure.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"PERSONALITY",
question:"I like trying new things.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"PERSONALITY",
question:"I enjoy teamwork.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"PERSONALITY",
question:"I complete tasks on time.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"PERSONALITY",
question:"I adapt easily to change.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"PERSONALITY",
question:"I communicate confidently.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"PERSONALITY",
question:"I like organizing things.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

{
category:"PERSONALITY",
question:"I enjoy learning continuously.",
options:[
"Strongly Agree",
"Agree",
"Neutral",
"Disagree"
]
},

/* ====================================
   VALUES (41-50)
==================================== */

{
category:"VALUES",
question:"What matters most in work?",
options:[
"Income",
"Impact",
"Freedom",
"Security"
]
},

{
category:"VALUES",
question:"What motivates you most?",
options:[
"Growth",
"Recognition",
"Purpose",
"Stability"
]
},

{
category:"VALUES",
question:"Which is most important?",
options:[
"Leadership",
"Service",
"Innovation",
"Security"
]
},

{
category:"VALUES",
question:"What defines success?",
options:[
"Money",
"Happiness",
"Contribution",
"Influence"
]
},

{
category:"VALUES",
question:"What would you prioritize?",
options:[
"Family",
"Career",
"Learning",
"Freedom"
]
},

{
category:"VALUES",
question:"Which appeals most?",
options:[
"Authority",
"Helping",
"Creating",
"Exploring"
]
},

{
category:"VALUES",
question:"What drives decisions?",
options:[
"Logic",
"Values",
"Opportunity",
"Security"
]
},

{
category:"VALUES",
question:"Which work culture do you prefer?",
options:[
"Structured",
"Flexible",
"Innovative",
"Collaborative"
]
},

{
category:"VALUES",
question:"What is your biggest goal?",
options:[
"Wealth",
"Impact",
"Knowledge",
"Freedom"
]
},

{
category:"VALUES",
question:"Which quality do you admire most?",
options:[
"Integrity",
"Leadership",
"Creativity",
"Courage"
]
}

]

/* ====================================
   QUESTION VARIABLES
==================================== */

let currentQuestion = 0

let selectedAnswer = null

let totalScore = 0

let answers = []
/* ====================================
   CATEGORY INTRO
==================================== */

function beginCategory(){

document.getElementById(
"categoryIntro"
).style.display = "none"

document.getElementById(
"assessmentContainer"
).style.display = "block"

renderQuestion()

}

/* ====================================
   RENDER QUESTION
==================================== */

function renderQuestion(){

const q =
questions[currentQuestion]

document.getElementById(
"questionText"
).innerText =
q.question

document.getElementById(
"questionCategory"
).innerText =
q.category

document.getElementById(
"currentQuestion"
).innerText =
currentQuestion + 1

let optionsHTML = ""

q.options.forEach(

(option,index)=>{

optionsHTML +=

`
<div
class="option"
onclick="selectOption(${index})">

${option}

</div>
`

})

document.getElementById(
"optionsContainer"
).innerHTML =
optionsHTML

updateProgress()

restoreSelection()

}

/* ====================================
   SELECT OPTION
==================================== */

function selectOption(index){

selectedAnswer = index

const options =

document.querySelectorAll(
".option"
)

options.forEach(

option=>{

option.classList.remove(
"selected"
)

})

options[index]
.classList.add(
"selected"
)

}

/* ====================================
   RESTORE PREVIOUS ANSWER
==================================== */

function restoreSelection(){

selectedAnswer = null

if(
answers[currentQuestion]
!== undefined
){

selectedAnswer =
answers[currentQuestion]

const options =

document.querySelectorAll(
".option"
)

if(
options[selectedAnswer]
){

options[selectedAnswer]
.classList.add(
"selected"
)

}

}

}

/* ====================================
   PROGRESS BAR
==================================== */

function updateProgress(){

const percentage =

(
(currentQuestion + 1)

/

questions.length

)

* 100

document.getElementById(
"progressBar"
).style.width =

percentage + "%"

}

/* ====================================
   NEXT QUESTION
==================================== */

function nextQuestion(){

if(
selectedAnswer === null
){

alert(
"Please select an answer."
)

return

}

/* SAVE ANSWER */

answers[currentQuestion] =
selectedAnswer

/* SIMPLE SCORING */

totalScore +=
(selectedAnswer + 1)

/* MOVE FORWARD */

currentQuestion++

/* FINISHED */

if(
currentQuestion >=
questions.length
){

showProcessing()

return

}

renderQuestion()

}

/* ====================================
   PREVIOUS QUESTION
==================================== */

function previousQuestion(){

if(
currentQuestion === 0
){

return

}

currentQuestion--

renderQuestion()

}
/* ====================================
   PROCESSING SCREEN
==================================== */

function showProcessing(){

document.getElementById(
"assessmentContainer"
).style.display = "none"

document.getElementById(
"processingScreen"
).style.display = "flex"

/* SHOW REPORT AFTER 2 SECONDS */

setTimeout(

function(){

showResults()

},

2000

)

}

/* ====================================
   SHOW RESULTS
==================================== */

function showResults(){

document.getElementById(
"processingScreen"
).style.display = "none"

document.getElementById(
"resultContainer"
).style.display = "block"

generateCareerReport()

}

/* ====================================
   REPORT GENERATOR
==================================== */

function generateCareerReport(){

let readiness =

Math.min(

100,

Math.round(

(totalScore /

(questions.length * 4))

* 100

)

)

document.getElementById(
"careerReadiness"
).innerText =

readiness + "%"

/* UPDATE SCORE CIRCLE */

updateScoreCircle(
readiness
)

/* STREAM */

let stream = "Science"

if(readiness < 50){

stream = "Commerce"

}

if(readiness < 35){

stream = "Arts"

}

document.getElementById(
"recommendedStream"
).innerText =
stream

/* LEARNING STYLE */

let learningStyle =

"Visual Learner"

if(readiness > 80){

learningStyle =
"Experiential Learner"

}

if(readiness < 50){

learningStyle =
"Guided Learner"

}

document.getElementById(
"learningStyle"
).innerText =
learningStyle

/* TOP CAREER */

let topCareer =

"Data Scientist"

if(readiness < 60){

topCareer =
"Business Analyst"

}

if(readiness < 40){

topCareer =
"Teacher"

}

document.getElementById(
"topCareer"
).innerText =
topCareer

/* GENERATE SECTIONS */

generateCareerMatches(
readiness
)

generateStrengths(
readiness
)

generateDevelopmentAreas(
readiness
)

renderCharts()

}

/* ====================================
   SCORE CIRCLE
==================================== */

function updateScoreCircle(score){

const degrees =

(score / 100) * 360

const circle =

document.querySelector(
".score-circle"
)

if(circle){

circle.style.background =

`conic-gradient(
#f4c542 ${degrees}deg,
#222 ${degrees}deg
)`

}

}

/* ====================================
   CAREER MATCHES
==================================== */

function generateCareerMatches(score){

let careers = []

if(score >= 80){

careers = [

["Data Scientist","92%"],

["AI Engineer","89%"],

["Product Manager","86%"],

["UX Researcher","84%"],

["Psychologist","81%"]

]

}

else if(score >= 60){

careers = [

["Business Analyst","88%"],

["Digital Marketer","84%"],

["HR Specialist","82%"],

["Teacher","80%"],

["Operations Manager","78%"]

]

}

else{

careers = [

["Teacher","85%"],

["Social Worker","82%"],

["Counselor","80%"],

["Content Creator","78%"],

["Administrative Officer","75%"]

]

}

let html = ""

careers.forEach(

career=>{

html +=

`

<div class="career-card">

<h3>

${career[0]}

</h3>

<p>

${career[1]} Match

</p>

</div>

`

})

document.getElementById(
"careerMatches"
).innerHTML = html

}

/* ====================================
   STRENGTHS
==================================== */

function generateStrengths(score){

let strengths = []

if(score >= 80){

strengths = [

"Strong analytical thinking",

"Excellent learning ability",

"High adaptability",

"Problem solving mindset"

]

}

else if(score >= 60){

strengths = [

"Good communication",

"Team collaboration",

"Positive attitude",

"Learning orientation"

]

}

else{

strengths = [

"Empathy",

"Supportive nature",

"Patience",

"Consistency"

]

}

let html = ""

strengths.forEach(

item=>{

html +=

`<li>${item}</li>`

})

document.getElementById(
"strengthList"
).innerHTML = html

}

/* ====================================
   DEVELOPMENT AREAS
==================================== */

function generateDevelopmentAreas(score){

let areas = []

if(score >= 80){

areas = [

"Leadership development",

"Industry exposure",

"Networking skills"

]

}

else if(score >= 60){

areas = [

"Analytical thinking",

"Decision making",

"Presentation skills"

]

}

else{

areas = [

"Confidence building",

"Career exploration",

"Goal setting"

]

}

let html = ""

areas.forEach(

item=>{

html +=

`<li>${item}</li>`

})

document.getElementById(
"developmentList"
).innerHTML = html

}
/* ====================================
   CHARTS
==================================== */

function renderCharts(){

renderMIChart()

renderPersonalityChart()

}

/* ====================================
   MULTIPLE INTELLIGENCE CHART
==================================== */

function renderMIChart(){

const canvas =

document.getElementById(
"miChart"
)

if(!canvas){
return
}

new Chart(

canvas,

{

type:"radar",

data:{

labels:[

"Linguistic",

"Logical",

"Visual",

"Musical",

"Interpersonal"

],

datasets:[{

label:

"Multiple Intelligence",

data:[

85,
78,
90,
65,
82

],

borderColor:"#f4c542",

backgroundColor:

"rgba(244,197,66,.2)",

borderWidth:2

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"white"

}

}

},

scales:{

r:{

angleLines:{

color:"#444"

},

grid:{

color:"#444"

},

pointLabels:{

color:"white"

},

ticks:{

color:"white",

backdropColor:"transparent"

}

}

}

}

}

)

}

/* ====================================
   PERSONALITY CHART
==================================== */

function renderPersonalityChart(){

const canvas =

document.getElementById(
"personalityChart"
)

if(!canvas){
return
}

new Chart(

canvas,

{

type:"bar",

data:{

labels:[

"Openness",

"Conscientiousness",

"Extraversion",

"Agreeableness",

"Stability"

],

datasets:[{

label:"Personality",

data:[

82,
75,
68,
88,
73

],

backgroundColor:"#f4c542"

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"white"

}

}

},

scales:{

x:{

ticks:{

color:"white"

},

grid:{

color:"#333"

}

},

y:{

ticks:{

color:"white"

},

grid:{

color:"#333"

}

}

}

}

}

)

}

/* ====================================
   RESET ASSESSMENT
==================================== */

function restartAssessment(){

currentQuestion = 0

selectedAnswer = null

totalScore = 0

answers = []

document.getElementById(
"resultContainer"
).style.display = "none"

document.getElementById(
"categoryIntro"
).style.display = "flex"

}

/* ====================================
   DEBUG CHECK
==================================== */

console.log(

"X Factor Assessment Engine Loaded"

)
