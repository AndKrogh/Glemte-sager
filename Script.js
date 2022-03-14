

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
