/*Chiedo all'utente un numero
e genero attraverso una funzione un numero di quadrati equivalente al numero inserito dall'utente nel DOM,
 in qualsiasi forma. */


 /*Chiedo all'utente un numero */

 let numberChoice = parseInt (prompt ('Inserisci un numero'));

    generaSquare(numberChoice);





 function generaSquare (numeroIndice) {

    for (let i = 0 ; i <= numeroIndice ; i++ ) {

        let square = document.createElement('div');
        
        square.classList.add('quadrato');
    
        document.body.appendChild(square);
        
        }
        

 }


 /*funzione che genera quadrati modifica indice for */
