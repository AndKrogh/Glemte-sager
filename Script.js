

// Anders javascript


let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

const hamburgerMenu = [hamburger, navMenu];

hamburger.addEventListener('click', function(){
    hamburgerMenu[0,1].classList.toggle("active");
});


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', function() {
    hamburgerMenu[0, 1].classList.remove("active");
}));




// Peter javascript




//Jack javascript





//Emma javascript



// Gro javascript




//Steph javascript
