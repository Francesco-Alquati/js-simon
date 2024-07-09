
function generateNumbersArray(min, max) {
    let start_numbersArray = [];
    let randomNum;
    const maxNum = 5;

    while(start_numbersArray.length < maxNum){
            // Genera cella casuale nel range di difficoltà
            randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            if(!start_numbersArray.includes(randomNum)){
                //PUSHO NELL'ARRAY IN NUMERO CASUALE GENERATO SE NON è UN DUPLICATO
                start_numbersArray.push(randomNum);
            }
    }
return start_numbersArray.join(' - ');

}

function startGame(){

    // NASCONDO IL BOTTONE
    btn.style.display = 'none';

    // RICHIAMO L'ELEMENTO DAL DOM
    let numeri = document.getElementById('numbers');
    
    // INIETTO L'ARRAY NEL DOM
    numeri.innerText = generateNumbersArray(1, 1000);
    
    
    // CREO UN TIMOUT PER FAR SPARIRE I NUMERI DOPO 30 SECONDI 
    setTimeout(() => {
        // NASCONDO GLI ELEMENTI 
        numeri.style.display = "none"; 
        // 30 SECONDI TI TIMEOUT
    }, 30000); 
}

// RECUPERO IL BUTTON
const btn = document.getElementById('start');

// FUNZIONE ANONIMA PER IL BUTTON
btn.addEventListener('click', function(){

    // CHIAMO LA FUNZIONE CHE MI FA COMINCIARE LA PARTITA
    startGame();
})




