export default function initAnimationPlanilhas() {
    const planilhaButton = document.querySelectorAll('.js-runner__button') //animação botao planilhas
    setInterval(()=> { 
        planilhaButton.forEach((item)=> {
            item.classList.toggle('animation')      
        })   
    }, 700)
    
    const boxPlanilha = document.querySelectorAll('.js-box');
    
    const contentPlanilha = document.querySelectorAll('.js-content');
   
    
    function addClass(index) {
        boxPlanilha[index].classList.toggle('planilha-color');
        contentPlanilha[index].classList.toggle('planilha-display');
        
    }
    
    planilhaButton.forEach((itemButton, index) => {
        itemButton.addEventListener('click', () => {
            addClass(index);
        })
    })
}
