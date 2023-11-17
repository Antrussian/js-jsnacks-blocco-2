/*
Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.
*/



let nomi = ['Mario', 'Luigi', 'Giovanna', 'Sofia', 'Alessio', 'Francesca'];
let cognomi = ['Rossi', 'Bianchi', 'Ferrari', 'Esposito', 'Ricci', 'Gallo'];


let listaInvitati = [];

for (let i = 0; i < 6; i++) {
    let indiceNome = Math.floor(Math.random() * nomi.length);
    let indiceCognome = Math.floor(Math.random() * cognomi.length);

    let nomeCasuale = nomi[indiceNome];
    let cognomeCasuale = cognomi[indiceCognome];

    let invitatoCasuale = nomeCasuale + ' ' + cognomeCasuale;
    listaInvitati.push(invitatoCasuale);
}

console.log("Lista Falsa di Invitati:", listaInvitati);
