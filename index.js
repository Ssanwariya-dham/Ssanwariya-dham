const navbar = document.querySelector(".top-bar2");

window.addEventListener("scroll", function(){

    if(window.scrollY > 100){

        navbar.classList.add("sticky");

    }else{

        navbar.classList.remove("sticky");

    }

});
// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{

    reveals.forEach((element)=>{

        let windowHeight = window.innerHeight;

        let elementTop = element.getBoundingClientRect().top;

        let visiblePoint = 100;


        if(elementTop < windowHeight - visiblePoint){

            element.classList.add("active");

        }

    });

});
// Back To Top Button

const backBtn = document.getElementById("backToTop");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        backBtn.style.display="flex";

    }
    else{

        backBtn.style.display="none";

    }


});


backBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Open / Close Menu
menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){
        menuToggle.innerHTML = "✖";
    }else{
        menuToggle.innerHTML = "☰";
    }

});

// Menu Link Click
document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        menuToggle.innerHTML="☰";

    });

});

// Click Outside
document.addEventListener("click",(e)=>{

    if(!navMenu.contains(e.target) && !menuToggle.contains(e.target)){

        navMenu.classList.remove("active");

        menuToggle.innerHTML="☰";

    }

});
window.addEventListener("load",()=>{

    const hero = document.querySelector(".hero1");

    setTimeout(()=>{

        hero.classList.add("show");

    },300);

});
const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name");
        let mobile = document.getElementById("mobile");
        let email = document.getElementById("email");
        let message = document.getElementById("message");

        let valid = true;


        // पुराने Error हटाओ
        document.querySelectorAll(".error-message").forEach(el => el.remove());


        // पुराने Border हटाओ
        document.querySelectorAll("input, textarea").forEach(el => {
            el.classList.remove("error", "success");
        });



        // Name Validation
        if (name.value.trim() === "") {

            showError(name, "❌ कृपया अपना नाम दर्ज करें");
            valid = false;

        } else {

            name.classList.add("success");

        }



        // Mobile Validation
        if (!/^[6-9]\d{9}$/.test(mobile.value.trim())) {

            showError(mobile, "❌ सही मोबाइल नंबर दर्ज करें");
            valid = false;

        } else {

            mobile.classList.add("success");

        }



        // Email Validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {

            showError(email, "❌ सही ईमेल दर्ज करें");
            valid = false;

        } else {

            email.classList.add("success");

        }



        // Message Validation
        if (message.value.trim() === "") {

            showError(message, "❌ कृपया अपना संदेश लिखें");
            valid = false;

        } else {

            message.classList.add("success");

        }



        // अगर सब सही है तो WhatsApp भेजें
        if (valid) {


            let ownerNumber = "916378747887";


            let whatsappMessage =
`📩 नई Contact Inquiry

👤 नाम: ${name.value}

📱 मोबाइल: ${mobile.value}

✉️ ईमेल: ${email.value}

💬 संदेश:
${message.value}`;


            let whatsappURL =
            "https://wa.me/" + ownerNumber + "?text=" + encodeURIComponent(whatsappMessage);


            window.open(whatsappURL, "_blank");


            form.reset();


            document.querySelectorAll(".success").forEach(el => {
                el.classList.remove("success");
            });

        }


    });

}



// Error Function
function showError(input, message) {

    input.classList.add("error");

    let small = document.createElement("div");

    small.className = "error-message";

    small.innerText = message;

    input.after(small);

}



document.querySelectorAll("#contactForm input, #contactForm textarea").forEach(input => {

    input.addEventListener("input", function () {


        this.classList.remove("error");


        const error = this.nextElementSibling;

        if (error && error.classList.contains("error-message")) {

            error.remove();

        }


    });

});
const whatsapp = document.querySelector(".whatsapp-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        whatsapp.style.opacity = "1";
        whatsapp.style.visibility = "visible";

    } else {

        whatsapp.style.opacity = "0";
        whatsapp.style.visibility = "hidden";

    }

});
// Consultation Popup

const bookBtn = document.getElementById("bookBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");


bookBtn.addEventListener("click", function(e){

    e.preventDefault();

    popup.classList.add("active");

});


closePopup.addEventListener("click", function(){

    popup.classList.remove("active");

});


// Outside click close

popup.addEventListener("click", function(e){

    if(e.target === popup){

        popup.classList.remove("active");

    }

});
// Popup Form WhatsApp Submit

const popupForm = document.getElementById("popupForm");

if (popupForm) {

    popupForm.addEventListener("submit", function(e){

        e.preventDefault();

        let name = document.getElementById("pname").value;
        let mobile = document.getElementById("pmobile").value;
        let dob = document.getElementById("pdob").value;
        let problem = document.getElementById("pproblem").value;


        // यहां अपना WhatsApp नंबर डालें
        let ownerNumber = "919509931253";


        let message = 
`🔮 नई Consultation Booking

👤 नाम: ${name}

📱 मोबाइल: ${mobile}

🎂 जन्म तिथि: ${dob}

💬 समस्या:
${problem}`;


        let whatsappURL = 
        "https://wa.me/" + ownerNumber + "?text=" + encodeURIComponent(message);


        window.open(whatsappURL, "_blank");


        // Form Reset
        popupForm.reset();


    });

}