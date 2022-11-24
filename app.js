const menuBtn = document.querySelector('.nav-link');
const harmburger = document.querySelector('.nav-link_burger');
const navBar = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        harmburger.classList.add('open');
        navBar.classList.add('open');
        navMenu.classList.add('open');
    }else{
        harmburger.classList.remove('open');
        navBar.classList.remove('open');
        navMenu.classList.remove('open');

        showMenu = false;
    }
}