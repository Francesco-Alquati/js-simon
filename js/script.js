
function generateNumberArray(min, max) {
    let start_numbers = [];
    let randomNum;
    const maxNum = 5;

    while(start_numbers.length < maxNum){
            // Genera cella casuale nel range di difficoltà
            randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            if(!start_numbers.includes(randomNum)){
                //PUSHO NELL'ARRAY IN NUMERO CASUALE GENERATO SE NON è UN DUPLICATO
                start_numbers.push(randomNum);
            }
    }
return start_numbers.join(" - ");

}

// RICHIAMO L'ELEMENTO DAL DOM
let numeri = document.getElementById('numbers');

// INIETTO L'ARRAY NEL DOM
numeri.innerText = generateNumberArray(1, 1000);


// CREO UN TIMOUT PER FAR SPARIRE I NUMERI DOPO 30 SECONDI 
setTimeout(() => {
    // NASCONDO GLI ELEMENTI 
    numeri.style.display = "none"; 
    // 30 SECONDI TI TIMEOUT
  }, 30000); 


