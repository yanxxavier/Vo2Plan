export default function toggleNav () { // Funcao para o botao Nav-Bar
    const button = document.querySelector('.js-menu');
    const links = document.querySelector('.nav-links');
    const linkState = links.classList;
 
     linkState.toggle('open') 
     
     button.addEventListener('click', toggleNav)
 }