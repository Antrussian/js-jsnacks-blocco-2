/*Crea una funzione che accetta due elementi del dom,
 uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.
*/




let parentElement = document.getElementById('container'); 
let childElement = document.createElement('p'); 

inserisciElemento(parentElement, childElement);




function inserisciElemento (parent,figlio);

{
    let nuovoElemento = document.createElement('div');
    nuovoElemento.appendChild = figlio ;
    parent.appendChild(nuovoElemento);
}