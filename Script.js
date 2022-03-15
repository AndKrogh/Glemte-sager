

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
    document.location.href="registrergenstand.html";
}

function feedKnap (){
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

function validate(){
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    let text;
    if(name.length < 5){
      text = "giv genstanden et navn jooo";
      error_message.innerHTML = text;
      return false;
    }


    if(message.length <= 5){
      text = "tilføj lidt beskrivelse fætter guf";
      error_message.innerHTML = text;
      return false;
    }
    alert("det gik krattedeme godt!! ");
    return true;
  }



//Emma javascript



// Gro javascript

function myFunction() {
  let txt;
  if (confirm("Bekræft reservation med nemid")) {
    txt = "Bekræftigelse godkendt! Du kan nu hente din glemte genstand i informationen";
  } else {
    txt = "Bekræftigelse annulleret";
  }
  document.getElementById("demo").innerHTML = txt;
}


//Steph javascript

Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var milli = now.getMilliseconds(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var tags = ["mon", "d", "y", "h", "m", "s"],
    corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
