export default function toggleNav () { // Funcao para o botao Nav-Bar
    const button = document.querySelector('[data-nav="menu"]');
    button.addEventListener('click', () => {
        const links = document.querySelector('[data-nav="links"]');
        const linkState = links.classList;
         linkState.toggle('open') 
     })
 }