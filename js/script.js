// FUNZIONE PER GENERARE UN NUMERO CASUALE IN UN INTERVALLO
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

