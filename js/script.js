
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
return start_numbersArray;

}

function startGame(){

    // RECUPERO IL BUTTON
    const startButton = document.getElementById('start');
    // NASCONDO IL BOTTONE
    startButton.style.display = 'none';

    // PRENDO L'ELEMENTO DAL DOM
    const numbersElement = document.getElementById('numbers');

    // RICHIAMO LA FUNZIONE DENTRO UNA CONST
    const numbersArray = generateNumbersArray(1, 100);

    // INIETTO NEL DOM IL RISULTATO DELLA FUNZIONE 
    numbersElement.innerText = numbersArray.join(' - ');
    
    
    // CREO UN TIMOUT PER FAR SPARIRE I NUMERI DOPO 30 SECONDI 
    setTimeout(() => {
        // NASCONDO GLI ELEMENTI 
        numbersElement.style.display = "none";
        // 30 SECONDI TI TIMEOUT
    }, 30000); 

    // FACCIO APPARIRE IL PROMPT UN SECONDO DOPO CHE I NUMERI SONO SPARITI
    setTimeout(userInputNumbers, 32000, numbersArray);

}

// FUNZIONE PER FARE INSERIRE I NUMERI ALL'UTENTE TRAMITE PROMPT
function userInputNumbers(numbersArray) { 

    // DICHIARO L'ARRAY DI NUMERI INDOVINATI
    let guessedNumbers = [];
    // DICHIARO LA VARIABILE PER CONTARE I NUMERI NON INDOVINATI
    let wrongGuesses = 0;
    // DICHIARO LA VARIABILE DEL PUNTEGGIO
    let score = 5;

    // CICLO PER FAR INSERIRE 5 NUMERI ALL'UTENTE
    for (let i = 0; i < numbersArray.length; i++) {
        let userGuess = parseInt(prompt(`Inserisci il ${i + 1}° numero: `));
    
        // SE IL NUMERO INSERITO è PRESENTE NELL'ARRAY DI NUMERI INIZIALI ALLORA LO PUSHO NEL NUOVO ARRAY DI NUMERI INDOVINATI
        if(numbersArray.includes(userGuess)){
            guessedNumbers.push(userGuess);
        // SENNO AUMENTO IL CONTATORE DI RISPOSTE SBAGLIATE
        }else{
            wrongGuesses++;
            score --;
        }
    }
    result(guessedNumbers, wrongGuesses, score);
}

// CREO UNA FUNZIONE PER MOSTRARE I RISULTATI
function result(guessedNumbers, wrongGuesses, score){

    scoreElement = document.getElementById('score');
    scoreElement.innerHTML = `Il tuo punteggio è : <span class="green">${score}</span>`

    guessedNumbersElement = document.getElementById('guessed-numbers')
    guessedNumbersElement.innerHTML = `Numeri indovinati: [ ${guessedNumbers.join(' , ')} ]`;

    wrongGuessesElement = document.getElementById('wrong-answer')
    wrongGuessesElement.innerHTML = `Numeri sbagliati: <span class="red">${wrongGuesses}</span>`;
}

// AGGIUNGO L'EVENTLISTENER AL CLICK DEL BUTTON
document.getElementById('start').addEventListener('click', startGame);





