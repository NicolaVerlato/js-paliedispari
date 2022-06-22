// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const button = document.getElementById('btn');
button.addEventListener('click',
    function() {
        // chiedo all'utente pari o dispari
        const userEvenOrOdd = document.getElementById('user-even-or-odd').value;

        // chiedo all'utente un numero da 1 a 5
        const userNumber = parseInt( document.getElementById('user-number').value);

        // gerazione numero random computer
        const randomComputer = getRndInteger(1, 5);
        const computerText = document.getElementById('pc-number');
        computerText.innerHTML += ' ' + randomComputer;
            
        // somma due numeri
        const textSum = document.getElementById('somma');
        const sum = userNumber + randomComputer;
        textSum.innerHTML += sum;
        
        // stampo in pagina il vincitore tramite la funzione sumEvenOrOdd
        const vincitore = document.getElementById('vincitore');
        vincitore.innerHTML += sumEvenOrOdd(userEvenOrOdd, sum);
    }
)

// --------------
// FUNZIONI
// --------------
// funzione per genrare un numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

 // funzione per sapere se la somma è pari o dispari
 function sumEvenOrOdd(evenOrOdd, sum) {
    let winner;
    if(evenOrOdd === 'pari' &&  sum % 2 === 0) {
        winner = 'Hai Vinto!';
    } else if(evenOrOdd === 'dispari' && sum % 2 !== 0){
        winner = 'Hai Vinto!';
    } else {
        winner = 'Hai Perso!';
    }

    return winner;
}



