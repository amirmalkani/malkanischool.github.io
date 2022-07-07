let navbarToggle =  document.getElementById('navbar-toggle');
let navb = document.getElementById('navb');
let nav_ul = document.getElementById('navul');

navbarToggle.addEventListener("click" , function(){
    // rightNav.classList.toggle('v-nav-resp');
    nav_ul.classList.toggle('v-nav-resp');
    navb.classList.toggle('h-nav-resp');
})