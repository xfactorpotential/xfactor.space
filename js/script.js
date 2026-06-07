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
