/*Drop down menu functionality*/
let menuToggle = function(){
    let menu = document.querySelector('#menu');
    menu.classList.toggle('hide');
    console.log('clicked');
}

let hamburger = document.querySelector('#menuBtn');
hamburger.addEventListener('click', menuToggle);