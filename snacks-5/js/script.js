/*Crea una funzione che accetta due elementi del dom,
 uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.
*/




let wrapperElement = document.querySelector('.wrapper'); 

let newElement = document.createElement('p'); 

newElement.innerHTML = "ciaoo";



inserisciElemento(newElement, wrapperElement);




function inserisciElemento (parent,figlio)

{

   figlio.appendChild(parent);
  
}

