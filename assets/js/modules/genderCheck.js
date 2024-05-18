export default function genderCheck() { // Funcao para checar o genero
    let radioBtns = document.querySelectorAll("input[name = 'generos']");
    let gender;
    let findSelected = () => {
        let selectedElement = document.querySelector("input[name = 'generos']:checked");
        return selectedElement ? selectedElement.value : null; 
    }
    radioBtns.forEach(radioBtn => {
        radioBtn.addEventListener('change', findSelected)
    })
    return gender = findSelected();
}