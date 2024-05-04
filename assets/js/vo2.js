function toggleMenu () {
   const button = document.querySelector('.js-menu');
   const links = document.querySelector('.nav-links');
   const linkState = links.classList;
   
    linkState.toggle('open')
   
   
   
}


function calcCooper(e) {
    e.preventDefault();


    const resultArea = document.querySelector('.js-result')
    let distance = document.getElementById('js-distance').value;
    let age = document.getElementById('age__input').value;
    let radioBtns = document.querySelectorAll("input[name = 'generos']");
    let classification;

    let findSelected = () => {
        let selected = document.querySelector("input[name = 'generos']:checked").value; 
    }

    radioBtns.forEach(radioBtn => {
        radioBtn.addEventListener('change', findSelected)
    })
    findSelected();

    if(selected = 'feminino') {
        if (age >= 13 && age <= 19) { //primeira class fem
            if (vo2 < 35) {
                classification = "Muito Pobre";
            }else if (vo2 >= 35 && vo2 <= 38.3) {
                classification = "Pobre";
            }else if (vo2 >= 38.4 && vo2 <= 45.1) {
                classification = "Regular";
            }else if (vo2 >= 45.2 && vo2 <= 50.9) {
                classification = "Bom";
            }else if (vo2 >= 51 && vo2 <= 55.9){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }
             

        }else if (age >= 20 && age <= 29) { //segunda classe masc
            if (vo2 < 33) {
                classification = "Muito Pobre";
            }else if (vo2 >= 33 && vo2 <= 36.4) {
                classification = "Pobre";
            }else if (vo2 >= 36.5 && vo2 <= 42.4) {
                classification = "Regular";
            }else if (vo2 >= 42.5 && vo2 <= 46.4) {
                classification = "Bom";
            }else if (vo2 >= 46.5 && vo2 <= 52.4){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }

        }else if (age >= 30 && age <=39) { //terceira classe masc
            if (vo2 < 31.5) {
                classification = "Muito Pobre";
            }else if (vo2 >= 31.5 && vo2 <= 35.4) {
                classification = "Pobre";
            }else if (vo2 >= 35.5 && vo2 <= 40.9) {
                classification = "Regular";
            }else if (vo2 >= 41 && vo2 <= 44.9) {
                classification = "Bom";
            }else if (vo2 >= 45 && vo2 <= 49.4){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }

        }else if (age >= 40 && age <=49) { //quarta classe masc
            if (vo2 < 30.2) {
                classification = "Muito Pobre";
            }else if (vo2 >= 30.2 && vo2 <= 33.5) {
                classification = "Pobre";
            }else if (vo2 >= 33.6 && vo2 <= 38.9) {
                classification = "Regular";
            }else if (vo2 >= 39 && vo2 <= 43.7) {
                classification = "Bom";
            }else if (vo2 >= 43.8 && vo2 <= 48){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }

        }else if (age >= 50 && age <=59) { //quinta classe masc
            if (vo2 < 26.1) {
                classification = "Muito Pobre";
            }else if (vo2 >= 26.1 && vo2 <= 30.9) {
                classification = "Pobre";
            }else if (vo2 >= 31 && vo2 <= 35.7) {
                classification = "Regular";
            }else if (vo2 >= 35.8 && vo2 <= 40.9) {
                classification = "Bom";
            }else if (vo2 >= 41 && vo2 <= 45.3){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }

        }else if (age > 60) { //sexta e última classe masc
            if (vo2 < 20.5) {
                classification = "Muito Pobre";
            }else if (vo2 >= 20.5 && vo2 <= 26) {
                classification = "Pobre";
            }else if (vo2 >= 26.1 && vo2 <= 32.2) {
                classification = "Regular";
            }else if (vo2 >= 32.3 && vo2 <= 36.4) {
                classification = "Bom";
            }else if (vo2 >= 36.5 && vo2 <= 44.2){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }
            
        }
    }else if(selected = 'masculino') {
        if (age >= 13 && age <= 19) { //primeira class masc
            if (vo2 < 35) {
                classification = "Muito Pobre";
            }else if (vo2 >= 35 && vo2 <= 38.3) {
                classification = "Pobre";
            }else if (vo2 >= 38.4 && vo2 <= 45.1) {
                classification = "Regular";
            }else if (vo2 >= 45.2 && vo2 <= 50.9) {
                classification = "Bom";
            }else if (vo2 >= 51 && vo2 <= 55.9){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }
             

        }else if (age >= 20 && age <= 29) { //segunda classe masc
            if (vo2 < 33) {
                classification = "Muito Pobre";
            }else if (vo2 >= 33 && vo2 <= 36.4) {
                classification = "Pobre";
            }else if (vo2 >= 36.5 && vo2 <= 42.4) {
                classification = "Regular";
            }else if (vo2 >= 42.5 && vo2 <= 46.4) {
                classification = "Bom";
            }else if (vo2 >= 46.5 && vo2 <= 52.4){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }

        }else if (age >= 30 && age <=39) { //terceira classe masc
            if (vo2 < 31.5) {
                classification = "Muito Pobre";
            }else if (vo2 >= 31.5 && vo2 <= 35.4) {
                classification = "Pobre";
            }else if (vo2 >= 35.5 && vo2 <= 40.9) {
                classification = "Regular";
            }else if (vo2 >= 41 && vo2 <= 44.9) {
                classification = "Bom";
            }else if (vo2 >= 45 && vo2 <= 49.4){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }

        }else if (age >= 40 && age <=49) { //quarta classe masc
            if (vo2 < 30.2) {
                classification = "Muito Pobre";
            }else if (vo2 >= 30.2 && vo2 <= 33.5) {
                classification = "Pobre";
            }else if (vo2 >= 33.6 && vo2 <= 38.9) {
                classification = "Regular";
            }else if (vo2 >= 39 && vo2 <= 43.7) {
                classification = "Bom";
            }else if (vo2 >= 43.8 && vo2 <= 48){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }

        }else if (age >= 50 && age <=59) { //quinta classe masc
            if (vo2 < 26.1) {
                classification = "Muito Pobre";
            }else if (vo2 >= 26.1 && vo2 <= 30.9) {
                classification = "Pobre";
            }else if (vo2 >= 31 && vo2 <= 35.7) {
                classification = "Regular";
            }else if (vo2 >= 35.8 && vo2 <= 40.9) {
                classification = "Bom";
            }else if (vo2 >= 41 && vo2 <= 45.3){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }

        }else if (age > 60) { //sexta e última classe masc
            if (vo2 < 20.5) {
                classification = "Muito Pobre";
            }else if (vo2 >= 20.5 && vo2 <= 26) {
                classification = "Pobre";
            }else if (vo2 >= 26.1 && vo2 <= 32.2) {
                classification = "Regular";
            }else if (vo2 >= 32.3 && vo2 <= 36.4) {
                classification = "Bom";
            }else if (vo2 >= 36.5 && vo2 <= 44.2){
                classification = "Excelente";
            }else {
                classification = "Superior";
            }
            
        }
    }


    let vo2 = (0.0268 * distance) - 11.3;

    

    resultArea.textContent = `Seu VO2 Max é de: ${vo2.toFixed(2)} \n Se encaixa na categoria: ${classification}`
    

    
}

const calcForm = document.querySelector('.js-form');
calcForm.addEventListener('submit', calcCooper);