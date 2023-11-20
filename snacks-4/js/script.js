/*
Crea una funzione che accetta due numeri,
 se il primo e' divisibile per il secondo,
 allora ritorna vero, 
 altrimenti ritorna falso. 
 Micro bonus: se sono uguali ritorna il numero.
*/

let primoNumero= prompt('Inserisci primo numero');
let secondoNumero = prompt('Inserisci secondo numero');





console.log(divisibile(primoNumero,secondoNumero));


function divisibile (numberFirst, nuberSecond) {
    if (numberFirst % nuberSecond === 0 ) {
    return true;
        }   

    else {
        return false;
    }    



}
