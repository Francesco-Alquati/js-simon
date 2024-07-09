
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

let numeri = document.getElementById('numbers');

numeri.innerText = generateNumberArray(1, 1000);


