// Circulo

const circle = document.querySelector('.circle');
const spans = circle.querySelectorAll('span');

const radius = 250;
const totalSpans = spans.length;
const angleStep = 360 / totalSpans;

spans.forEach((span, i) => {
    const angle = angleStep * i;
    span.style.transform = `rotateY(${angle}deg) translateZ(${radius}px`;
});




// Codigo JS del menú de navegación fija
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}


// Menú de navegación lateral

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents ="none";
}

cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents ="auto";
}

// La barra de navegación lateral se cierra mientras hacemos click en los enlaces de navegación

let navLinks = document.querySelector(".menu li a");
for (var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    });
}

// Contador Sobre mi

document.addEventListener('DOMContentLoaded', () => {
        const counters = document.querySelectorAll('.premium-counter-init');
        
        counters.forEach(counter => {
            counter.innerText = '0';
            const updateCounter = () => {
                const target = +counter.getAttribute('data-to-value');
                const count = +counter.innerText;
                const increment = target / 200;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCounter, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    });