/*Crea un array vuoto 
e chiedi all'utente un numero
 da inserire nell'array.
Continua a chiedere i numeri all'utente
 e a inserirli nell'array 
 fino a quando la somma degli elementi è minore di 50.*/



 let numeri = [];
 let somma = 0;
 
 while (somma < 50) {
     let numeroInserito = parseFloat(prompt("Inserisci un numero:"));
 
 
     if (somma + numeroInserito <= 50) {
         numeri.push(numeroInserito);
         somma += numeroInserito;
     } else {
         console.log("Il numero inserito supera 50.");
     }
 }
 
 console.log("La somma degli elementi ha superato 50.:", numeri);
 