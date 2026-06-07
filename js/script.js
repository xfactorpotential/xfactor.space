/* ===========================
   STICKY HEADER
=========================== */

const header =
document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");
    }

});

/* ===========================
   MOBILE MENU
=========================== */

const menuToggle =
document.getElementById("menuToggle");

const nav =
document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});

/* ===========================
   CLOSE MENU
=========================== */

document
.querySelectorAll(".nav-menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

/* ==================================
   HERO SECTION
================================== */

.hero{

    padding-top:150px;

    padding-bottom:80px;

    position:relative;

    overflow:hidden;

    background:
    radial-gradient(
        circle at top right,
        rgba(212,160,23,.12),
        transparent 30%
    ),

    radial-gradient(
        circle at bottom left,
        rgba(212,160,23,.08),
        transparent 25%
    ),

    #050505;
}

/* GOLD GLOW EFFECT */

.hero::before{

    content:"";

    position:absolute;

    width:450px;
    height:450px;

    top:-180px;
    right:-120px;

    border-radius:50%;

    background:
    rgba(212,160,23,.08);

    filter:blur(120px);

    pointer-events:none;
}

/* CONTENT */

.hero-container{

    max-width:900px;

    margin:auto;

    text-align:center;
}

.hero-badge{

    display:inline-block;

    color:var(--gold);

    border:1px solid rgba(212,160,23,.30);

    padding:10px 18px;

    border-radius:50px;

    background:
    rgba(212,160,23,.08);

    margin-bottom:25px;

    font-size:14px;
}

.hero-content h1{

    font-size:72px;

    line-height:1.1;

    font-weight:800;

    color:white;

    margin-bottom:25px;
}

.hero-content h1 span{

    color:var(--gold);
}

.hero-description{

    max-width:700px;

    margin:auto;

    color:#c5c5c5;

    font-size:18px;

    line-height:1.8;

    margin-bottom:35px;
}

/* FEATURES */

.hero-features{

    display:inline-block;

    text-align:left;

    margin-bottom:40px;

    list-style:none;
}

.hero-features li{

    margin-bottom:12px;

    color:white;

    position:relative;

    padding-left:28px;
}

.hero-features li::before{

    content:"✓";

    position:absolute;

    left:0;

    color:var(--gold);

    font-weight:bold;
}

/* BUTTONS */

.hero-buttons{

    display:flex;

    justify-content:center;

    gap:15px;

    margin-bottom:60px;
}

.btn-secondary{

    text-decoration:none;

    color:var(--gold);

    border:1px solid var(--gold);

    padding:12px 24px;

    border-radius:10px;

    font-weight:600;

    transition:.3s;
}

.btn-secondary:hover{

    background:var(--gold);

    color:black;
}

/* FEATURE STRIP */

.hero-strip{

    max-width:1400px;

    margin:auto;

    padding:0 25px;

    display:grid;

    grid-template-columns:
    repeat(4,1fr);

    gap:15px;
}

.feature-card{

    display:flex;

    align-items:center;

    gap:15px;

    background:#0d1117;

    border:1px solid rgba(212,160,23,.15);

    border-radius:14px;

    padding:20px;

    transition:.3s;
}

.feature-card:hover{

    transform:translateY(-5px);

    border-color:var(--gold);
}

.feature-card span{

    font-size:28px;
}

.feature-card h4{

    color:white;

    margin-bottom:5px;
}

.feature-card p{

    color:#999;

    font-size:13px;
}

/* RESPONSIVE */

@media(max-width:992px){

    .hero-content h1{

        font-size:54px;
    }

    .hero-strip{

        grid-template-columns:
        repeat(2,1fr);
    }
}

@media(max-width:768px){

    .hero{

        padding-top:130px;
    }

    .hero-content h1{

        font-size:40px;
    }

    .hero-description{

        font-size:16px;
    }

    .hero-buttons{

        flex-direction:column;
    }

    .hero-strip{

        grid-template-columns:1fr;
    }
}

/* ==================================
   ACCOUNT REGISTRATION POPUP
================================== */

const registerModal =
document.getElementById(
"registerModal"
);

const closeRegisterModal =
document.getElementById(
"closeRegisterModal"
);

/*
Open Popup

Later we will connect this
with Start Test button
*/

function openRegisterModal(){

    registerModal.classList.add(
    "active"
    );
}

/* Close Popup */

closeRegisterModal
.addEventListener("click",()=>{

    registerModal.classList.remove(
    "active"
    );

});

/* Outside Click */

registerModal
.addEventListener("click",(e)=>{

    if(e.target===registerModal){

        registerModal.classList.remove(
        "active"
        );
    }

});

/* Form Submit */

document
.getElementById("registerForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
    "Promo Code Generated Successfully!"
    );

});

/* ==================================
   ASSESSMENT UNLOCK POPUP
================================== */

const unlockModal =
document.getElementById(
"unlockModal"
);

const closeUnlockModal =
document.getElementById(
"closeUnlockModal"
);

/* OPEN POPUP */

function openUnlockModal(){

    unlockModal.classList.add(
    "active"
    );
}

/* CLOSE */

closeUnlockModal
.addEventListener("click",()=>{

    unlockModal.classList.remove(
    "active"
    );

});

/* OUTSIDE CLICK */

unlockModal
.addEventListener("click",(e)=>{

    if(e.target===unlockModal){

        unlockModal.classList.remove(
        "active"
        );
    }

});

/* VERIFY PROMO */

document
.getElementById("unlockForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
    "Promo Code Verified Successfully!"
    );

});

/* ==================================
   DEMO QUESTION NAVIGATION
================================== */

const nextBtn =
document.querySelector(".next-btn");

const previousBtn =
document.querySelector(".previous-btn");

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        alert(
        "Next Question Logic Will Be Added Later"
        );

    });

}

if(previousBtn){

    previousBtn.addEventListener("click",()=>{

        alert(
        "Previous Question Logic Will Be Added Later"
        );

    });

}

/* ==================================
   CONTACT FORM
================================== */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const name =
            document.getElementById(
                "contactName"
            ).value;

            alert(
                "Thank you " +
                name +
                "! Your message has been submitted."
            );

            contactForm.reset();

        }
    );

}

/* ==================================
   PAYMENT SECTION
================================== */

const applyPromoBtn =
document.getElementById(
    "applyPromo"
);

if(applyPromoBtn){

    applyPromoBtn.addEventListener(
        "click",
        () => {

            const code =
            document.getElementById(
                "paymentPromoCode"
            ).value;

            if(code.trim() !== ""){

                alert(
                    "Promo Code Applied: " +
                    code
                );

            }else{

                alert(
                    "Please enter a promo code."
                );

            }

        }
    );

}

const payNowBtn =
document.getElementById(
    "payNowBtn"
);

if(payNowBtn){

    payNowBtn.addEventListener(
        "click",
        () => {

            alert(
                "Razorpay integration will be connected later."
            );

        }
    );

}
