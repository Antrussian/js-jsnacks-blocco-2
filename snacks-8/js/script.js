/* Crea 10 oggetti che rappresentano una zucchina, 
indicandone per ognuno varietà, peso e lunghezza.
 Calcola quanto pesano tutte le zucchine */



let zucchine = [

  { varietà: 'Zucchina1', 
  peso: 150, 
  lunghezza: 20 },

  { varietà: 'Zucchina2', 
  peso: 120,    
  lunghezza: 18 },

  { varietà: 'Zucchina3',
   peso: 130,
   lunghezza: 22 },

  { varietà: 'Zucchina4', 
  peso: 110, 
  lunghezza: 16 },

  { varietà: 'Zucchina5', 
  peso: 140, 
  lunghezza: 24 },

  { varietà: 'Zucchina6', 
  peso: 160, 
  lunghezza: 26 },

  { varietà: 'Zucchina7', 
  peso: 100, 
  lunghezza: 14 },

  { varietà: 'Zucchina8', 
  peso: 180, 
  lunghezza: 28 },

  { varietà: 'Zucchina9', 
  peso: 170, 
  lunghezza: 25 },

  { varietà: 'Zucchina10',
   peso: 200, 
   lunghezza: 30 }

];


let pesoTotale = zucchine.reduce((totale, zucchina) => totale + zucchina.peso, 0);

console.log( pesoTotale + 'g');