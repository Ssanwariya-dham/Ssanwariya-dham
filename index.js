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