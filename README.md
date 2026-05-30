<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>X Factor | Unlocking the X in Every Human Being</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

html{
    scroll-behavior:smooth;
}

body{
    background:#0d0d0d;
    color:#fff;
    line-height:1.6;
}

:root{
    --gold:#d4af37;
    --dark:#0d0d0d;
    --light:#f5f5f5;
}

header{
    position:fixed;
    top:0;
    width:100%;
    z-index:1000;
    background:rgba(0,0,0,0.9);
    backdrop-filter:blur(10px);
}

nav{
    max-width:1200px;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
}

.logo{
    font-size:1.8rem;
    font-weight:800;
    color:var(--gold);
}

nav ul{
    list-style:none;
    display:flex;
    gap:30px;
}

nav ul li a{
    text-decoration:none;
    color:white;
    transition:.3s;
}

nav ul li a:hover{
    color:var(--gold);
}

.hero{
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding:100px 20px;
    background:
    linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.85)),
    url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600');
    background-size:cover;
    background-position:center;
}

.hero-content{
    max-width:900px;
}

.hero h1{
    font-size:4rem;
    color:var(--gold);
    margin-bottom:15px;
}

.hero p{
    font-size:1.3rem;
    margin-bottom:30px;
}

.btn{
    display:inline-block;
    background:var(--gold);
    color:black;
    padding:15px 35px;
    border-radius:50px;
    text-decoration:none;
    font-weight:600;
    transition:.3s;
}

.btn:hover{
    transform:translateY(-3px);
}

section{
    padding:90px 20px;
}

.container{
    max-width:1200px;
    margin:auto;
}

.section-title{
    text-align:center;
    font-size:2.5rem;
    color:var(--gold);
    margin-bottom:50px;
}

.about{
    text-align:center;
}

.about p{
    max-width:850px;
    margin:auto;
    font-size:1.1rem;
    color:#ccc;
}

.services-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:25px;
}

.service-card{
    background:#161616;
    padding:30px;
    border:1px solid #222;
    border-radius:15px;
    transition:.3s;
}

.service-card:hover{
    transform:translateY(-8px);
    border-color:var(--gold);
}

.service-card h3{
    color:var(--gold);
    margin-bottom:15px;
}

.why{
    background:#111;
}

.features{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.feature{
    text-align:center;
    padding:30px;
}

.feature h3{
    color:var(--gold);
    margin-bottom:10px;
}

.contact{
    text-align:center;
}

.contact-box{
    background:#161616;
    max-width:700px;
    margin:auto;
    padding:40px;
    border-radius:20px;
}

.contact-box p{
    margin:15px 0;
}

.contact-box a{
    color:var(--gold);
    text-decoration:none;
}

footer{
    text-align:center;
    padding:25px;
    background:#000;
    color:#888;
}

.whatsapp{
    position:fixed;
    right:20px;
    bottom:20px;
    background:#25D366;
    color:white;
    width:60px;
    height:60px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:28px;
    text-decoration:none;
    box-shadow:0 5px 15px rgba(0,0,0,.4);
}

@media(max-width:768px){

.hero h1{
    font-size:2.8rem;
}

nav{
    flex-direction:column;
    gap:15px;
}

nav ul{
    gap:15px;
}
}
</style>
</head>

<body>

<header>
<nav>
<div class="logo">X FACTOR</div>

<ul>
<li><a href="#about">About</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#why">Why Us</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>
</header>

<section class="hero">

<div class="hero-content">
<h1>Unlocking the X in Every Human Being</h1>

<p>
Discover your true potential, make informed career decisions,
and build a roadmap for a successful future.
</p>

<a href="#contact" class="btn">Book a Consultation</a>

</div>

</section>

<section id="about">

<div class="container about">

<h2 class="section-title">About X Factor</h2>

<p>
At X Factor, we believe every individual possesses a unique set of strengths,
talents, and untapped potential. Our scientific assessment and personalized
career guidance help students and professionals discover their true capabilities,
choose the right direction, and create a clear roadmap toward success.
</p>

</div>

</section>

<section id="services">

<div class="container">

<h2 class="section-title">Our Services</h2>

<div class="services-grid">

<div class="service-card">
<h3>Potential Discovery Assessment</h3>
<p>
Identify hidden strengths, natural abilities, personality traits, and potential areas of excellence.
</p>
</div>

<div class="service-card">
<h3>Career Blueprint Report</h3>
<p>
Receive a comprehensive report outlining suitable career options and growth opportunities.
</p>
</div>

<div class="service-card">
<h3>Career Counseling Session</h3>
<p>
One-on-one expert counseling to gain clarity and confidence about your future.
</p>
</div>

<div class="service-card">
<h3>Stream Selection Guidance</h3>
<p>
Choose the right academic stream based on aptitude, interests, and future opportunities.
</p>
</div>

<div class="service-card">
<h3>Career Roadmap Planning</h3>
<p>
Get a step-by-step strategy to achieve your academic and professional goals.
</p>
</div>

</div>

</div>

</section>

<section id="why" class="why">

<div class="container">

<h2 class="section-title">Why Choose X Factor?</h2>

<div class="features">

<div class="feature">
<h3>Scientific Approach</h3>
<p>Data-driven assessments designed to reveal genuine strengths.</p>
</div>

<div class="feature">
<h3>Personalized Guidance</h3>
<p>Recommendations tailored specifically to each individual.</p>
</div>

<div class="feature">
<h3>Career Clarity</h3>
<p>Eliminate confusion and make confident career decisions.</p>
</div>

<div class="feature">
<h3>Future Ready</h3>
<p>Build a roadmap aligned with evolving career opportunities.</p>
</div>

</div>

</div>

</section>

<section id="contact">

<div class="container">

<h2 class="section-title">Contact Us</h2>

<div class="contact-box">

<p><strong>Phone:</strong> +91 90990 44336</p>

<p>
<strong>Email:</strong>
<a href="mailto:xfactor.potential@gmail.com">
xfactor.potential@gmail.com
</a>
</p>

<p>
Ready to discover your true potential?
Contact us today and begin your journey toward a successful future.
</p>

<a href="tel:+919099044336" class="btn">
Call Now
</a>

</div>

</div>

</section>

<footer>
© 2026 X Factor. All Rights Reserved.
</footer>

<a class="whatsapp"
href="https://wa.me/919099044336"
target="_blank">
💬
</a>

</body>
</html>
