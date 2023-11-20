/*Dare la possibilità di inserire due parole.
 Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due. */



let parola1 = prompt('Inserisci parola 1');
let parola2 = prompt('Inserisci parola 2');


function verificaLunghezza(parola1, parola2) {
    if (parola1.length === parola2.length) {

        return "Le due parole hanno la stessa lunghezza.";

    } else if (parola1.length > parola2.length) {

        return  parola1;

    } 
    
    else {
        return  parola2;
    }
}

console.log(verificaLunghezza(parola1, parola2));
