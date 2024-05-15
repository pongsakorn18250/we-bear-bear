const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
    // this is a scroll & swap color  nav bar menu
});


//  Hamburger button for responsive ค ว ย 
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');


 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
 }

 window.onscroll= () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
 }