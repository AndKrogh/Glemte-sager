

// Anders javascript

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

function forsideKnapLinks (){
    document.location.href="feed.html";
}

function forsideKnapLinks1 (){
    document.location.href="fundetnoget.html";
}

function forsideKnapLinks2 (){
    document.location.href="reservation.html";
}

/* let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

const hamburgerMenu = [hamburger, navMenu];

hamburger.addEventListener('click', function(){
    hamburgerMenu[0,1].classList.toggle("active");
});


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', function() {
    hamburgerMenu[0, 1].classList.remove("active");
})); */




// Peter javascript


let faq = document.getElementsByClassName("faq-page");
let i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



//Jack javascript





//Emma javascript



// Gro javascript




//Steph javascript

// const beskrivelse1 = document.getElementById('beskrivelse');
// const reserver1 = document.getElementsByClassName('reserverKnap');
// const out1 = document.getElementById('output1');
//
// function fun1() {
//   out1.innerHTML = beskrivelse1.value;
// }
// reserver1.addEventListener('click', fun1);
