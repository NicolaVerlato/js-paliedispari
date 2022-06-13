// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedere all'utente
const userWord = prompt('Dimmi un nome');
const userWordPalindroma = palindroma(userWord);

// funzione che permette di valutare se la parola è palindomo o no
function palindroma(word) {

    //V1
    // array per la parola così com'è scritta
    const arrayName = [];

    // array per la parola al contrario
    const arrayReverseName = [];
    
    //variabile dove salvo la parola rigirata
    let reversedWord = '';

    // scorrere le lettere del nome inserito
    // for(let i = 0; i < word.length; i++) {
    //     let thisName = (word[i]);
    //     arrayName.push(thisName);
    // }

    // scorrere all'indietro le lettere del nome inserito
    // for(let i = word.length -1; i >= 0; i--) {
    //     let thisNameReverse = (word[i]);
    //     arrayReverseName.push(thisNameReverse);
    // }

    // for(let i = 0; i < arrayReverseName.length; i++){
    //     console.log(arrayReverseName[i]);
    //     reversedWord += arrayReverseName[i];
    // }


    //V2
    for(let i = word.length -1; i >= 0; i--) {
        reversedWord += word[i];
    }

    // se le lettere del primo array combaciano con quelle del secondo array la condizione è vera
    let comparazione = false;
    if(word === reversedWord){
        comparazione = true;
    } 

    // console.log(arrayName)
    // console.log(arrayReverseName)

    return comparazione;
    
}

if(userWordPalindroma) {
    alert('La parola è palindroma')
} else {
    alert('La parola non è palindroma')
}
