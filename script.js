//ativar menu botão//
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}
//menu bar scroll//

window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}
//scroll reveal//

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-bio h1, .sobre-resulmo', {origin: 'left'});
ScrollReveal().reveal('.home-bio p', {origin: 'left'});
ScrollReveal().reveal('.home-bio, heading', {origin: 'top'});
ScrollReveal().reveal('.foto-perfil, .sobre-itens, .habilidades-itens, .projetos-itens, .form ', {origin: 'bottom'});

//Typing Animation//
const animText = new Typed ('.animated-text', {
    strings: ['Web Developer', 'Designer'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true    

});